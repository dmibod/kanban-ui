import React from 'react';
import _ from 'lodash';
import history from '../history';
import { SPEECH_ON, SPEECH_OFF, SPEECH_CMD, SPEECH_LANG } from './types';
import { startSpeech, stopSpeech, speechLanguage } from '../apis/speech';

export const speechOn = (callBack) => {
  startSpeech(callBack);
  return {
    type: SPEECH_ON,
  };
};

export const speechOff = () => {
  stopSpeech();
  return {
    type: SPEECH_OFF,
  };
};

export const speechCmd = (cmd, props, helpShow, helpClose) => {
  cmd = cmd.toLowerCase();
  var handler = getHandler(cmd, props);
  if (handler) {
    console.log('found: ' + cmd);
    handler.fn(cmd, props, helpShow, helpClose);
  } else {
    console.log('not found: ' + cmd);
  }
  return {
    type: SPEECH_CMD,
    payload: cmd,
  };
};

export const speechLang = (lang) => {
  speechLanguage(lang);
  return {
    type: SPEECH_LANG,
    payload: lang,
  };
};

const controlHandlers = {
  mute: {
    commands: ['mute', 'виключити'],
    fn: mute,
  },
  reload: {
    commands: ['reload', 'оновити'],
    fn: reloadPage,
  },
};

function mute(cmd, props) {
  props.speechOff();
}

function reloadPage(cmd, props) {
  window.location.reload();
}

const helpHandlers = {
  help: {
    commands: ['help', 'допомога'],
    fn: helpShow,
  },
  close: {
    commands: ['close', 'закрити'],
    fn: helpClose,
  },
};

function helpShow(cmd, props, show, close) {
  var mapCommand = (command, cmdKey) => (
    <li key={cmdKey}>
      {cmdKey}
      {isEnabled(command, cmd, props) ? '' : '*'} (say:{' '}
      {command.commands.join(', ')})
    </li>
  );
  var mapCategory = (handler, handlerKey) => (
    <div key={handlerKey}>
      <b>{handlerKey.toUpperCase()}</b>
      <br />
      <ul>{_.map(handler, mapCommand)}</ul>
    </div>
  );

  var body = _.map(_.map(handlers, mapCategory));

  show('Voice commands', body);
}

function helpClose(cmd, props, show, close) {
  close();
}

const laneHandlers = {
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


function isActiveBoard(cmd, props) {
  return props.owner && props.activeBoardId;
}

function createLane(cmd, props) {
  props.createLane(props.activeBoardId, 'Lane');
}

function layoutLaneVertical(cmd, props) {
  props.layoutLane(props.activeBoardId, undefined, 'V');
}

function layoutLaneHorizontal(cmd, props) {
  props.layoutLane(props.activeBoardId, undefined, 'H');
}

const boardHandlers = {
  create: {
    commands: ['create', 'створити'],
    enabled: createBoardEnabled,
    fn: createBoard,
  },
  delete: {
    commands: ['delete', 'remove', 'видалити'],
    enabled: removeBoardEnabled,
    fn: removeBoard,
  },
  name: {
    commands: ['name', 'назвати'],
    enabled: isOwnerDefined,
    fn: nameBoard,
  },
  vertical: {
    commands: ['layout vertical', 'vertical', 'rows', 'рядки', 'вертикальний'],
    enabled: isActiveBoard,
    fn: layoutBoardVertical,
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
    enabled: isActiveBoard,
    fn: layoutBoardHorizontal,
  },
  share: {
    commands: ['share', 'публічна'],
    enabled: isOwnerDefined,
    fn: shareBoard,
  },
  private: {
    commands: ['private', 'приватна'],
    enabled: isOwnerDefined,
    fn: privateBoard,
  },
  count: {
    commands: ['count'],
    fn: countBoard,
  },
};

function createBoardEnabled(cmd, props) {
  return props.owner && !props.activeBoardId;
}

function createBoard(cmd, props) {
  props.createBoard('Board', props.owner);
}

function layoutBoardVertical(cmd, props) {
  props.layoutBoard(props.activeBoardId, 'V');
}

function layoutBoardHorizontal(cmd, props) {
  props.layoutBoard(props.activeBoardId, 'H');
}

function shareBoard(cmd, props) {
  if (props.activeBoardId) {
    props.shareBoard(props.activeBoardId, true);
  } else {
    _.each(_.keys(getOwnerBoards(props)), (id) => props.shareBoard(id, true)
    );
  }
}

function privateBoard(cmd, props) {
  if (props.activeBoardId) {
    props.shareBoard(props.activeBoardId, false);
  } else {
    _.each(_.keys(getOwnerBoards(props)), (id) => props.shareBoard(id, false)
    );
  }
}

function removeBoardEnabled(cmd, props) {
  return props.owner && !props.activeBoardId;
}

function removeBoard(cmd, props, show, close) {
  var keys = _.keys(getOwnerBoards(props));
  show('Confirm', `Remove ${keys.length} boards?`, () => {
    close();
    _.each(keys, (id) => props.deleteBoard(id, false));
  });
}

function isOwnerDefined(cmd, props) {
  return props.owner;
}

function nameBoard(cmd, props, show, close) {
  var name = cmd.slice('name'.length).trim();
  if (!name) {
    return;
  }
  if (props.activeBoardId) {
    props.renameBoard(props.activeBoardId, name);
  } else {
    var keys = _.keys(getOwnerBoards(props));
    show('Confirm', `Rename ${keys.length} boards to "${name}"?`, () => {
      close();
      _.each(keys, (id) => props.renameBoard(id, name));
    });
  }
}

function countBoard(cmd, props) {
  var boards = getFilteredBoards(props);
  console.log(_.keys(boards).length);
}

const navigationHandlers = {
  home: {
    commands: ['go home', 'додому'],
    fn: goHome,
  },
  first: {
    commands: ['first', 'перша', 'перший'],
    fn: firstItem,
  },
  last: {
    commands: ['last', 'останній', 'остання'],
    fn: lastItem,
  },
  open: {
    commands: ['open', 'відкрити'],
    fn: openItem,
  },
};

function goHome() {
  history.push(`${process.env.REACT_APP_CONTEXT_ROOT}/`);
}

function firstItem(cmd, props) {
  var ticker = cmd.split(' ')[1];
  if (!ticker) {
    var keys = _.keys(getFilteredBoards(props));
    if (keys.length == 0) {
      return;
    }
    var key = keys[0];
    history.push(`${process.env.REACT_APP_CONTEXT_ROOT}/board/${key}`);
    return;
  }
  ticker = ticker.toLowerCase();
  var key = _.findKey(
    getFilteredBoards(props),
    (val) =>
      (val.name || '').toLowerCase().includes(ticker) ||
      (val.description || '').toLowerCase().includes(ticker)
  );
  if (key) {
    history.push(`${process.env.REACT_APP_CONTEXT_ROOT}/board/${key}`);
  }
}

function lastItem(cmd, props) {
  var ticker = cmd.split(' ')[1];
  if (!ticker) {
    var keys = _.keys(getFilteredBoards(props));
    if (keys.length == 0) {
      return;
    }
    var key = keys[keys.length - 1];
    history.push(`${process.env.REACT_APP_CONTEXT_ROOT}/board/${key}`);
    return;
  }
  ticker = ticker.toLowerCase();
  var key = _.findLastKey(
    getFilteredBoards(props),
    (val) =>
      (val.name || '').toLowerCase().includes(ticker) ||
      (val.description || '').toLowerCase().includes(ticker)
  );
  if (key) {
    history.push(`${process.env.REACT_APP_CONTEXT_ROOT}/board/${key}`);
  }
}

function openItem(cmd, props) {
  var ticker = cmd.split(' ')[1];
  if (!ticker) {
    return;
  }
  ticker = ticker.toLowerCase();
  var key = _.findKey(
    getFilteredBoards(props),
    (val) =>
      (val.name || '').toLowerCase().includes(ticker) ||
      (val.description || '').toLowerCase().includes(ticker)
  );
  if (key) {
    history.push(`${process.env.REACT_APP_CONTEXT_ROOT}/board/${key}`);
  }
}

const filterHandlers = {
  filter: {
    commands: ['filter', 'фільтр'],
    fn: filterBoards,
  },
  own: {
    commands: ['owner', 'own', 'мої', 'моє'],
    fn: filterOwn,
  },
  drop: {
    commands: [
      'drop filter',
      'скинути фільтр',
      'all',
      'everything',
      'unfiltered',
      'все',
      'без фільтра',
    ],
    fn: dropFilter,
  },
};

function filterBoards(cmd, props) {
  var filter = cmd.split(' ')[1];
  if (!filter) {
    return;
  }
  filter = filter.toLowerCase();
  props.filterBoards(filter);
}

function filterOwn(cmd, props) {
  props.filterBoards(props.owner || '');
}

function dropFilter(cmd, props) {
  props.filterBoards('');
}

const languageHandlers = {
  english: {
    commands: ['англійська', 'english'],
    fn: languageUs,
  },

  ukrainian: {
    commands: ['ukrainian'],
    fn: languageUa,
  },
};

function languageUa(cmd, props) {
  props.speechLang('uk-UA', (cmd) => props.speechCmd(cmd, props));
}

function languageUs(cmd, props) {
  props.speechLang('en-US', (cmd) => props.speechCmd(cmd, props));
}

const consoleHandlers = {
  clear: {
    commands: ['clear', 'очистити', 'почистити', 'стерти'],
    fn: clearConsole,
  },
};

function clearConsole() {
  console.clear();
}

const scrollHandlers = {
  top: {
    commands: [
      'вгору',
      'вверх',
      'scroll top',
      'scroll up',
      'scroll start',
      'go up',
    ],
    fn: scrollTop,
  },
  bottom: {
    commands: ['вниз', 'scroll bottom', 'scroll down', 'scroll end', 'go down'],
    fn: scrollBottom,
  },
};

function scrollTop() {
  window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
}

function scrollBottom() {
  window.scrollTo({
    left: 0,
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
}

const zoomHandlers = {
  in: {
    commands: ['збільшити', 'більше', 'zoom', 'zoom zoom', 'zoom in', 'bigger'],
    fn: zoomIn,
  },
  out: {
    commands: ['zoom out', 'зменшити', 'менше', 'smaller'],
    fn: zoomOut,
  },
  reset: {
    commands: [
      'zoom reset',
      'reset zoom',
      'normal zoom',
      'original',
      'оригінал',
    ],
    fn: zoom100,
  },
};

let zoom = 100;

function zoomIn() {
  zoom = Math.round(zoom * 1.25);
  document.body.style.zoom = `${zoom}%`;
}

function zoomOut() {
  zoom = Math.round(zoom * 0.75);
  document.body.style.zoom = `${zoom}%`;
}

function zoom100() {
  zoom = 100;
  document.body.style.zoom = `${zoom}%`;
}

function getFilteredBoards(props) {
  var filter = props.filter.toLowerCase();
  var filteredBoards = _.omitBy(
    props.boards,
    (board) =>
      !(
        (board.name || '').toLowerCase().includes(filter) ||
        (board.description || '').toLowerCase().includes(filter) ||
        (board.owner || '').toLowerCase().includes(filter)
      )
  );
  return filteredBoards;
}

function getOwnerBoards(props) {
  return _.omitBy(
    getFilteredBoards(props),
    (board) => !((board.owner || '') == (props.owner || ''))
  );
}

const handlers = {
  control: controlHandlers,
  help: helpHandlers,
  board: boardHandlers,
  lane: laneHandlers,
  navigation: navigationHandlers,
  filter: filterHandlers,
  language: languageHandlers,
  console: consoleHandlers,
  scroll: scrollHandlers,
  zoom: zoomHandlers,
};

function getHandler(speechCmd, props) {
  var commands = _.flatMap(handlers, (category) =>
    _.map(category, (command) => command)
  );
  return (
    _.find(
      commands,
      (command) =>
        _.includes(command.commands, speechCmd) &&
        isEnabled(command, speechCmd, props)
    ) ||
    _.find(
      commands,
      (command) =>
        _.some(command.commands, (cmd) => speechCmd.startsWith(cmd)) &&
        isEnabled(command, speechCmd, props)
    )
  );
}

function isEnabled(command, cmd, props) {
  if (command.enabled) {
    return command.enabled(cmd, props);
  }
  return command;
}
