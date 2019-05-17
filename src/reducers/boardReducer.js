import _ from 'lodash';
import {
  FETCH_BOARDS,
  FETCH_BOARD,
  CREATE_BOARD,
  RENAME_BOARD,
  SHARE_BOARD,
  DELETE_BOARD,
  LAYOUT_BOARD,
  NOTIFY_DELETE_BOARD,
  FETCH_LANE,
  APPEND_LANE,
  EXCLUDE_LANE,
  CREATE_LANE,
  DELETE_LANE,
  NOTIFY_DELETE_LANE,
  FETCH_CARD,
  APPEND_CARD,
  EXCLUDE_CARD,
  CREATE_CARD,
  DELETE_CARD,
  NOTIFY_DELETE_CARD
} from '../actions/types';

const formatBoard = payload => {
  let walkFn = (el, visitFn) => {
    visitFn(el);

    if (el.lanes) {
      el.lanes.forEach(i => walkFn(i, visitFn));
    }

    if (el.cards) {
      el.cards.forEach(i => walkFn(i, visitFn));
    }
  };

  let lanes = [];
  let cards = [];

  walkFn(payload, el => {
    if (el.type) {
      let children = (el.lanes || el.cards || []).map(i => i.id);
      lanes.push(_.omit({ ...el, children }, ['lanes', 'cards']));
    } else if (el.id !== payload.id) {
      cards.push(el);
    }
  });

  return {
    ...payload,
    children: (payload.lanes || []).map(i => i.id),
    lanes: _.mapKeys(lanes, 'id'),
    cards: _.mapKeys(cards, 'id')
  };
};

export default (state = {}, action) => {
  let board = null;
  switch (action.type) {
    case FETCH_BOARDS:
      return { ..._.mapKeys(action.payload, 'id') };
    case FETCH_BOARD:
      return { ...state, [action.payload.id]: formatBoard(action.payload) };
    case CREATE_BOARD:
      return { ...state, [action.payload.id]: action.payload };
    case RENAME_BOARD:
      return { ...state, [action.payload.id]: action.payload };
    case SHARE_BOARD:
      return { ...state, [action.payload.id]: action.payload };

    case NOTIFY_DELETE_BOARD:
    case DELETE_BOARD:
      return _.omit(state, action.payload);

    case LAYOUT_BOARD:
      board = {
        ...state[action.payload.id],
        layout: action.payload.layout
      };
      return { ...state, [action.payload.id]: board };

    case FETCH_LANE:
      board = state[action.payload.boardId];
      board.lanes[action.payload.id] = _.omit(action.payload, 'boardId');
      return { ...state, [board.id]: { ...board } };

    case CREATE_LANE:
      board = state[action.payload.boardId];
      board.lanes[action.payload.id] = _.omit(
        { ...action.payload, children: [] },
        'boardId'
      );
      return { ...state, [board.id]: board };

    case DELETE_LANE:
    case NOTIFY_DELETE_LANE:
      board = state[action.payload.boardId];
      if (board.lanes[action.payload.laneId]) {
        board.lanes = _.omit(board.lanes, action.payload.laneId);
        return { ...state, [board.id]: { ...board } };
      } else {
        return state;
      }

    case APPEND_LANE:
      board = state[action.payload.boardId];
      if (board.lanes[action.payload.parentId]) {
        board.lanes[action.payload.parentId].children.push(
          action.payload.laneId
        );
      } else {
        board.children.push(action.payload.laneId);
      }
      return { ...state, [board.id]: board };

    case EXCLUDE_LANE:
      board = state[action.payload.boardId];
      if (board.lanes[action.payload.parentId]) {
        board.lanes[action.payload.parentId].children = _.pull(
          board.lanes[action.payload.parentId].children,
          action.payload.laneId
        );
      } else {
        board.children = _.pull(board.children, action.payload.laneId);
      }
      return { ...state, [board.id]: { ...board } };

    case APPEND_CARD:
      board = state[action.payload.boardId];
      board.lanes[action.payload.laneId].children.push(action.payload.cardId);
      return { ...state, [board.id]: board };

    case EXCLUDE_CARD:
      board = state[action.payload.boardId];
      board.lanes[action.payload.laneId].children = _.pull(
        board.lanes[action.payload.laneId].children,
        action.payload.cardId
      );
      return { ...state, [board.id]: board };

    case CREATE_CARD:
    case FETCH_CARD:
      board = state[action.payload.boardId];
      board.cards[action.payload.id] = _.omit(action.payload, 'boardId');
      return { ...state, [board.id]: board };

    case DELETE_CARD:
    case NOTIFY_DELETE_CARD:
      board = state[action.payload.boardId];
      board.cards = _.omit(board.cards, action.payload.cardId);
      return { ...state, [board.id]: board };

    default:
      return state;
  }
};
