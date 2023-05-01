export const filterHandlers = {
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
