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

  console.log('main: post commands to shared worker', cmd);

  if (!sharedWorker) {
    console.log('main: shared worker is not available');
    return;
  }

  console.log('main: commands posted to shared worker');

  sharedWorker.port.postMessage(cmd);
};
