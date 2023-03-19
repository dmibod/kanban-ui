import React from 'react';
import { connect } from 'react-redux';
import { excludeAndDeleteLane } from '../../actions/lane';
import { createCard, moveCard, excludeAndDeleteCard } from '../../actions/card';
import Card from './Card';

class CardLane extends React.Component {
  renderCards() {
    const { lane, board, editable } = this.props;

    if (!lane || !lane.children) {
      return null;
    }

    return lane.children
      .map(id => board.cards[id])
      .filter(card => card)
      .map(card => (
        <Card
          key={card.id}
          board={board}
          card={card}
          lane={lane}
          editCard={this.editCard}
          deleteCard={this.deleteCard}
          editable={editable}
        />
      ));
  }

  createCard = () => {
    const { lane, board, createCard, editable } = this.props;

    if (editable && lane && createCard) {
      createCard(board.id, lane.id, 'Card');
    }
  };

  moveCard = (cardId, fromLaneId) => {
    const { lane, board, moveCard, editable } = this.props;

    if (editable && lane && moveCard) {
      moveCard(board.id, fromLaneId, lane.id, cardId);
    }
  };

  editCard = id => {
    const { board, editable, onConfirm } = this.props;

    if (editable) {
      let card = board.cards[id];
      onConfirm(undefined, `Edit ${card.name}?`);
    }
  };

  deleteCard = id => {
    const {
      lane,
      board,
      excludeAndDeleteCard,
      editable,
      onConfirm
    } = this.props;

    if (editable && lane && excludeAndDeleteCard) {
      let card = board.cards[id];
      onConfirm(undefined, `Delete ${card.name}?`, () =>
        excludeAndDeleteCard(board.id, lane.id, id)
      );
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

    return (
      <div id={lane.id} className="lane-wrapper">
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
                  title="card"
                  onClick={this.createCard}
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
        <div
          className="lane-body"
          onDragOver={e => {
            if (e.dataTransfer.types.includes('card')) {
              e.preventDefault();
            }
          }}
          onDrop={e => {
            e.preventDefault();
            let cardId = e.dataTransfer.getData('card');
            let laneId = e.dataTransfer.getData('parent');
            this.moveCard(cardId, laneId);
          }}
        >
          {this.renderCards()}
        </div>
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
  { createCard, moveCard, excludeAndDeleteCard, excludeAndDeleteLane }
)(CardLane);
