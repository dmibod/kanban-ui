import server from '../apis/index';
import worker, { APPENDCHILD, REMOVECARD } from '../apis/worker';

import {
  CREATE_CARD,
  DELETE_CARD

} from './types';

export const createCard = (boardId, laneId, name) => async dispatch => {
  const response = await server.post(`/v1/api/board/${boardId}/cards`, { name });

  worker(boardId, [{ id: response.data.id, board_id: boardId, type: APPENDCHILD, payload: { parent_id: laneId } }]);

  dispatch({ type: CREATE_CARD, payload: response.data });
};

export const deleteCard = (boardId, cardId, laneId) => dispatch => {
  worker(boardId, [{ id: cardId, board_id: boardId, type: REMOVECARD, payload: { parent_id: laneId } }]);

  dispatch({ type: DELETE_CARD, payload: cardId });
};
