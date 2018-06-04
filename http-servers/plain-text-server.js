const http = require('http');

const port = 3000;
const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/plain');
    res.end('Hello World');
}).listen(port);
