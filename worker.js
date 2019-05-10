const api = 'https://dmitrybodnar.com';
//const api = 'http://localhost:3001';
//const api = 'http://it-practicioner.com:8080';
//const api = 'http://46.101.154.144:8080';

this.addEventListener('connect', event => {
  console.log(event);

  let port = event.ports[0];
  port.start();

  port.addEventListener('message', function(e) {
    console.log('message received by worker is...');
    if (e.data && e.data.boardId) {
      console.log(e.data);
      try {
        self.fetch(`${api}/v1/api/command/${e.data.boardId}`, {
          method: 'post',
          body: JSON.stringify(e.data.commands)
        })
          .then(function(response) {
            return response.json();
          })
          .then(function(data) {
            console.log('worker response: ', data);
            port.postMessage(data);
          })
          .catch(function(error) {
            console.log('worker error: ', error);
            port.postMessage("error");
          });
      } catch (err) {
        port.postMessage(err);
      }
    } else {
      console.log('array is expected by worker!');
    }
  });
});
