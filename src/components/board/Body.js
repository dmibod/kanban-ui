import React from 'react';
import { connect } from 'react-redux';
import { fetchBoardLanes } from '../../actions';
import Lane from './Lane';

class Body extends React.Component {
  componentDidMount() {
    const board = this.props.board;
    if (board) {
      this.props.fetchBoardLanes(board.id);
    }
  }

  componentDidUpdate(prevProps) {
    /*
    if (this.props.record.lanes.length !== prevProps.record.lanes.length) {
      this.props.fetchBoardLanes(this.props.record.id);
    }
    */
  }

  renderLanes() {
    const { record } = this.props;

    if (!record) {
      return null;
    }

    return record.lanes.map(lane => <Lane key={lane.id} lane={lane} />);
  }

  render() {
    const board = this.props.board;
    const layout = (board && board.layout) || 'V';
    const style = layout === 'V' ? 'flex-column' : 'flex-row';
    return <div className={`d-flex ${style}`}>{this.renderLanes()}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    record: state.boardLanes[ownProps.board.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchBoardLanes }
)(Body);

