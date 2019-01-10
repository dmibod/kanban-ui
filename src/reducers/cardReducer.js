import {
  CREATE_CARD
} from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case CREATE_CARD:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
