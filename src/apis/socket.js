import { wsapi } from './urls';
import { fetchBoard, fetchBoardLanes } from '../actions';
import store from '../store';

export const REFRESHCARDNOTIFICATION = 0;
export const REFRESHLANENOTIFICATION = 1;
export const REFRESHBOARDNOTIFICATION = 2;
export const REMOVECARDNOTIFICATION = 3;
export const REMOVELANENOTIFICATION = 4;
export const REMOVEBOARDNOTIFICATION = 5;

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
    socket = null;
  };
  conn.onmessage = function(evt) {
    const notifiactions = JSON.parse(evt.data);
    console.log('websocket: receive', notifiactions);
    if (notifiactions && notifiactions.length){
      for (let notification of notifiactions) {
        processNotification(notification);
      }
    } else {
      console.log('array is expected by socket!');
    }
  };

  return conn;
}

function sendMessage(ws, msg) {
  console.log('websocket: send', JSON.parse(msg));
  ws.send(msg);
}

function processNotification(msg) {
  switch (msg.type) {
    case REFRESHCARDNOTIFICATION:
    case REFRESHLANENOTIFICATION:
    case REFRESHBOARDNOTIFICATION:
      console.log('REFRESHBOARDNOTIFICATION: fetchBoard', msg);
      fetchBoard(msg.context)(store.dispatch);
      fetchBoardLanes(msg.context)(store.dispatch);
      return;
    case REMOVECARDNOTIFICATION:
    case REMOVELANENOTIFICATION:
    case REMOVEBOARDNOTIFICATION:
    default:
  }
}

export default msg => {
  if (!socket) {
    console.log('websocket not available');
    socket = createSocket(msg);
    return;
  }

  sendMessage(socket, msg);
};
