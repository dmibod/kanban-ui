import {
  EXPAND_CARDS
} from '../actions/types';

export default (state = false, action) => {
  switch (action.type) {
    case EXPAND_CARDS:
      return action.expand
    default:
      return state
  }
}
