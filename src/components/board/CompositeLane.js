import React from 'react';
import { connect } from 'react-redux';
import {
  fetchLaneLanes,
  createLane,
  createCardLane
} from '../../actions';
import Lane from './Lane';

class CompositeLane extends React.Component {
  componentDidMount() {
    const { lane, fetchLaneLanes } = this.props;

    if (lane && fetchLaneLanes) {
      fetchLaneLanes(lane.id);
    }
  }

  renderLanes() {
    const { record } = this.props;

    if (!record) {
      return null;
    }

    return record.lanes.map(lane => <Lane key={lane.id} lane={lane} />);
  }

  createChild = () => {
    const { lane, createCardLane } = this.props;

    if (lane && createCardLane) {
      createCardLane('CardLane', lane.id);
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
  return {
    record: state.laneLanes[ownProps.lane.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchLaneLanes, createLane, createCardLane }
)(CompositeLane);
