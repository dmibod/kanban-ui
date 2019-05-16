import { fetchBoard } from '../actions/board';
import { fetchLane } from '../actions/lane';
import { fetchCard } from '../actions/card';
import store from '../store';

const REFRESHCARDNOTIFICATION = 0;
const REFRESHLANENOTIFICATION = 1;
const REFRESHBOARDNOTIFICATION = 2;
const REMOVECARDNOTIFICATION = 3;
const REMOVELANENOTIFICATION = 4;
const REMOVEBOARDNOTIFICATION = 5;

let socket = null;

function createSocket(msg) {
  let conn = new WebSocket(`${process.env.REACT_APP_WS_URL}/v1/api/notify`);

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
    if (notifiactions && notifiactions.length) {
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
      fetchCard(msg.board_id, msg.id)(store.dispatch);
      return;
    case REFRESHLANENOTIFICATION:
      fetchLane(msg.board_id, msg.id)(store.dispatch);
      return;
    case REFRESHBOARDNOTIFICATION:
      fetchBoard(msg.board_id)(store.dispatch);
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
