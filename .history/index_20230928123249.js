// require is used to import Node.js packages, i.e. in our case http
const http = require('http');

// createServier Returns a new instance of Server. 
// The requestListener is a function which is automatically added to the 'request' event.
const server = http.createServer((req, res) => {
    console.log(req.url);
    res.end('Hello, world!');
})

server.listen(3000);