import { combineReducers } from 'redux'
import authReducer from './authReducer';
import boardReducer from './boardReducer';
import filterReducer from './filterReducer'

export default combineReducers({
  auth: authReducer,
  boards: boardReducer,
  filter: filterReducer
})
