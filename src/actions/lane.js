import server from '../apis/index';
import worker, { APPENDCHILD } from '../apis/worker';

import {
  FETCH_LANE_LANES,
  CREATE_LANE,

  FETCH_LANE_CARDS

} from './types';

export const fetchLaneLanes = id => async dispatch => {
  const response = await server.get(`/v1/api/lane/${id}/lane`);

  dispatch({ type: FETCH_LANE_LANES, payload: { id, lanes: response.data }});
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

export const fetchLaneCards = id => async dispatch => {
  const response = await server.get(`/v1/api/lane/${id}/card`);

  dispatch({ type: FETCH_LANE_CARDS, payload: { id, cards: response.data }});
};
