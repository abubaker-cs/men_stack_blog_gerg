// require is used to import Node.js packages, i.e. in our case http
const http = require('http');

// 
const fs = require('fs');

// Links for the pages
const homePage = fs.readFileSync('index.html');
const aboutPage = fs.readFileSync('about.html');
const contactPage = fs.readFileSync('contact.html');
const notFoundPage = fs.readFileSync('404.html');

// createServer is used to start an instance of the Server
// req: Request from the browser
// res: Response to return back to the server
const server = http.createServer((req, res) => {
   
    // Print out the request from the browser in the console
    console.log(req.url);

    // Return back the response to the browser
    if(req.url === '/about'){
        res.end(aboutPage); 
    } else if (req.url === '/contact'){
        res.end(contactPage); 
    } else if (req.url === '/'){
        res.end(homePage); 
    } else {

        // writeHead writes the status code of the request.
        res.writeHead(404);

        // Format the response for the browser to display
        res.end(notFoundPage);
    }
    
})

// Port 3000 will start taking requests from the browser
server.listen(3000);