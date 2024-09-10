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
            case '/hints':
            case '/hint': 
                // Hints
                fs.readFile("./hint.html", (err, data) => {
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
            case '/speaknoevil': 
                // Puzzle 3
                fs.readFile("./puzzle3.html", (err, data) => {
                    res.end(data);
                });
                break;
            case '/hal9000': 
                // Puzzle 4
                fs.readFile("./puzzle4.html", (err, data) => {
                    res.end(data);
                });
                break;
            case '/secret':
            case '/escape': 
                // Puzzle 5
                fs.readFile("./puzzle5.html", (err, data) => {
                    res.end(data);
                });
                break;
            case '/simon': 
                // Puzzle Game
                fs.readFile("./simon.html", (err, data) => {
                    res.end(data);
                });
                break;
            case '/danger': 
                // Puzzle 6
                fs.readFile("./puzzle6.html", (err, data) => {
                    res.end(data);
                });
                break;
            case '/broodmother':
                // Final Choice
                fs.readFile("./broodmother.html", (err, data) => {
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