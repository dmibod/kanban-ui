import server from '../apis/index';
import worker, { LAYOUTBOARD, APPENDCHILD, REMOVECARD } from '../apis/worker';
//import { root } from '../apis/urls';
//import history from '../history';

import {
  SIGN_IN,
  SIGN_OUT,

  FETCH_BOARD_LANES,

  CREATE_BOARD,
  FETCH_BOARDS,
  FETCH_BOARD,
  DELETE_BOARD,
  RENAME_BOARD,
  SHARE_BOARD,
  LAYOUT_BOARD,

  FETCH_LANE_LANES,
  CREATE_LANE,

  FETCH_LANE_CARDS,
  CREATE_CARD,
  DELETE_CARD

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

export const fetchBoardLanes = id => async dispatch => {
  const response = await server.get(`/v1/api/board/${id}/lanes`);

  dispatch({ type: FETCH_BOARD_LANES, payload: { id, lanes: response.data }});
};

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

export const fetchLaneLanes = id => async dispatch => {
  const response = await server.get(`/v1/api/lane/${id}/lane`);

  dispatch({ type: FETCH_LANE_LANES, payload: { id, lanes: response.data }});
};

export const createLane = (name, parentId) => async dispatch => {
  const response = await server.post(`/v1/api/board/${parentId}/lanes`, { name, layout: 'H', type: 'L' });

  worker(parentId, [{ id: response.data.id, board_id: parentId, type: APPENDCHILD, payload: { parent_id: parentId } }]);

  dispatch({ type: CREATE_LANE, payload: response.data });
};

export const createCardLane = (boardId, name, laneId) => async dispatch => {
  const response = await server.post(`/v1/api/board/${boardId}/lanes`, { name, type: 'C' });

  worker(boardId, [{ id: response.data.id, board_id: boardId, type: APPENDCHILD, payload: { parent_id: laneId } }]);

  dispatch({ type: CREATE_LANE, payload: response.data });
};

export const fetchLaneCards = id => async dispatch => {
  const response = await server.get(`/v1/api/lane/${id}/card`);

  dispatch({ type: FETCH_LANE_CARDS, payload: { id, cards: response.data }});
};

export const createCard = (boardId, name, laneId) => async dispatch => {
  const response = await server.post(`/v1/api/board/${boardId}/cards`, { name });

  worker(boardId, [{ id: response.data.id, board_id: boardId, type: APPENDCHILD, payload: { parent_id: laneId } }]);

  dispatch({ type: CREATE_CARD, payload: response.data });
};

export const deleteCard = (boardId, cardId, laneId) => dispatch => {
  worker(boardId, [{ id: cardId, board_id: boardId, type: REMOVECARD, payload: { parent_id: laneId } }]);

  dispatch({ type: DELETE_CARD, payload: cardId });
};
