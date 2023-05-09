import React from 'react';
import _ from 'lodash';
import { isActiveBoard, isNotActiveBoard } from './common';

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
  tickers: {
    commands: ['tickers', 'companies', 'компанії', 'тікери'],
    enabled: tickersEnabled,
    fn: tickers,
  },
};

function tickersEnabled(cmd, props, show, close){
  if (!isActiveBoard(cmd, props, show, close)){
    return false;
  }
  var name = props.boards[props.activeBoardId].name;
  return name.startsWith('Recommendations') || name.startsWith('Market Data');
}

function tickers(cmd, props, show, close) {
  var name = props.boards[props.activeBoardId].name;
  var elements = name.startsWith('Recommendations')
  ? document.querySelectorAll("div.board-body > div.lane-wrapper > div.lane-body > div.lane-wrapper > div.lane-header > div.lane-title > div.row > div.mr-auto b")
  : document.querySelectorAll("div.board-body > div.lane-wrapper > div.lane-header > div.lane-title > div.row > div.mr-auto b");
  var names = _.map(elements, el => {
    var text = el.innerText.toUpperCase();
    return text.slice(0, text.length - 1);
  }).join(", ");
  console.log(names);
  show(
    'The list of tickers',
    <div>{names || 'There are no tickers'}.</div>
  );
  setTimeout(close, 5000);
}

