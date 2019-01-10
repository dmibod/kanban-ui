//const api = 'https://dmitrybodnar.com';
const api = 'http://localhost:3001';

this.addEventListener('connect', event => {
  console.log(event);

  let port = event.ports[0];
  port.start();

  port.addEventListener('message', function(e) {
    console.log('message received by worker is...');
    if (e.data && e.data.length > 0) {
      console.log(e.data);
      try {
        self.fetch(`${api}/v1/api/command`, {
          method: 'post',
          body: JSON.stringify(e.data)
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
