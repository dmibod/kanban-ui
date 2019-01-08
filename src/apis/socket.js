import { wsapi } from './urls';

export default () => {
  let conn = new WebSocket(`${wsapi}/v1/api/notify/ws`);
  conn.onopen = function (evt) {
    console.log('websocket opened');
  };  
  conn.onclose = function(evt) {
    console.log('websocket closed');
  };
  conn.onmessage = function(evt) {
    console.log('websocket: notification received', evt.data);
  };
};
