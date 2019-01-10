import _ from 'lodash';
import {
  FETCH_BOARD_LANES,
  FETCH_BOARD,
  FETCH_BOARDS,
  CREATE_BOARD,
  RENAME_BOARD,
  SHARE_BOARD,
  DELETE_BOARD,
  LAYOUT_BOARD
} from '../actions/types';

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
      return { ...state, [action.payload.id]: action.payload };
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
    default:
      return state;
  }
};
