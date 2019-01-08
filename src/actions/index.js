import api from '../apis/index';
import server from '../apis/index';
import history from '../history';
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_BOARD,
  FETCH_BOARDS,
  FETCH_BOARD,
  DELETE_BOARD,
  EDIT_BOARD
} from './types';

export const signIn = userId => {
  return {
    type: SIGN_IN,
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

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

export const renameBoard = (id, text) => ({
  type: 'RENAME_BOARD',
  id,
  text
});

export const fetchBoards = () => async dispatch => {
  const response = await server.get('/v1/api/board/');

  dispatch({ type: FETCH_BOARDS, payload: response.data });
};

export const fetchBoard = id => async dispatch => {
  const response = await server.get(`/v1/api/board/${id}`);

  dispatch({ type: FETCH_BOARD, payload: response.data });
};

export const editBoard = (id, formValues) => async dispatch => {
  const response = await server.patch(`/v1/api/board/${id}`, formValues);

  dispatch({ type: EDIT_BOARD, payload: response.data });
  history.push('/');
};

export const deleteBoard = id => async dispatch => {
  await server.delete(`/v1/api/board/${id}`);

  dispatch({ type: DELETE_BOARD, payload: id });
  history.push('/');
};