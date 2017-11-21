const http = require('http');

const hostname = 'bramble-n1.local';
const port = 3000;

const server = http.createServer((req, res) => {
  res.status(200).json({status: true});
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
