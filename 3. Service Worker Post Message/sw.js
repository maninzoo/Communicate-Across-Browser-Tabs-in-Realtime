
self.addEventListener("message", (event) => {
  var message = event.data;

  console.log(`Worker - Message received: ${message}`);

  clients.matchAll().then( (clientList) => {
    for (const client of clientList) {
      client.postMessage(message);
    }
  }).catch((error) => {
    console.error('Error postMessage in service worker: ', error);
  });
});
