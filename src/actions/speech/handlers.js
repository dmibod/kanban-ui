import _ from 'lodash';
import { isEnabled } from './common';
import { laneHandlers } from './lane';
import { controlHandlers } from './control';
import { helpHandlers } from './help';
import { zoomHandlers } from './zoom';
import { languageHandlers } from './language';
import { consoleHandlers } from './console';
import { scrollHandlers } from './scroll';
import { filterHandlers } from './filter';
import { navigationHandlers } from './navigation';
import { boardHandlers } from './board';

const handlers = {
  board: boardHandlers,
  console: consoleHandlers,
  control: controlHandlers,
  filter: filterHandlers,
  help: helpHandlers(() => handlers),
  lane: laneHandlers,
  language: languageHandlers,
  navigation: navigationHandlers,
  scroll: scrollHandlers,
  zoom: zoomHandlers
};

export const getHandler = (speechCmd, props) => {
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
