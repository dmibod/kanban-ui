import React from 'react';
import { connect } from 'react-redux';
import { createLane, createCardLane } from '../../actions/lane';
import Lane from './Lane';

class CompositeLane extends React.Component {
  renderLanes() {
    const { lane, board, editable } = this.props;

    if (!lane || !lane.children) {
      return null;
    }

    return lane.children.map(id => board.lanes[id]).map(lane => (
      <Lane key={lane.id} lane={lane} board={board} editable={editable}/>
    ));
  }

  createChild = () => {
    const { lane, board, createCardLane, editable } = this.props;

    if (editable && lane && createCardLane) {
      createCardLane(board.id, lane.id, 'CardLane');
    }
  };

  render() {
    const { lane, editable } = this.props;

    return (
      <div id={lane.id} className="lane-wrapper">
        <div className="lane-header card-header border rounded-0">
          <div className="card-title mb-0">
            <div className="row mx-0">
              <div className="mr-auto">{lane.name}</div>
              <div
                className="hover-card-badges"
                style={{ display: editable ? 'inline' : 'none' }}
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

const mapStateToProps = (state, ownProps) => {
  let board = state.boards[ownProps.board.id];
  let lane = board.lanes[ownProps.lane.id];
  return { board, lane };
};

export default connect(
  mapStateToProps,
  { createLane, createCardLane }
)(CompositeLane);
