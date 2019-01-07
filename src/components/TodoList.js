import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <div className="container-fluid board-list">
    <div className="lane-wrapper lane-item">
      <div className="lane-body">
        {todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            onTrash={() => removeTodo(todo.id)}
            onClick={() => toggleTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  </div>
);

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

export default TodoList;
