const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
    req.pipe(res);
    req.on('end', () => res.end());
}).listen(port);
