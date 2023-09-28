// require is used to import Node.js packages, i.e. in our case http
const http = require('http');

// 
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('Hello, world!');
})

server.listen(3000);