// require is used to import Node.js packages, i.e. in our case http
const http = require('http');

// createServer is used to start an instance of the Server
// req: Request from the browser
// res: Response to return back to the server
const server = http.createServer((req, res) => {
   
    // Print out the request from the browser in the console
    console.log(req.url);

    // Return back the response to the browser
    if(req.url === '/about'){
        res.end('The about page'); 
    } else if (req.url === '/contact'){
        res.end('The contact page'); 
    } else if (req.url === '/'){
        res.end('The home page'); 
    } else {

        // writeHead writes the status code of the request.
        res.writeHead(304);

        // Format the response for the browser to display
        res.end('404 - Page Not Found');
    }
    
})

// Port 3000 will start taking requests
server.listen(3000);