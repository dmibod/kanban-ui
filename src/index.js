import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import configureStore from './configureStore';

const secure = 's';
const host = 'dmitrybodnar.com';
//const secure = '';
//const host = 'localhost:8080';
const api   = `http${secure}://${host}`;
const wsapi = `ws${secure}://${host}`;
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
  }
}

(function() {
  var conn = new WebSocket(`${wsapi}/v1/api/notify/ws`);
  conn.onclose = function(evt) {
    console.log('Connection closed');
  };
  conn.onmessage = function(evt) {
    console.log('notification received', evt.data);
  };
})();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
