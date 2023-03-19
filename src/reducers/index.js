import { combineReducers } from 'redux'
import authReducer from './authReducer';
import boardsReducer from './boardsReducer';
import boardReducer from './boardReducer';
import filterReducer from './filterReducer'
import { reducer as formReducer } from 'redux-form';
import activeBoardReducer from './activeBoardReducer';

export default combineReducers({
  auth: authReducer,
  boards: boardsReducer,
  board: boardReducer,
  filter: filterReducer,
  form: formReducer,
  activeBoard: activeBoardReducer
})
