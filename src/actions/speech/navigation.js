import _ from 'lodash';
import history from '../../history';
import { getFilteredBoards } from './common';
import { isActiveBoard } from './common';

export const navigationHandlers = {
  home: {
    commands: ['go home', 'додому'],
    enabled: isActiveBoard,
    fn: goHome,
  },
  first: {
    commands: ['first', 'перша', 'перший', 'першу'],
    fn: firstItem,
  },
  last: {
    commands: ['last', 'останній', 'остання', 'останню'],
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
