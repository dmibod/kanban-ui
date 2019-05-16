import React from 'react';
import { connect } from 'react-redux';
import {
  createCard,
  deleteCard
} from '../../actions/card';
import Card from './Card';

class CardLane extends React.Component {
  renderCards() {
    const { lane, board, editable } = this.props;

    if (!lane || !lane.children) {
      return null;
    }

    return lane.children.map(id => board.cards[id]).map(card => <Card key={card.id} card={card} deleteCard={this.deleteCard} editable={editable}/>);
  }

  createCard = () => {
    const { lane, board, createCard, editable } = this.props;

    if (editable && lane && createCard) {
      createCard(board.id, lane.id, 'Card');
    }
  };

  deleteCard = (id) => {
    const { lane, board, deleteCard, editable } = this.props;

    if (editable && lane && deleteCard) {
      deleteCard(board.id, id, lane.id);
    }
  };

  render() {
    const { lane, editable } = this.props;

    return (
      <div className="lane-wrapper">
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
                  title="card"
                  onClick={this.createCard}
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
        <div className="lane-body">{this.renderCards()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let board = state.boards[ownProps.board.id];
  let lane  = board.lanes[ownProps.lane.id];
  return { board, lane };
};

export default connect(
  mapStateToProps,
  { createCard, deleteCard }
)(CardLane);
