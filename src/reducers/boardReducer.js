import _ from 'lodash';
import {
  FETCH_BOARD,
  FETCH_BOARDS,
  CREATE_BOARD,
  EDIT_BOARD,
  DELETE_BOARD
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOARDS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_BOARD:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_BOARD:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_BOARD:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_BOARD:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};