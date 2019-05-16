import server from '../apis/index';
import worker, { APPENDCHILD } from '../apis/worker';

import {
  FETCH_LANE,
  CREATE_LANE

} from './types';

export const fetchLane = (boardId, laneId) => async dispatch => {
  const response = await server.get(`/v1/api/board/${boardId}/lanes/${laneId}/cards`);

  dispatch({ type: FETCH_LANE, payload: { boardId, laneId, cards: response.data }  });
};

export const createLane = (boardId, name) => async dispatch => {
  const response = await server.post(`/v1/api/board/${boardId}/lanes`, { name, layout: 'H', type: 'L' });

  worker(boardId, [{ id: response.data.id, board_id: boardId, type: APPENDCHILD, payload: { parent_id: boardId } }]);

  dispatch({ type: CREATE_LANE, payload: { ...response.data, boardId } });
};

export const createCardLane = (boardId, laneId, name) => async dispatch => {
  const response = await server.post(`/v1/api/board/${boardId}/lanes`, { name, type: 'C' });

  worker(boardId, [{ id: response.data.id, board_id: boardId, type: APPENDCHILD, payload: { parent_id: laneId } }]);

  dispatch({ type: CREATE_LANE, payload: { ...response.data, boardId } });
};
