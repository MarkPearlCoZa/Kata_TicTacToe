const WinnerChecker = require('./winnerChecker.js');
const xyCoordsToIndex = require('./xyCoordsToIndex.js');

var Game = function () {
    this.board = [];
};

let playerBasedOnPiecesPlaced = function(piecesPlaced) {
    return (piecesPlaced % 2 === 0) ? 'O' : 'X';
}

Game.prototype.placedPieces = function() {
    let placed = this.board.reduce((total, element)  => {
        if (element == undefined) return total;
        return total + 1;
    }, 0);
    return placed;
}

Game.prototype.placePieceTypeAt = function(piece,x,y) {
    let index = xyCoordsToIndex(x,y);
    if (this.board[index] !== undefined) {
        throw 'Piece already placed there!';
    }

    this.board[index] = piece;
}

Game.prototype.placePiece = function(x,y) {
    let piece = playerBasedOnPiecesPlaced(this.placedPieces());
    this.placePieceTypeAt(piece,x,y);
}

Game.prototype.hasWinner = function() {  
    let winnerChecker = new WinnerChecker(this.board);
    return winnerChecker.hasWinner();
}

Game.prototype.currentPlayer = function() {
    return playerBasedOnPiecesPlaced(this.placedPieces());
}

Game.prototype.nextPlayer = function() {
    return playerBasedOnPiecesPlaced(this.placedPieces()+1);
}

Game.prototype.pieceAt = function(x,y) {
    let index = indexBasedOnCoords(x,y);
    return this.board[index];
}

module.exports = Game;
