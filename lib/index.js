#!/usr/bin/env node
'use strict';
const twoPlayerGame = require('./consoleRenderer/twoPlayerConsole.js');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'TICTACTOE > '
});

console.log('Welcome to TicTacToe');
rl.prompt();

rl.on('line', (input) => {
    let words = input.split(' ');
    let command = words[0].toLowerCase();
    
    switch (words[0]) {
        case 'quit','bye':
            rl.close();
            break;

        case 'play':
            rl.close();
            twoPlayerGame();
            rl.prompt();
            break;

        default :
            console.log('unrecognize command (use quit)');
            rl.prompt(); 
            break;
    }
}).on('close', () => {
    console.log('bye!');
});
