import { api } from '../api';

let nextTodoId = 0;
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: '' + nextTodoId++,
  text
});

export const removeTodo = id => {
  return dispatch => {
    dispatch(removeTodoStarted(id));

    fetch(`${api}/v1/api/board/${id}`, {
      method: 'delete'
    })
      .then(res => {
        dispatch(removeTodoSuccess(id));
      })
      .catch(err => {
        dispatch(removeTodoFailure(id, err.message));
      });
  };
};

export const removeTodoStarted = id => ({
  type: 'REMOVE_TODO_STARTED',
  id
});

export const removeTodoSuccess = id => ({
  type: 'REMOVE_TODO_SUCCESS',
  id
});

export const removeTodoFailure = (id, error) => ({
  type: 'REMOVE_TODO_FAILURE',
  id,
  error
});

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};
