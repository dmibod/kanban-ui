import React from 'react';
import { connect } from 'react-redux';
import {
  fetchLaneCards,
  createCard
} from '../../actions';
import Card from './Card';

class CardLane extends React.Component {
  componentDidMount() {
    const { lane, fetchLaneCards } = this.props;

    if (lane && fetchLaneCards) {
        fetchLaneCards(lane.id);
    }
  }

  renderCards() {
    const { record } = this.props;

    if (!record) {
      return null;
    }

    return record.cards.map(card => <Card key={card.id} name={card.name} />);
  }

  createCard = () => {
    const { lane, createCard } = this.props;

    if (lane && createCard) {
      createCard('Card', lane.id);
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

const mapStateToProps = (state, ownProps) => {
  return {
    record: state.laneCards[ownProps.lane.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchLaneCards, createCard }
)(CardLane);
