import { combineReducers } from 'redux'
import authReducer from './authReducer';
import boardsReducer from './boardsReducer';
import boardReducer from './boardReducer';
import filterReducer from './filterReducer'
import expandReducer from './expandReducer'
import { reducer as formReducer } from 'redux-form';
import activeBoardReducer from './activeBoardReducer';
import speechReducer from './speechReducer';

export default combineReducers({
  auth: authReducer,
  boards: boardsReducer,
  board: boardReducer,
  filter: filterReducer,
  form: formReducer,
  activeBoard: activeBoardReducer,
  speech: speechReducer,
  expand: expandReducer
})
