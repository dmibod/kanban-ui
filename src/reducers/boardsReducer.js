import _ from 'lodash';
import {
  FETCH_BOARDS,
  CREATE_BOARD,
  FETCH_BOARD,
  RENAME_BOARD,
  SHARE_BOARD,
  DELETE_BOARD
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOARDS:
      return { ..._.mapKeys(action.payload, 'id') };

    case CREATE_BOARD:
      return { ...state, [action.payload.id]: action.payload };

    case FETCH_BOARD:
      return { ...state, [action.payload.id]: action.payload };
  
    case RENAME_BOARD:
      return { ...state, [action.payload.id]: action.payload };

    case SHARE_BOARD:
      return { ...state, [action.payload.id]: action.payload };

    case DELETE_BOARD:
      return _.omit(state, action.payload);

    default:
      return state;
  }
};
