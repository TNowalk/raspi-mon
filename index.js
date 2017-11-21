#!/usr/bin/env node

const os = require('os');
const http = require('http');

const hostname = os.hostname();
const port = 3000;

const server = http.createServer((req, res) => {
  //res.status(200).json({status: true});
  res.writeHead(501, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: true }));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
