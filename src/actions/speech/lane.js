import { isActiveBoard } from './common';

function createLane(cmd, props) {
  props.createLane(props.activeBoardId, 'Lane');
}

function layoutLaneVertical(cmd, props) {
  props.layoutLane(props.activeBoardId, undefined, 'V');
}

function layoutLaneHorizontal(cmd, props) {
  props.layoutLane(props.activeBoardId, undefined, 'H');
}

export const laneHandlers = {
  create: {
    commands: ['create', 'створити'],
    enabled: isActiveBoard,
    fn: createLane,
  },
  vertical: {
    commands: ['layout vertical', 'vertical', 'rows', 'рядки', 'вертикальний'],
    enabled: () => false,
    fn: layoutLaneVertical,
  },
  horizontal: {
    commands: [
      'layout horizontal',
      'horizontal',
      'columns',
      'колонки',
      'стовпчики',
      'горизонтальний',
    ],
    enabled: () => false,
    fn: layoutLaneHorizontal,
  },
};
