import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import {
  fetchBoards,
  shareBoard,
  deleteBoard
} from '../../actions';

class List extends React.Component {
  componentDidMount() {
    this.props.fetchBoards(this.props.currentUserId);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currentUserId !== prevProps.currentUserId) {
      this.props.fetchBoards(this.props.currentUserId);
    }
  }

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
                  deleteBoard: this.props.deleteBoard
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

/*
TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};
*/

const mapStateToProps = state => {
  let boards = Object.values(state.boards);
  let filter = state.visibilityFilter.toLowerCase();

  return {
    boards: boards.filter(board => board.name.toLowerCase().includes(filter)),
    currentUserId: state.auth.isSignedIn ? state.auth.userProfile.id : null,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchBoards, shareBoard, deleteBoard }
)(List);
