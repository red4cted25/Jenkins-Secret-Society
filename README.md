# The Secret Society of Old Man Jenkins - Node.js Puzzle Game

Welcome to the mysterious world of Old Man Jenkins' Secret Society! This Node.js server hosts an intricate puzzle game where the URL serves as the key to unlocking each puzzle.

## Project Overview

In this immersive experience, you've stumbled upon a magic tome in Old Man Jenkins' yard, unleashing an ancient being destined to destroy the Earth. After a surreal encounter with a shadowy figure, you find yourself compelled to create a secret organization to combat this newfound threat. This puzzle site serves as a test for potential members, challenging their problem-solving skills and fortitude.

## Project Structure

* **index.html**: Home page
* **hint.html**: Hints page
* **puzzle1.html**: Puzzle 1 - Mind/Matter
* **puzzle2.html**: Puzzle 2 - Monkeys
* **puzzle3.html**: Puzzle 3 - Sorry, Dave
* **puzzle4.html**: Puzzle 4 - Here Somewhere
* **puzzle5.html**: Puzzle 5 - Hidden Clues
* **simon.html**: Simon Says memory game
* **puzzle6.html**: Puzzle 6 - Danger
* **broodmother.html**: Final choice page
* **404.html**: Custom 404 error page
* **main.js**: Node.js server

## Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/red4cted25/Jenkins-Secret-Society.git
   cd Jenkins-Secret-Society
   ```

2. **Install Dependencies**

   Make sure you have Node.js installed. Run:

   ```bash
   npm install
   ```

## Usage

To start the server, run:

```bash
node main.js
```

The server will start on `http://localhost:5000`.

## Routes

Here is a list of available routes and their associated files:

* `/` - Home page (`index.html`)
* `/thedoor` - Puzzle 1 (`puzzle1.html`)
* `/mindovermatter` - Puzzle 2 (`puzzle2.html`)
* `/speaknoevil` - Puzzle 3 (`puzzle3.html`)
* `/hal9000` - Puzzle 4 (`puzzle4.html`)
* `/secret` or `/escape` - Puzzle 5 (`puzzle5.html`)
* `/simon` - Simon Says memory game (`simon.html`)
* `/danger` - Puzzle 6 (`puzzle6.html`)
* `/broodmother` - Final choice page (`broodmother.html`)
* Any other route - 404 error page (`404.html`)

## Contributing

Feel free to submit issues, suggest improvements, or contribute to the project. For any major changes or feature additions, please open an issue to discuss it first.

## License

This project is licensed under the MIT License - see the LICENSE file for details.