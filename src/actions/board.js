import server from '../apis/index';
import worker, { LAYOUTBOARD } from '../apis/worker';

import {
  CREATE_BOARD,
  FILTER_BOARDS,
  FETCH_BOARDS,
  FETCH_BOARD,
  CLEAN_BOARD,
  ACTIVE_BOARD,
  DELETE_BOARD,
  RENAME_BOARD,
  SHARE_BOARD,
  LAYOUT_BOARD,
  EXPAND_CARDS
} from './types';

export const filterBoards = filter => ({
  type: FILTER_BOARDS,
  filter
});

export const expandCards = expand => ({
  type: EXPAND_CARDS,
  expand
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

export const cleanBoard = () => ({ type: CLEAN_BOARD });

export const activeBoard = (id) => ({ type: ACTIVE_BOARD, payload: id });

export const createBoard = (name, owner) => async dispatch => {
  const response = await server.post('/v1/api/board', {
    name,
    owner,
    layout: 'H',
    shared: false
  });

  dispatch({ type: CREATE_BOARD, payload: response.data });
};

export const layoutBoard = (id, layout) => async dispatch => {
  worker(id, [{ id, board_id: id, type: LAYOUTBOARD, payload: { layout } }]);

  dispatch({ type: LAYOUT_BOARD, payload: layout });
};

export const renameBoard = (id, name) => async dispatch => {
  const response = await server.put(`/v1/api/board/${id}/rename`, { name });

  dispatch({ type: RENAME_BOARD, payload: response.data });
};

export const shareBoard = (id, shared) => async dispatch => {
  const response = await server.put(`/v1/api/board/${id}/share`, { shared });

  dispatch({ type: SHARE_BOARD, payload: response.data });
};

export const deleteBoard = (id, notification) => async dispatch => {
  if (!notification) {
    await server.delete(`/v1/api/board/${id}`);
  }

  dispatch({ type: DELETE_BOARD, payload: id });
};
