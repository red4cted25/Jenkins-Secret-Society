const http = require('http');
const fs = require('fs');

http
    .createServer((req, res) => {
        // Conditional Rendering
        switch (req.url) {
            case '/': 
                // Home
                fs.readFile("./index.html", (err, data) => {
                    res.end(data);
                });
                break;
            case '/thedoor': 
                // Puzzle 1
                fs.readFile("./puzzle1.html", (err, data) => {
                    res.end(data);
                });
                break;
            case '/mindovermatter': 
                // Puzzle 2
                fs.readFile("./puzzle2.html", (err, data) => {
                    res.end(data);
                });
                break;
            case '/puzzle3': 
                // Puzzle 3
                fs.readFile("./puzzle3.html", (err, data) => {
                    res.end(data);
                });
                break;
            case '/puzzle4': 
                // Puzzle 4
                fs.readFile("./puzzle4.html", (err, data) => {
                    res.end(data);
                });
                break;
            case '/puzzle5': 
                // Puzzle 5
                fs.readFile("./puzzle5.html", (err, data) => {
                    res.end(data);
                });
                break;
            case '/puzzle6': 
                // Puzzle 6
                fs.readFile("./puzzle6.html", (err, data) => {
                    res.end(data);
                });
                break;
            default: 
                // 404 Error
                fs.readFile("./404.html", (err, data) => {
                    res.end(data);
                });
                break;
        }
    })
    .listen(5000)