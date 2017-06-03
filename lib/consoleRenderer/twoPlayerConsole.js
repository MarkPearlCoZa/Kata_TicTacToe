'use strict';

let twoPlayerGame = function() {
    const Game = require('./../GameEngine/game.js');
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: 'TICTACTOE Player 1> '
    });
    let game = new Game();


    rl.prompt();
    rl.on('line', (input) => {
        let words = input.split(' ');
        let command = words[0].toLowerCase();
        rl.prompt = 'TICTACTOE > ';
        
        switch (words[0]) {
            case 'quit','bye':
                rl.close();
                break;

            case 'play':
                break;

            case 'place':
                placePiece(words[1]);
                rl.prompt(); 
                break; 

            default :
                console.log('unrecognize command (use place x,y or quit)');
                rl.prompt(); 
                break;
        }
    }).on('close', () => {
        console.log('bye!');
    });

    const placePiece = (location) => {
        let coords = location.match(/^(1|2|3),(1|2|3)$/);
        if (!coords) {
            console.log(`invalid coordinates supplied, do not recognize ${location}`);
            rl.prompt();
            return;
        }
        let x = parseInt(coords[1]);
        let y = parseInt(coords[2]);
        if (game.pieceAt(x,y) !== undefined) {
            console.log(`piece already placed at that position, try again...`);
            rl.prompt();
            return;
        }
        game.placePiece(x,y);
        drawBoard();
    }

    const pieceSymbol = (val) => (val === undefined) ? '_' : val;

    const drawBoard = () => {
        [1,2,3].forEach(x => {
            [1,2,3].forEach(y => {
                process.stdout.write(pieceSymbol(game.pieceAt(x,y)));
                process.stdout.write(' ');
            });
            process.stdout.write('\n');
        });
    };
};

module.exports = twoPlayerGame;
