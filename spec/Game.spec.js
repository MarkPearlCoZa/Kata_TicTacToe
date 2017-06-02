const chai = require('chai');
const expect = chai.expect;
const Game = require('../lib/game.js');

describe('A new game', function() {
    let game;

    describe('with no pieces placed', function() {
        before(function(){
            game = new Game();
        });

        it ('should not have a winner', function() {
            expect(game.hasWinner()).to.equal(false);
        });
        it ('should have the current player as O', function() {
            expect(game.currentPlayer()).to.equal('O');
        });
        it ('should have the next player as X', function() {
            expect(game.nextPlayer()).to.equal('X');
        });
    });

    describe('with a single piece placed at 1,1', function() {
        before(function(){
            game = new Game();
            game.placePiece(1,1);
        });
        it ('should have the piece where it was placed', function() {
            expect(game.pieceAt(1,1)).to.equal('O');
        });
        it ('should not have a winner', function() {
            expect(game.hasWinner()).to.equal(false);
        });
        it ('should throw exception if you try and place a piece again at 1,1', function(){
            expect(() => game.placePiece(1,1)).to.throw('Piece already placed there!');
        });
    });

    describe('with two pieces placed at 1,1 and 2,1', function() {
        before(function(){
            game = new Game();
            game.placePiece(1,1);
            game.placePiece(2,1);
        });
        it ('should have the O piece at 1,1', function() {
            expect(game.pieceAt(1,1)).to.equal('O');
        });
        it ('should have the X piece at 2,1', function() {
            expect(game.pieceAt(2,1)).to.equal('X');
        });
        it ('should not have a winner', function() {
            expect(game.hasWinner()).to.equal(false);
        });
    });

    /*
    describe('with three Os in a horizontal row', function() {
        before(function(){
            game = new Game();
        });
        it ('should have O as the winner on any of the horz lines', function() {
            for (let x = 1; x=<3; x++) {
                game.placePiece(x,1); // O
                game.placePiece(x,2); // X
                expect(game.hasWinner()).to.equal('O');
            }
        });
    });
    */
});

