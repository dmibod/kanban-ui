import {
  ACTIVE_BOARD,
  CLEAN_BOARD
} from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case ACTIVE_BOARD:
      return action.payload
    case CLEAN_BOARD:
      return null;
    default:
      return state
  }
}
