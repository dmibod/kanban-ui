import React from 'react';
import { connect } from 'react-redux';
import {
  createCard,
  deleteCard
} from '../../actions';
import Card from './Card';

class CardLane extends React.Component {
  renderCards() {
    const { lane } = this.props;

    if (!lane || !lane.cards) {
      return null;
    }

    return lane.cards.map(card => <Card key={card.id} card={card} deleteCard={this.deleteCard}/>);
  }

  createCard = () => {
    const { lane, board, createCard } = this.props;

    if (lane && createCard) {
      createCard(board.id, 'Card', lane.id);
    }
  };

  deleteCard = (id) => {
    const { lane, board, deleteCard } = this.props;

    if (lane && deleteCard) {
      deleteCard(board.id, id, lane.id);
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
  let lane  = findLane(board.lanes, ownProps.lane.id);
  return { board, lane };
};

export default connect(
  mapStateToProps,
  { createCard, deleteCard }
)(CardLane);
