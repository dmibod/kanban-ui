import server from '../apis/index';
import { root } from '../apis/urls';
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

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const fetchBoards = () => async dispatch => {
  const response = await server.get('/v1/api/board/');

  dispatch({ type: FETCH_BOARDS, payload: response.data });
};

export const fetchBoard = id => async dispatch => {
  const response = await server.get(`/v1/api/board/${id}`);

  dispatch({ type: FETCH_BOARD, payload: response.data });
};

export const createBoard = name => async dispatch => {
  let response = await server.post('/v1/api/board', { name });

  response = await server.get(`/v1/api/board/${response.data.id}`);

  dispatch({ type: CREATE_BOARD, payload: response.data });
  //history.push(`${root}/board/${response.data.id}`);
  history.push(`${root}/`);
};

export const editBoard = (id, formValues) => async dispatch => {
  const response = await server.put(`/v1/api/board/${id}`, formValues);

  dispatch({ type: EDIT_BOARD, payload: response.data });
  
  history.push(`${root}/board/${id}`);
};

export const deleteBoard = id => async dispatch => {
  await server.delete(`/v1/api/board/${id}`);

  dispatch({ type: DELETE_BOARD, payload: id });
  history.push(`${root}/`);
};