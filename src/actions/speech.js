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
  var fn = handlers[cmd];
  if (fn) {
    console.log('found: ' + cmd);
    fn(cmd, props, helpShow, helpClose);
  } else {
    var keys = _.keys(handlers);
    var idx = _.findIndex(keys, (key) => cmd.startsWith(key));
    if (idx > 0) {
      fn = handlers[keys[idx]];
      if (fn) {
        console.log('found: ' + keys[idx]);
        fn(cmd, props, helpShow, helpClose);
      }
    }
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

const handlers = {
  'zoom reset': zoom100,
  'reset zoom': zoom100,
  'normal zoom': zoom100,
  'оригінал': zoom100,
  'збільшити': zoomIn,
  'більше': zoomIn,
  'zoom': zoomIn,
  'zoom zoom': zoomIn,
  'zoom in': zoomIn,
  'zoom out': zoomOut,
  'зменшити': zoomOut,
  'менше': zoomOut,
  'вгору': scrollTop,
  'вверх': scrollTop,
  'scroll top': scrollTop,
  'scroll up': scrollTop,
  'scroll start': scrollTop,
  'вниз': scrollBottom,
  'scroll bottom': scrollBottom,
  'scroll down': scrollBottom,
  'scroll end': scrollBottom,
  clear: clearConsole,
  очистити: clearConsole,
  почистити: clearConsole,
  стерти: clearConsole,
  'go home': goHome,
  'додому': goHome,
  filter: filterBoards,
  фільтр: filterBoards,
  'drop filter': dropFilter,
  'скинути фільтр': dropFilter,
  first: firstItem,
  перша: firstItem,
  перший: firstItem,
  last: lastItem,
  останній: lastItem,
  остання: lastItem,
  open: openItem,
  відкрити: openItem,
  mute: mute,
  виключити: mute,
  ukrainian: languageUa,
  англійська: languageUs,
  english: languageUs,
  create: createBoard,
  створити: createBoard,
  delete: removeBoard,
  remove: removeBoard,
  видалити: removeBoard,
  help: helpShow,
  close: helpClose,
  допомога: helpShow,
  закрити: helpClose,
  count: countBoard,
  share: shareBoard,
  private: privateBoard,
  публічна: shareBoard,
  приватна: privateBoard,
  name: nameBoard,
  назвати: nameBoard
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

function clearConsole() {
  console.clear();
}

function goHome() {
  history.push(`${process.env.REACT_APP_CONTEXT_ROOT}/`);
}

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
      val.name.toLowerCase().includes(ticker) ||
      val.description.toLowerCase().includes(ticker)
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
      val.name.toLowerCase().includes(ticker) ||
      val.description.toLowerCase().includes(ticker)
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

function mute(cmd, props) {
  props.speechOff();
}

function languageUa(cmd, props) {
  props.speechLang('uk-UA', (cmd) => props.speechCmd(cmd, props));
}

function languageUs(cmd, props) {
  props.speechLang('en-US', (cmd) => props.speechCmd(cmd, props));
}

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

function removeBoard(cmd, props){
  if (props.owner) {
    _.each(_.keys(getFilteredBoards(props)), id => props.deleteBoard(id, false));
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

function helpShow(cmd, props, show, close){
  show('Voice commands', _.keys(handlers).join(', '));
}

function helpClose(cmd, props, show, close){
  close();
}

function countBoard(cmd, props){
  var boards = getFilteredBoards(props);
  console.log(_.keys(boards).length);
}

function getFilteredBoards(props){
  var filter = props.filter.toLowerCase();
  var filteredBoards = _.omitBy(props.boards, board => !board.name.toLowerCase().includes(filter));
  console.log(filteredBoards);
  return filteredBoards;
}
