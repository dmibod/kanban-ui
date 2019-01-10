import { FETCH_BOARD_LANES } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_BOARD_LANES:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
