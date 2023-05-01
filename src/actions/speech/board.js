import _ from 'lodash';
import { isActiveBoard, getFilteredBoards } from './common';

export const boardHandlers = {
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
    commands: ['layout vertical', 'vertical', 'rows', 'рядки', 'вертикальний', 'вертикально'],
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
      'горизонтально'
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
  var name = cmd.slice(cmd.indexOf(' ')).trim();
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

function getOwnerBoards(props) {
  return _.omitBy(
    getFilteredBoards(props),
    (board) => !((board.owner || '') == (props.owner || ''))
  );
}
