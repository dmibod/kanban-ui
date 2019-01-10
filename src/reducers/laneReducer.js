import {
  CREATE_LANE
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_LANE:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
