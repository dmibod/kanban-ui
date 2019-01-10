export const UpdateCard = 0;
export const RemoveCard = 1;
export const ExcludeChild = 2;
export const InsertBefore = 3;
export const InsertAfter = 4;
export const AppendChild = 5;
export const LayoutBoard = 6;

let sharedWorker = null;

if (window.SharedWorker) {
  sharedWorker = new SharedWorker('worker.js');
  sharedWorker.port.start();

  console.log('shared worker: started');

  sharedWorker.port.addEventListener('message', event => {
    console.log('main: message received from shared worker', event.data);
  });
}

export default cmd => {
  if (!sharedWorker) {
    console.log('main: shared worker is not available');
    return;
  }

  console.log('main: post commands to shared worker', cmd);

  sharedWorker.port.postMessage(cmd);

  console.log('main: commands posted to shared worker');
};
