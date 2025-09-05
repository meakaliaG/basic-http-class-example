const http = require('http');
const fs = require('fs');

const port = process.env.PORT || process.env.NODE_PORT || 3000;
const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const onRequest = (request, response) => {
  if (request.url === '/') {
    // content-type tells browser what kind of media to be processed
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(index);
    response.end();
  } else {
    response.writeHead(200, { 'Content-Type': 'text/plain' });
    response.write('No page here!');
    response.end();
  }

  // content-type tells browser what kind of media to be processed
//   response.writeHead(200, { 'Content-Type': 'text/html' });
//   response.write(index);
//   response.end();
};

http.createServer(onRequest).listen(port, () => {
  console.log(`Listening on port ${port}`);
});
