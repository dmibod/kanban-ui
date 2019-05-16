import React from 'react';
import { connect } from 'react-redux';
import Lane from './Lane';

class Body extends React.Component {
  renderLanes() {
    const { board, editable } = this.props;

    if (!board || !board.children) {
      return null;
    }

    return board.children.map(id => board.lanes[id]).map(lane => <Lane key={lane.id} lane={lane} board={board} editable={editable}/>);
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
    board: state.boards[ownProps.board.id]
  };
};

export default connect(mapStateToProps)(Body);

