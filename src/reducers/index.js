import { combineReducers } from 'redux'
import authReducer from './authReducer';
import boardsReducer from './boardsReducer';
import boardReducer from './boardReducer';
import filterReducer from './filterReducer'

export default combineReducers({
  auth: authReducer,
  boards: boardsReducer,
  board: boardReducer,
  filter: filterReducer
})
