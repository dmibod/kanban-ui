import React from 'react';
import { connect } from 'react-redux';
import Header from './board/Header';
import Body from './board/Body';
import socket from '../apis/socket';
import { fetchBoard } from '../actions';

class Board extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchBoard(id);

    socket(JSON.stringify({ id }));
  }

  componentWillUnmount() {
    socket(JSON.stringify({ id: '' }));
  }

  render() {
    if (!this.props.board) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Header board={this.props.board} />
        <Body board={this.props.board} />
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
