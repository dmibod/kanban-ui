import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import socket from './apis/socket';
import worker from './apis/worker';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import configure from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

socket();

const store = configure();

//const unsubscribe =
store.subscribe(handleChange);
//unsubscribe();

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

let currentValue = [];

function handleChange() {
  let previousValue = currentValue;
  currentValue = store.getState().boards;
  if (currentValue.length > previousValue.length) {
    let cmd = [
      {
        id: '5c3016bc4d74f1000177ed11',
        type: 5,
        payload: {
          lane_id: '5c30169d4d74f1000177ed10'
        }
      }
    ];
    worker(cmd);
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
