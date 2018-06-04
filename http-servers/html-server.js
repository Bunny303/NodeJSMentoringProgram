const http = require('http');
const fs = require('fs');

const port = 3000;
const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html');   
    var readerStream = fs.createReadStream('index.html');
    readerStream.on('end', () => res.end());
    readerStream.pipe(res);
}).listen(port);
