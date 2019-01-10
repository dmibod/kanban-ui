import { FETCH_LANE_CARDS } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LANE_CARDS:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
