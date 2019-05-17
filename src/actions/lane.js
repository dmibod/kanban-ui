import server from '../apis/index';
import worker, { APPENDCHILD, EXCLUDECHILD, REMOVELANE } from '../apis/worker';

import {
  FETCH_LANE,
  CREATE_LANE,
  APPEND_LANE,
  EXCLUDE_LANE,
  DELETE_LANE,
  NOTIFY_DELETE_LANE

} from './types';

export const fetchLane = (boardId, laneId) => async dispatch => {
  const response = await server.get(`/v1/api/board/${boardId}/lanes/${laneId}`);

  dispatch({ type: FETCH_LANE, payload: { ...response.data, boardId }  });
};

export const createLane = (boardId, name) => async dispatch => {
  const response = await server.post(`/v1/api/board/${boardId}/lanes`, { name, layout: 'H', type: 'L' });

  dispatch({ type: CREATE_LANE, payload: { ...response.data, boardId } });

  worker(boardId, [{ id: response.data.id, board_id: boardId, type: APPENDCHILD, payload: { parent_id: boardId } }]);
};

export const createCardLane = (boardId, laneId, name) => async dispatch => {
  const response = await server.post(`/v1/api/board/${boardId}/lanes`, { name, type: 'C' });

  dispatch({ type: CREATE_LANE, payload: { ...response.data, boardId } });

  worker(boardId, [{ id: response.data.id, board_id: boardId, type: APPENDCHILD, payload: { parent_id: laneId } }]);
};

export const excludeLane = (boardId, parentId, laneId) => async dispatch => {
  worker(boardId, [{ id: laneId, board_id: boardId, type: EXCLUDECHILD, payload: { parent_id: parentId } }]);

  dispatch({ type: EXCLUDE_LANE, payload: { boardId, laneId, parentId } });
};

export const appendLane = (boardId, parentId, laneId) => async dispatch => {
  worker(boardId, [{ id: laneId, board_id: boardId, type: APPENDCHILD, payload: { parent_id: parentId } }]);

  dispatch({ type: APPEND_LANE, payload: { boardId, laneId, parentId } });
};

export const deleteLane = (boardId, laneId, parentId) => dispatch => {
  dispatch({ type: EXCLUDE_LANE, payload: { boardId, laneId, parentId } });
  dispatch({ type: DELETE_LANE, payload: { boardId, laneId } });

  worker(boardId, [{ id: laneId, board_id: boardId, type: REMOVELANE, payload: { parent_id: parentId } }]);
};

export const notifyDeleteLane = (boardId, laneId) => dispatch => {
  //dispatch({ type: NOTIFY_DELnETE_LANE, payload: { boardId, laneId } });
};
