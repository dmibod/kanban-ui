import server from '../apis/index';
import worker, { APPENDCHILD, EXCLUDECHILD, REMOVECARD } from '../apis/worker';

import {
  FETCH_CARD,
  CREATE_CARD,
  APPEND_CARD,
  EXCLUDE_CARD,
  DELETE_CARD,
  NOTIFY_DELETE_CARD

} from './types';

export const fetchCard = (boardId, cardId) => async dispatch => {
  const response = await server.get(`/v1/api/board/${boardId}/cards/${cardId}`);

  dispatch({ type: FETCH_CARD, payload: { ...response.data, boardId }  });
};

export const createCard = (boardId, laneId, name) => async dispatch => {
  const response = await server.post(`/v1/api/board/${boardId}/cards`, { name });

  dispatch({ type: CREATE_CARD, payload: { ...response.data, boardId } });

  worker(boardId, [{ id: response.data.id, board_id: boardId, type: APPENDCHILD, payload: { parent_id: laneId } }]);
};

export const moveCard = (boardId, fromLaneId, toLaneId, cardId) => async dispatch => {
  dispatch({ type: EXCLUDE_CARD, payload: { boardId, laneId: fromLaneId, cardId } });
  dispatch({ type: APPEND_CARD, payload: { boardId, laneId: toLaneId, cardId } });

  let cmds = [
    { id: cardId, board_id: boardId, type: EXCLUDECHILD, payload: { parent_id: fromLaneId } },
    { id: cardId, board_id: boardId, type: APPENDCHILD, payload: { parent_id: toLaneId } }
  ];

  worker(boardId, cmds);
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

  dispatch({ type: EXCLUDE_CARD, payload: { boardId, laneId, cardId } });
  dispatch({ type: DELETE_CARD, payload: { boardId, cardId } });
};

export const notifyDeleteCard = (boardId, cardId) => dispatch => {
  dispatch({ type: NOTIFY_DELETE_CARD, payload: { boardId, cardId } });
};
