import _ from 'lodash';

export const isActiveBoard = (cmd, props) => props.owner && props.activeBoardId;
export const isNotActiveBoard = (cmd, props) => !props.activeBoardId;
export const isEnabled = (command, cmd, props) => command.enabled ? command.enabled(cmd, props) : command;
export const getFilteredBoards = (props) => {
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
};
