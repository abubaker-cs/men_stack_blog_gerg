// require is used to import Node.js packages, i.e. in our case http
const http = require('http');

// Import Express module
const express = require('express');

// To server HTML files with express, we use path module
const path = require('path');

// Calls express() to start a new Express App
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Express is listening on port 3000');
});

//
// Routing: Where we map requests to specific handlers depending on their URL.
// 
app.get('/', (req, res) => {

    // __dirname helps us get the absolute path of directory regardless of OS
    // sendFile is equivalent to 45 lines of JS Code
    res.sendFile(path.join(__dirname, 'index.html'));

    // res.json({
    //     name: 'Abubaker',
    // })

});

// About page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Contact page
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// 
// const fs = require('fs');

// Links for the pages
// const homePage = fs.readFileSync('index.html');
// const aboutPage = fs.readFileSync('about.html');
// const contactPage = fs.readFileSync('contact.html');
// const notFoundPage = fs.readFileSync('404.html');



// createServer is used to start an instance of the Server
// req: Request from the browser
// res: Response to return back to the server
// const server = http.createServer((req, res) => {
   
//     // Print out the request from the browser in the console
//     console.log(req.url);

//     // Return back the response to the browser
//     if(req.url === '/about'){
//         res.end(aboutPage); 
//     } else if (req.url === '/contact'){
//         res.end(contactPage); 
//     } else if (req.url === '/'){
//         res.end(homePage); 
//     } else {

//         // writeHead writes the status code of the request.
//         res.writeHead(404);

//         // Format the response for the browser to display
//         res.end(notFoundPage);
//     }
    
// })

// // Port 3000 will start taking requests from the browser
// server.listen(3000);


