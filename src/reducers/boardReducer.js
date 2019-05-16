import _ from 'lodash';
import {
  FETCH_BOARD_LANES,
  FETCH_BOARD,
  FETCH_BOARDS,
  CREATE_BOARD,
  RENAME_BOARD,
  SHARE_BOARD,
  DELETE_BOARD,
  LAYOUT_BOARD,
  CREATE_LANE
} from '../actions/types';

const formatBoard = payload => {
  let walkFn = (el, visitFn) => {
    visitFn(el)

    if (el.lanes) {
      el.lanes.forEach(i => walkFn(i, visitFn));
    }

    if (el.cards) {
      el.cards.forEach(i => walkFn(i, visitFn)) 
    }
  };

  let lanes = [];
  let cards = [];

  walkFn(payload, el => {

    if (el.type) { 
      let children = (el.lanes || el.cards || []).map(i => i.id);
      lanes.push(_.omit({ ...el, children }, [ 'lanes', 'cards' ])); 
    } else if (el.id !== payload.id) { 
      cards.push(el); 
    } 
  });

  return { ...payload, children: (payload.lanes || []).map(i => i.id), lanes: _.mapKeys(lanes, 'id'), cards: _.mapKeys(cards, 'id') };
};

export default (state = {}, action) => {
  let board = null;
  switch (action.type) {
    case FETCH_BOARD_LANES:
      board = {
        ...state[action.payload.id],
        lanes: action.payload.lanes
      };
      return { ...state, [action.payload.id]: board };
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
    case DELETE_BOARD:
      return _.omit(state, action.payload);
    case LAYOUT_BOARD:
      board = {
        ...state[action.payload.id],
        layout: action.payload.layout
      };
      return { ...state, [action.payload.id]: board };
    case CREATE_LANE:
      board = state[action.payload.boardId];
      board.lanes[action.payload.id] = _.omit({ ...action.payload, children: [] }, 'boardId');
      return { ...state, [board.id]: board };
    default:
      return state;
  }
};
