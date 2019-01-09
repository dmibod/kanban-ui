import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import { fetchBoards, deleteBoard } from '../../actions';

class List extends React.Component {
  componentDidMount() {
    this.props.fetchBoards();
  }

  render() {
    return (
      <div className="container-fluid board-list">
        <div className="lane-wrapper lane-item">
          <div className="lane-body">
            {this.props.boards.map(board => (
              <Item
                key={board.id}
                { ...{...board, admin: this.props.isSignedIn, deleteBoard: this.props.deleteBoard } }
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
    boards: boards.filter(t => t.name.toLowerCase().includes(filter)),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchBoards, deleteBoard }
)(List);
