import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { api, wsapi } from './api';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import configureStore from './configureStore';

let store;

fetch(`${api}/v1/api/board`)
  .then(response => response.json())
  .then(boards => {
    let state = {
      todos: boards.map(board => {
        return { id: board.id, text: board.name, completed: false };
      })
    };

    store = configureStore(state);

    //const unsubscribe =
    store.subscribe(handleChange);
    //unsubscribe();

    render(
      <Provider store={store}>
        <App />
      </Provider>,
      document.getElementById('root')
    );
  });

let currentValue = [];
let sharedWorker = null;

function handleChange() {
  let previousValue = currentValue;
  currentValue = store.getState().todos;
  if (currentValue.length > previousValue.length) {
    const todo = currentValue[currentValue.length - 1];
    fetch(`${api}/v1/api/board`, {
      method: 'post',
      body: JSON.stringify({ name: todo.text })
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log('Created board:', data);
      });

      let cmd = [
        {
          "id": "5c3016bc4d74f1000177ed11",
          "type": 5,
          "payload": {
            "lane_id": "5c30169d4d74f1000177ed10"
          }
        }
      ];
      postCommands(cmd);
  }
}

(function() {
  let conn = new WebSocket(`${wsapi}/v1/api/notify/ws`);
  conn.onclose = function(evt) {
    console.log('Connection closed');
  };
  conn.onmessage = function(evt) {
    console.log('notification received', evt.data);
  };
})();

function postCommands(cmd) {
  console.log('post commands: ', cmd);
  if (!sharedWorker) {
    console.log('shared worker is not available');
    return;
  }
  console.log('commands posted to shared worker');
  sharedWorker.port.postMessage(cmd);
}

if (window.SharedWorker) {
    sharedWorker = new SharedWorker('worker.js');
    sharedWorker.port.start();
    console.log('shared worker is started');
    sharedWorker.port.addEventListener('message', event => {
      console.log('message received by main is...');
      console.log(event.data);
    });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
