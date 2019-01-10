import { wsapi } from './urls';

let socket = null;

function createSocket(msg) {
  let conn = new WebSocket(`${wsapi}/v1/api/notify`);

  conn.onopen = function(evt) {
    console.log('websocket opened');
    if (msg) {
      sendMessage(conn, msg);
    }
  };
  conn.onclose = function(evt) {
    console.log('websocket closed');
  };
  conn.onmessage = function(evt) {
    console.log('websocket: receive', JSON.parse(evt.data));
  };

  return conn;
}

function sendMessage(ws, msg) {
  console.log('websocket: send', JSON.parse(msg));
  ws.send(msg);
}

export default msg => {
  if (!socket) {
    console.log('websocket not available');
    socket = createSocket(msg);
    return;
  }

  sendMessage(socket, msg);
};
