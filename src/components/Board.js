import React from 'react';
import { connect } from 'react-redux';
import Header from './board/Header';
import Body from './board/Body';
import socket from '../apis/socket';
import { fetchBoard } from '../actions/board';

class Board extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    const { fetchBoard } = this.props;

    fetchBoard(id);

    socket(JSON.stringify({ id }));
  }

  componentWillUnmount() {
    socket(JSON.stringify({ id: '' }));
  }

  render() {
    const { board, editable } = this.props;

    if (!board) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Header board={board} editable={editable} />
        <Body board={board} editable={editable} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let board = state.boards[ownProps.match.params.id];
  let editable = state.auth.isSignedIn && board && board.owner === state.auth.userProfile.id

  return { board, editable };
};

export default connect(
  mapStateToProps,
  { fetchBoard }
)(Board);
