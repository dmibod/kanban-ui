import server from '../apis/index';
import worker, { LAYOUTBOARD } from '../apis/worker';
//import { root } from '../apis/urls';
//import history from '../history';

import {
  CREATE_BOARD,
  FETCH_BOARDS,
  FETCH_BOARD,
  DELETE_BOARD,
  RENAME_BOARD,
  SHARE_BOARD,
  LAYOUT_BOARD,
  NOTIFY_DELETE_BOARD

} from './types';

export const setVisibilityFilter = filter => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const fetchBoards = owner => async dispatch => {
  const response = owner
    ? await server.get(`/v1/api/board?owner=${owner}`)
    : await server.get('/v1/api/board');

  dispatch({ type: FETCH_BOARDS, payload: response.data });
};

export const fetchBoard = id => async dispatch => {
  const response = await server.get(`/v1/api/board/${id}`);

  dispatch({ type: FETCH_BOARD, payload: response.data });
};

export const createBoard = (name, owner) => async dispatch => {
  const response = await server.post('/v1/api/board', { name, owner, layout: 'H', shared: false });

  dispatch({ type: CREATE_BOARD, payload: response.data });
};

export const layoutBoard = (id, layout) => async dispatch => {
  worker(id, [{ id, board_id: id, type: LAYOUTBOARD, payload: { layout } }]);

  dispatch({ type: LAYOUT_BOARD, payload: { id, layout } });
};

export const renameBoard = (id, name) => async dispatch => {
  const response = await server.put(`/v1/api/board/${id}/rename`, { name });

  dispatch({ type: RENAME_BOARD, payload: response.data });
};

export const shareBoard = (id, shared) => async dispatch => {
  const response = await server.put(`/v1/api/board/${id}/share`, { shared });

  dispatch({ type: SHARE_BOARD, payload: response.data });
};

export const deleteBoard = id => async dispatch => {
  await server.delete(`/v1/api/board/${id}`);

  dispatch({ type: DELETE_BOARD, payload: id });
};

export const notifyDeleteBoard = id => dispatch => {
  dispatch({ type: NOTIFY_DELETE_BOARD, payload: id });
};
