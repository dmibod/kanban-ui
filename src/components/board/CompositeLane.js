import React from 'react';
import { connect } from 'react-redux';
import {
  createLane,
  createCardLane,
  excludeAndDeleteLane
} from '../../actions/lane';
import Lane from './Lane';

class CompositeLane extends React.Component {
  renderLanes() {
    const { lane, board, editable, onConfirm } = this.props;

    if (!lane || !lane.children) {
      return null;
    }

    return lane.children
      .map(id => board.lanes[id])
      .filter(lane => lane)
      .map(child => (
        <Lane
          key={child.id}
          lane={child}
          board={board}
          parentId={lane.id}
          editable={editable}
          onConfirm={onConfirm}
        />
      ));
  }

  createChild = () => {
    const { lane, board, createCardLane, editable } = this.props;

    if (editable && lane && createCardLane) {
      createCardLane(board.id, lane.id, 'CardLane');
    }
  };

  deleteLane = () => {
    const {
      lane,
      board,
      excludeAndDeleteLane,
      parentId,
      editable,
      onConfirm
    } = this.props;

    if (editable && lane && excludeAndDeleteLane) {
      onConfirm(undefined, `Delete ${lane.name}?`, () =>
        excludeAndDeleteLane(board.id, parentId, lane.id)
      );
    }
  };

  render() {
    const { lane, editable } = this.props;

    var text = lane.name + (lane.description ? ':' : '');

    const layout = (lane && lane.layout) || 'V';
    const style = layout === 'V' ? 'flex-column' : 'flex-row';

    return (
      <div id={lane.id} className="lane-wrapper composite-lane flex-fill">
        <div className="lane-header card-header border rounded-0">
          <div className="lane-title mb-0">
            <div className="row mx-0">
              <div className="mr-auto"><b>{text}</b> {lane.description}</div>
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
        <div className={`lane-body d-flex ${style}`}>{this.renderLanes()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let board = state.board;
  let lane = board.lanes[ownProps.lane.id];
  return { board, lane };
};

export default connect(
  mapStateToProps,
  { createLane, createCardLane, excludeAndDeleteLane }
)(CompositeLane);
