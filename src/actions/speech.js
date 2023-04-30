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
  var handler = getHandler(cmd);
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
    commands: [
      'mute',
      'виключити'
    ],
    fn: mute
   }
};

function mute(cmd, props) {
  props.speechOff();
}

const helpHandlers = {
  help: {
    commands: [
      'help',
      'допомога'
    ],
    fn: helpShow
  },
  close: {
    commands: [
      'close',
      'закрити'
    ],
    fn: helpClose
  }
};

function helpShow(cmd, props, show, close){
  show('Voice commands', _.map(_.map(handlers, (handler, handlerKey) => `Category "${handlerKey}": ` + _.map(handler, (command, cmdKey) => `function "${cmdKey}" (say: ` + command.commands.join(', ') + ')'))).join('\n'));
}

function helpClose(cmd, props, show, close){
  close();
}

const boardHandlers = {
  create: {
    commands: [
      'create',
      'створити'
    ],
    fn: createBoard
  },
  'delete': {
    commands: [
      'delete',
      'remove',
      'видалити'
    ],
    fn: removeBoard
  },
  name: {
    commands: [
      'name',
      'назвати'
    ],
    fn: nameBoard
  },
  share: {
    commands: [
      'share',
      'публічна'
    ],
    fn: shareBoard
  },
  private: {
    commands: [
      'private',
      'приватна'
    ],
    fn: privateBoard
  },
  count: {
    commands: [
      'count'
    ],
    fn: countBoard
  }
};

function createBoard(cmd, props) {
  if (props.owner) {
    props.createBoard('Board', props.owner);
  }
}

function shareBoard(cmd, props) {
  if (props.owner) {
    _.each(_.keys(getFilteredBoards(props)), id => props.shareBoard(id, true));
  }
}

function privateBoard(cmd, props) {
  if (props.owner) {
    _.each(_.keys(getFilteredBoards(props)), id => props.shareBoard(id, false));
  }
}

function removeBoard(cmd, props, show, close){
  if (props.owner) {
    var keys = _.keys(getFilteredBoards(props));
    show('Confirm', `Remove ${keys.length} boards?`, () => {
      close();
      _.each(keys, id => props.deleteBoard(id, false));
    });
  }
}

function nameBoard(cmd, props){
  if (props.owner) {
    var name = cmd.split(' ')[1];
    if (!name) {
      return;
    }
    _.each(_.keys(getFilteredBoards(props)), id => props.renameBoard(id, name));
  }
}

function countBoard(cmd, props){
  var boards = getFilteredBoards(props);
  console.log(_.keys(boards).length);
}

const navigationHandlers = {
  'home': {
    commands: [
      'go home',
      'додому'
    ],
    fn: goHome
  },
  'first':{
    commands: [
      'first',
      'перша',
      'перший'
    ],
    fn: firstItem
  },
  last: {
    commands: [
      'last',
      'останній',
      'остання'
    ],
    fn: lastItem
  },
  open: {
    commands: [
      'open',
      'відкрити'
    ],
    fn: openItem
  }
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
  var key = _.findKey(getFilteredBoards(props), val => (val.description || '').toLowerCase().includes(ticker));
  if (key) {
    history.push(`${process.env.REACT_APP_CONTEXT_ROOT}/board/${key}`);
  }
}

const filterHandlers = {
  'filter': {
    commands:[
      'filter',
      'фільтр'
    ],
    fn: filterBoards
  },
  'drop': {
    commands:[
      'drop filter',
      'скинути фільтр'
    ],
    fn: dropFilter
  }
};

function filterBoards(cmd, props) {
  var filter = cmd.split(' ')[1];
  if (!filter) {
    return;
  }
  filter = filter.toLowerCase();
  props.filterBoards(filter);
}

function dropFilter(cmd, props) {
  props.filterBoards('');
}

const languageHandlers = {
  'english': {
    commands: [
      'англійська',
      'english'
    ],
    fn: languageUs
  },

  'ukrainian': {
    commands: [
      'ukrainian'
    ],
    fn: languageUa
  }
};

function languageUa(cmd, props) {
  props.speechLang('uk-UA', (cmd) => props.speechCmd(cmd, props));
}

function languageUs(cmd, props) {
  props.speechLang('en-US', (cmd) => props.speechCmd(cmd, props));
}

const consoleHandlers = {
  'clear': {
    commands: [
      'clear',
      'очистити',
      'почистити',
      'стерти'
    ],
    fn: clearConsole
  }
};

function clearConsole() {
  console.clear();
}

const scrollHandlers = {
  'top': {
    commands: [
      'вгору',
      'вверх',
      'scroll top',
      'scroll up',
      'scroll start'
    ],
    fn: scrollTop
  },
  'bottom': {
    commands: [
      'вниз',
      'scroll bottom',
      'scroll down',
      'scroll end'
    ],
    fn: scrollBottom
  }
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
  'in': {
    commands: [
      'збільшити',
      'більше',
      'zoom',
      'zoom zoom',
      'zoom in'
    ],
    fn: zoomIn
  },
  'out': {
    commands: [
      'zoom out',
      'зменшити',
      'менше'
    ],
    fn: zoomOut
  },
  'reset': {
    commands: [
      'zoom reset',
      'reset zoom',
      'normal zoom',
      'оригінал'
    ],
    fn: zoom100
  }
}

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

function getFilteredBoards(props){
  var filter = props.filter.toLowerCase();
  var filteredBoards = _.omitBy(props.boards, board => !board.name.toLowerCase().includes(filter));
  console.log(filteredBoards);
  return filteredBoards;
}

const handlers = {
  control: controlHandlers,
  help: helpHandlers,
  board: boardHandlers,
  navigation: navigationHandlers,
  filter: filterHandlers,
  language: languageHandlers,
  console: consoleHandlers,
  scroll: scrollHandlers,
  zoom: zoomHandlers
};

function getHandler(speechCmd){
  var commands = _.flatMap(handlers, category => _.map(category, command => command));
  return _.find(commands, command => _.includes(command.commands, speechCmd)) || _.find(commands, command => _.some(command.commands, cmd => speechCmd.startsWith(cmd)));
}
