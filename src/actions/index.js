import { api } from '../api';

export const addTodo = text => {
  return dispatch => {
    dispatch(addTodoStarted(text));

    fetch(`${api}/v1/api/board`, {
      method: 'post',
      body: JSON.stringify({ name: text })
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        dispatch(addTodoSuccess(data.id, text));
      })
      .catch(err => {
        dispatch(addTodoFailure(err.message));
      });
  };
};

export const addTodoStarted = text => ({
  type: 'ADD_TODO_STARTED',
  text
});

export const addTodoSuccess = (id, text) => ({
  type: 'ADD_TODO_SUCCESS',
  id,
  text
});

export const addTodoFailure = error => ({
  type: 'ADD_TODO_FAILURE',
  error
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
