import server from './index';

export const UPDATECARD = 0;
export const REMOVECARD = 1;
export const UPDATELANE = 2;
export const REMOVELANE = 3;
export const EXCLUDECHILD = 4;
export const APPENDCHILD = 5;
export const INSERTBEFORE = 6;
export const INSERTAFTER = 7;
export const LAYOUTBOARD = 8;
export const LAYOUTLANE = 9;

let sharedWorker = null;

if (false && window.SharedWorker) {
  sharedWorker = new SharedWorker(`${process.env.REACT_APP_CONTEXT_ROOT}/worker.js`);
  sharedWorker.port.start();

  console.log('shared worker: started');

  sharedWorker.port.addEventListener('message', event => {
    console.log('main: message received from shared worker', event.data);
  });
}

export default (boardId, commands) => {
  if (!sharedWorker) {
    console.log('main: shared worker is not available');

    server.post(`/v1/api/command/${boardId}`, commands);
    
    return;
  }

  console.log('main: post commands to shared worker', commands);

  sharedWorker.port.postMessage({ boardId, commands });

  console.log('main: commands posted to shared worker');
};
