import React from 'react';
import { connect } from 'react-redux';
import Header from './board/Header';
import Body from './board/Body';
import { fetchBoard } from '../actions';

class Board extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchBoard(id);
  }

  render() {
    if (!this.props.board) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Header board={this.props.board} />
        <Body />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    board: state.boards[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchBoard }
)(Board);
