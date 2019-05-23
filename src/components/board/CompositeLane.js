import React from 'react';
import { connect } from 'react-redux';
import { createLane, createCardLane, deleteLane } from '../../actions/lane';
import Lane from './Lane';

class CompositeLane extends React.Component {
  renderLanes() {
    const { lane, board, editable, onConfirm } = this.props;

    if (!lane || !lane.children) {
      return null;
    }

    return lane.children.map(id => board.lanes[id]).map(child => (
      <Lane key={child.id} lane={child} board={board} parentId={lane.id} editable={editable} onConfirm={onConfirm}/>
    ));
  }

  createChild = () => {
    const { lane, board, createCardLane, editable } = this.props;

    if (editable && lane && createCardLane) {
      createCardLane(board.id, lane.id, 'CardLane');
    }
  };

  deleteLane = () => {
    const { lane, board, deleteLane, parentId, editable, onConfirm } = this.props;

    if (editable && lane && deleteLane) {
      onConfirm(undefined, `Delete ${lane.name}?`, () => deleteLane(board.id, lane.id, parentId));
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
                  onClick={this.deleteLane}
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
  { createLane, createCardLane, deleteLane }
)(CompositeLane);
