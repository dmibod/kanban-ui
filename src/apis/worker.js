import server from './index';
import { root } from './urls';

export const UPDATECARD = 0;
export const REMOVECARD = 1;
export const EXCLUDECHILD = 2;
export const APPENDCHILD = 3;
export const INSERTBEFORE = 4;
export const INSERTAFTER = 5;
export const LAYOUTBOARD = 6;

let sharedWorker = null;

if (window.SharedWorker) {
  sharedWorker = new SharedWorker(`${root}/worker.js`);
  sharedWorker.port.start();

  console.log('shared worker: started');

  sharedWorker.port.addEventListener('message', event => {
    console.log('main: message received from shared worker', event.data);
  });
}

export default cmd => {
  if (!sharedWorker) {
    console.log('main: shared worker is not available');
    
    server.post(`/v1/api/command`, cmd);
    
    return;
  }

  console.log('main: post commands to shared worker', cmd);

  sharedWorker.port.postMessage(cmd);

  console.log('main: commands posted to shared worker');
};
