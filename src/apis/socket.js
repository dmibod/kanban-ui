import { fetchBoard, deleteBoard } from '../actions/board';
import { fetchLane, deleteLane } from '../actions/lane';
import { fetchCard, deleteCard } from '../actions/card';
import store from '../store';

const REFRESHCARDNOTIFICATION = 0;
const REFRESHLANENOTIFICATION = 1;
const REFRESHBOARDNOTIFICATION = 2;
const REMOVECARDNOTIFICATION = 3;
const REMOVELANENOTIFICATION = 4;
const REMOVEBOARDNOTIFICATION = 5;
const CREATECARDNOTIFICATION = 6;
const CREATELANENOTIFICATION = 7;
const CREATEBOARDNOTIFICATION = 8;

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
    const ns = JSON.parse(evt.data);
    console.log('websocket: receive', ns);
    if (ns && ns.length) {
      for (let n of ns) {
        processNotification(n);
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
    case CREATECARDNOTIFICATION:
    case REFRESHCARDNOTIFICATION:
      fetchCard(msg.board_id, msg.id)(store.dispatch);
      return;
    case CREATELANENOTIFICATION:
    case REFRESHLANENOTIFICATION:
      fetchLane(msg.board_id, msg.id)(store.dispatch);
      return;
    case CREATEBOARDNOTIFICATION:
    case REFRESHBOARDNOTIFICATION:
      fetchBoard(msg.board_id)(store.dispatch);
      return;
    case REMOVECARDNOTIFICATION:
      deleteCard(msg.board_id, undefined, msg.id, true)(store.dispatch);
      return;
    case REMOVELANENOTIFICATION:
      deleteLane(msg.board_id, undefined, msg.id, true)(store.dispatch);
      return;
    case REMOVEBOARDNOTIFICATION:
      deleteBoard(msg.board_id, true)(store.dispatch);
      return;
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
