#!/usr/bin/env node
'use strict';

const program = require('commander');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    promot: 'TICTACTOE>'
});

console.log('welcome to TicTacToe');

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
