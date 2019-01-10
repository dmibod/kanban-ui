import { FETCH_LANE_LANES } from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LANE_LANES:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
