var Game = function () {
    this.positions = [];
    this.placedPiecesCount = 0;
};

let indexBasedOnCoords = function(x,y) {
    let adjX = x - 1;
    let adjY = y - 1;
    let index = adjX + (adjY * 3);
    return index;
}

let playerBasedOnPiecesPlaced = function(piecesPlaced) {
    return (piecesPlaced % 2 === 0) ? 'O' : 'X';
}

Game.prototype.placePiece = function(x,y) {
    let index = indexBasedOnCoords(x,y);
    if (this.positions[index] !== undefined) {
        throw new TypeError('Piece already placed there!');
    }

    let piece = playerBasedOnPiecesPlaced(this.placedPiecesCount);
    this.positions[index] = piece;
    this.placedPiecesCount++;
}

Game.prototype.hasWinner = function() {
    return false;    
}

Game.prototype.currentPlayer = function() {
    return playerBasedOnPiecesPlaced(this.placedPiecesCount);
}

Game.prototype.nextPlayer = function() {
    return playerBasedOnPiecesPlaced(this.placedPiecesCount+1);
}

Game.prototype.pieceAt = function(x,y) {
    let index = indexBasedOnCoords(x,y);
    return this.positions[index];
}

module.exports = Game;
