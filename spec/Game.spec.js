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

    describe('with the the board set with 3 vertical Os', function() {
        before(function(){
            game = new Game();
            game.placePieceTypeAt('O',1,1);
            game.placePieceTypeAt('O',1,2);
            game.placePieceTypeAt('O',1,3);
        });
        it ('should match the board', function() {
            expect(game.pieceAt(1,1)).to.equal('O');
            expect(game.pieceAt(1,2)).to.equal('O');
            expect(game.pieceAt(1,3)).to.equal('O');
        });
        it ('should have 3 pieces on the board', function() {
            expect(game.placedPieces()).to.equal(3);
        });
        it ('should have a winner of O', function() {
            expect(game.hasWinner()).to.equal('O');
        })
    });

    describe('with the the board set with 3 horizontal Os', function() {
        before(function(){
            game = new Game();
            game.placePieceTypeAt('O',1,1);
            game.placePieceTypeAt('O',2,1);
            game.placePieceTypeAt('O',3,1);
        });
        it ('should match the board', function() {
            expect(game.pieceAt(1,1)).to.equal('O');
            expect(game.pieceAt(2,1)).to.equal('O');
            expect(game.pieceAt(3,1)).to.equal('O');
        });
        it ('should have 3 pieces on the board', function() {
            expect(game.placedPieces()).to.equal(3);
        });
        it ('should have a winner of O', function() {
            expect(game.hasWinner()).to.equal('O');
        })
    });

    describe('with the the board set with 3 forward diagonal Os', function() {
        before(function(){
            game = new Game();
            game.placePieceTypeAt('O',1,1);
            game.placePieceTypeAt('O',2,2);
            game.placePieceTypeAt('O',3,3);
        });
        it ('should match the board', function() {
            expect(game.pieceAt(1,1)).to.equal('O');
            expect(game.pieceAt(2,2)).to.equal('O');
            expect(game.pieceAt(3,3)).to.equal('O');
        });
        it ('should have 3 pieces on the board', function() {
            expect(game.placedPieces()).to.equal(3);
        });
        it ('should have a winner of O', function() {
            expect(game.hasWinner()).to.equal('O');
        })
    });

    describe('with the the board set with 3 backward diagonal Os', function() {
        before(function(){
            game = new Game();
            game.placePieceTypeAt('O',1,3);
            game.placePieceTypeAt('O',2,2);
            game.placePieceTypeAt('O',3,1);
        });
        it ('should match the board', function() {
            expect(game.pieceAt(1,3)).to.equal('O');
            expect(game.pieceAt(2,2)).to.equal('O');
            expect(game.pieceAt(3,1)).to.equal('O');
        });
        it ('should have 3 pieces on the board', function() {
            expect(game.placedPieces()).to.equal(3);
        });
        it ('should have a winner of O', function() {
            expect(game.hasWinner()).to.equal('O');
        })
    });
});

