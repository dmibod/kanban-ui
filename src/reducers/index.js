import { combineReducers } from 'redux'
import authReducer from './authReducer';
import boardReducer from './boardReducer';
import cardReducer from './cardReducer';
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  auth: authReducer,
  boards: boardReducer,
  cards: cardReducer,
  visibilityFilter
})
