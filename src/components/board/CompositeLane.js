import React from 'react';
import { connect } from 'react-redux';
import { createLane, createCardLane } from '../../actions';
import Lane from './Lane';

class CompositeLane extends React.Component {
  renderLanes() {
    const { lane, board } = this.props;

    if (!lane || !lane.lanes) {
      return null;
    }

    return lane.lanes.map(lane => (
      <Lane key={lane.id} lane={lane} board={board} />
    ));
  }

  createChild = () => {
    const { lane, board, createCardLane } = this.props;

    if (lane && createCardLane) {
      createCardLane(board.id, 'CardLane', lane.id);
    }
  };

  render() {
    return (
      <div className="lane-wrapper">
        <div className="lane-header card-header border rounded-0">
          <div className="card-title mb-0">
            <div className="row mx-0">
              <div className="mr-auto">{this.props.lane.name}</div>
              <div
                className="hover-card-badges"
                style={{ display: /*editable*/ true ? 'inline' : 'none' }}
              >
                <i
                  className="fa fa-fw fa-file text-muted"
                  title="lane"
                  onClick={this.createChild}
                />
                <i className="fa fa-fw fa-pencil text-muted" title="edit" />
                <i
                  className="fa fa-fw fa-trash text-muted"
                  title="delete"
                  /*onClick={() => deleteLane(id)}*/
                />
              </div>
            </div>
          </div>
        </div>
        <div className="lane-body">{this.renderLanes()}</div>
      </div>
    );
  }
}

function findLane(lanes, id) {
  lanes = lanes || [];

  let found = lanes.find(el => el.id === id);

  if (found) {
    return found;
  }

  for (let i = 0; i < lanes.length; i++) {
    found = findLane(lanes[i].lanes, id);
    if (found) {
      return found;
    }
  }

  return null;
}

const mapStateToProps = (state, ownProps) => {
  let board = state.boards[ownProps.board.id];
  let lane = findLane(board.lanes, ownProps.lane.id);
  return { board, lane };
};

export default connect(
  mapStateToProps,
  { createLane, createCardLane }
)(CompositeLane);
