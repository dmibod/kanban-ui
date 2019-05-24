import _ from 'lodash';
import {
  FETCH_BOARD,
  CLEAN_BOARD,
  LAYOUT_BOARD,
  FETCH_LANE,
  APPEND_LANE,
  EXCLUDE_LANE,
  CREATE_LANE,
  DELETE_LANE,
  FETCH_CARD,
  APPEND_CARD,
  EXCLUDE_CARD,
  CREATE_CARD,
  DELETE_CARD
} from '../actions/types';

const formatBoard = payload => {
  let walkFn = (el, visitFn) => {
    visitFn(el);

    if (el.lanes) {
      el.lanes.forEach(i => walkFn(i, visitFn));
    }

    if (el.cards) {
      el.cards.forEach(i => walkFn(i, visitFn));
    }
  };

  let lanes = [];
  let cards = [];

  walkFn(payload, el => {
    if (el.type) {
      let children = (el.lanes || el.cards || []).map(i => i.id);
      lanes.push(_.omit({ ...el, children }, ['lanes', 'cards']));
    } else if (el.id !== payload.id) {
      cards.push(el);
    }
  });

  return {
    ...payload,
    children: (payload.lanes || []).map(i => i.id),
    lanes: _.mapKeys(lanes, 'id'),
    cards: _.mapKeys(cards, 'id')
  };
};

export default (state = null, action) => {
  let lane = null;
  switch (action.type) {
    case FETCH_BOARD:
      return formatBoard(action.payload);
    case CLEAN_BOARD:
      return null;

    case LAYOUT_BOARD:
      return { ...state, layout: action.payload };

    case FETCH_LANE:
      return {
        ...state,
        lanes: {
          ...state.lanes,
          [action.payload.id]: {
            ...action.payload,
            children: action.payload.children || []
          }
        }
      };

    case CREATE_LANE:
      return {
        ...state,
        lanes: {
          ...state.lanes,
          [action.payload.id]: {
            ...action.payload,
            children: []
          }
        }
      };

    case DELETE_LANE:
      return state.lanes[action.payload.laneId]
        ? { ...state, lanes: _.omit(state.lanes, action.payload.laneId) }
        : state;

    case APPEND_LANE:
      lane = state.lanes[action.payload.parentId];
      if (lane) {
        lane.children = lane.children || [];
        lane.children.push(action.payload.laneId);
      } else {
        state.children.push(action.payload.laneId);
      }
      return { ...state };

    case EXCLUDE_LANE:
      if (state.lanes[action.payload.parentId]) {
        state.lanes[action.payload.parentId].children = _.pull(
          state.lanes[action.payload.parentId].children,
          action.payload.laneId
        );
      } else {
        state.children = _.pull(state.children, action.payload.laneId);
      }
      return { ...state };

    case APPEND_CARD:
      if (state.lanes[action.payload.laneId]) {
        state.lanes[action.payload.laneId].children.push(action.payload.cardId);
        return { ...state };
      } else {
        return state;
      }

    case EXCLUDE_CARD:
      if (state.lanes[action.payload.laneId]) {
        state.lanes[action.payload.laneId].children = _.pull(
          state.lanes[action.payload.laneId].children,
          action.payload.cardId
        );
        return { ...state };
      } else {
        return state;
      }

    case CREATE_CARD:
    case FETCH_CARD:
      return {
        ...state,
        cards: {
          ...state.cards,
          [action.payload.id]: action.payload
        }
      };

    case DELETE_CARD:
      return state.cards[action.payload.cardId]
        ? { ...state, cards: _.omit(state.cards, action.payload.cardId) }
        : state;

    default:
      return state;
  }
};
