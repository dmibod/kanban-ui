import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';
import AddTodo from '../containers/AddTodo';

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <div className="lane-wrapper lane-item">
    <AddTodo />
    <div className="lane-body">
      {todos.map(todo => (
        <Todo key={todo.id} {...todo} onClick={() => removeTodo(todo.id)} />
      ))}
    </div>
  </div>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default TodoList;
