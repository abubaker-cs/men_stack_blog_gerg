// require is used to import Node.js packages, i.e. in our case http
const http = require('http');

// createServer is used to start an instance of the Server
// req: Request from the browser
// res: Response to return back to the server
const server = http.createServer((req, res) => {
   
    // Print out the request from the browser in the console
    console.log(req.url);

    if(req.url === '/about'){
        res.end('The about page'); 
    } else if (req.url === '/contact'){
        res.end('The contact page'); 
    } else if (req.url === '/'){
        res.end('The home page'); 
    } else {
        res.writeHead(404);
        res.end('404 - Page Not Found');
    }
    
    // Return back the response to the browser
    // res.end('Hello, world this is a response from Node.js!');

})

// Port 3000 will start taking requests
server.listen(3000);