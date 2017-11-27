#!/usr/bin/env node

const os = require('os');
const http = require('http');
const sonar = require('raspi-sonar/lib/sonar');

const hostname = os.hostname();
const port = 3001;

if (process.env.RABBIT_URL === undefined) {
  console.info('No rabbit URL found, will not report sonar details');
} else {
  sonar.connect(process.env.RABBIT_URL).then((conn) => {
    let opts = {
      'name': 'raspi-mon',
      'host': os.hostname()
    };
    let _ping = () => {
      sonar.ping(conn, 'raspi-sonar.ping', JSON.stringify(opts));
    };
    _ping();
    setInterval(_ping, 30000);
  }).then(null, console.warn);
}

const server = http.createServer((req, res) => {
  //res.status(200).json({status: true});
  res.writeHead(501, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ 
    status: true,
    meta: {
        hostname: os.hostname()
    }
  }));
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
