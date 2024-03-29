import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import {
  fetchBoards,
  shareBoard,
  deleteBoard
} from '../../actions/board';

class List extends React.Component {
  componentDidMount() {
    let { fetchBoards, currentUserId } = this.props;

    fetchBoards(currentUserId);
  }

  componentDidUpdate(prevProps) {
    let { fetchBoards, currentUserId } = this.props;

    if (currentUserId !== prevProps.currentUserId) {
      fetchBoards(currentUserId);
    }
  }

  deleteBoard = (id, name) => {
    const { onConfirm, deleteBoard } = this.props;

    if (onConfirm && deleteBoard) {
      onConfirm(undefined, `Delete ${name}?`, () => deleteBoard(id, false));
    }
  };

  render() {
    return (
      <div className="container-fluid board-list">
        <div className="lane-wrapper lane-item">
          <div className="lane-body">
            {this.props.boards.map(board => (
              <Item
                key={board.id}
                {...{
                  ...board,
                  editable: this.props.isSignedIn && this.props.currentUserId === board.owner,
                  shareBoard: this.props.shareBoard,
                  deleteBoard: this.deleteBoard
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  let boards = Object.values(state.boards);
  let filter = state.filter.toLowerCase();

  return {
    boards: boards.filter(board => (board.name || '').toLowerCase().includes(filter) || (board.description || '').toLowerCase().includes(filter) || (board.owner || '').toLowerCase().includes(filter)),
    currentUserId: state.auth.isSignedIn ? state.auth.user : null,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchBoards, shareBoard, deleteBoard }
)(List);
