import {
  FILTER_BOARDS
} from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case FILTER_BOARDS:
      return action.filter
    default:
      return state
  }
}
