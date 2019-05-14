import server from './index';

export const UPDATECARD = 0;
export const REMOVECARD = 1;
export const EXCLUDECHILD = 2;
export const APPENDCHILD = 3;
export const INSERTBEFORE = 4;
export const INSERTAFTER = 5;
export const LAYOUTBOARD = 6;

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
