import server from '../apis/index';
import worker, { APPENDCHILD, EXCLUDECHILD, REMOVECARD } from '../apis/worker';

import {
  CREATE_CARD,
  APPEND_CARD,
  EXCLUDE_CARD,
  DELETE_CARD

} from './types';

export const createCard = (boardId, laneId, name) => async dispatch => {
  const response = await server.post(`/v1/api/board/${boardId}/cards`, { name });

  worker(boardId, [{ id: response.data.id, board_id: boardId, type: APPENDCHILD, payload: { parent_id: laneId } }]);

  dispatch({ type: CREATE_CARD, payload: response.data });
};

export const moveCard = (boardId, fromLaneId, toLaneId, cardId) => async dispatch => {
  let cmds = [
    { id: cardId, board_id: boardId, type: EXCLUDECHILD, payload: { parent_id: fromLaneId } },
    { id: cardId, board_id: boardId, type: APPENDCHILD, payload: { parent_id: toLaneId } }
  ];

  worker(boardId, cmds);

  dispatch({ type: EXCLUDE_CARD, payload: { boardId, fromLaneId, cardId } });
  dispatch({ type: APPEND_CARD, payload: { boardId, toLaneId, cardId } });
};

export const excludeCard = (boardId, laneId, cardId) => async dispatch => {
  worker(boardId, [{ id: cardId, board_id: boardId, type: EXCLUDECHILD, payload: { parent_id: laneId } }]);

  dispatch({ type: EXCLUDE_CARD, payload: { boardId, laneId, cardId } });
};

export const appendCard = (boardId, laneId, cardId) => async dispatch => {
  worker(boardId, [{ id: cardId, board_id: boardId, type: APPENDCHILD, payload: { parent_id: laneId } }]);

  dispatch({ type: APPEND_CARD, payload: { boardId, laneId, cardId } });
};

export const deleteCard = (boardId, cardId, laneId) => dispatch => {
  worker(boardId, [{ id: cardId, board_id: boardId, type: REMOVECARD, payload: { parent_id: laneId } }]);

  dispatch({ type: DELETE_CARD, payload: cardId });
};
