import { combineReducers } from 'redux'
import authReducer from './authReducer';
import boardReducer from './boardReducer';
import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  auth: authReducer,
  boardReducer,
  todos,
  visibilityFilter
})
