#!/usr/bin/env node
'use strict';

const readline = require('readline');
const Game = require('./game.js');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: 'TICTACTOE > '
});

let game = new Game();
console.log(game.bar);

console.log('Welcome to TicTacToe');

rl.prompt();
rl.on('line', (input) => {
    switch (input.trim()) {
        case 'quit':
            rl.close();
            break;

        default :
            console.log('next move');
            rl.prompt(); 
            break;
    }
}).on('close', () => {
    console.log('bye!');
});


const drawBoard = () => {
    console.log('***');
};

