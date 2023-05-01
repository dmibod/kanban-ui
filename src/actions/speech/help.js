import React from 'react';
import _ from 'lodash';
import { isEnabled } from './common';

function helpShow(handlers, cmd, props, show, close) {
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

  var body = _.map(_.map(handlers(), mapCategory));

  show(
    'Voice commands',
    <div className="" style={{ fontSize: 'x-small' }}>
      {body}
    </div>
  );
}

function helpClose(cmd, props, show, close) {
  close();
}

export const helpHandlers = (handlers) => {
  return {
    help: {
      commands: ['help', 'commands', 'допомога'],
      fn: (cmd, props, show, close) => helpShow(handlers, cmd, props, show, close)
    },
    close: {
      commands: ['close', 'cancel', 'закрити'],
      fn: helpClose
    }
  };
};
