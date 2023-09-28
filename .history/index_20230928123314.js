// require is used to import Node.js packages, i.e. in our case http
const http = require('http');

// createServer Returns a new instance of Server. Returns a new instance of Server. 
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('Hello, world!');
})

server.listen(3000);