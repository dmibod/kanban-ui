import { combineReducers } from 'redux'
import authReducer from './authReducer';
import boardReducer from './boardReducer';
import boardLaneReducer from './boardLaneReducer';
import laneLaneReducer from './laneLaneReducer';
import laneCardReducer from './laneCardReducer';
import cardReducer from './cardReducer';
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  auth: authReducer,
  boards: boardReducer,
  boardLanes: boardLaneReducer,
  laneLanes: laneLaneReducer,
  laneCards: laneCardReducer,
  cards: cardReducer,
  visibilityFilter
})
