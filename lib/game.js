var Game = function () {
    this.board = [];
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

Game.prototype.placedPieces = function() {
    let placed = this.board.reduce((total, element)  => {
        if (element == undefined) return total;
        return total + 1;
    }, 0);
    return placed;
}

Game.prototype.placePieceTypeAt = function(piece,x,y) {
    let index = indexBasedOnCoords(x,y);
    if (this.board[index] !== undefined) {
        throw new TypeError('Piece already placed there!');
    }

    this.board[index] = piece;
}

Game.prototype.placePiece = function(x,y) {
    let piece = playerBasedOnPiecesPlaced(this.placedPieces());
    this.placePieceTypeAt(piece,x,y);
}

Game.prototype.hasWinnerOnHorizontal = function() {
    ['X', 'O'].map(e => {
        [1, 2, 3].map(y => {
            let startIndex = indexBasedOnCoords(1,y);
            let endIndex = indexBasedOnCoords(3,y);
            let horzLine = this.board.slice(startIndex,endIndex+1).join('');
            if (horzLine === 'OOO') return 'O';
            if (horzLine === 'XXX') return 'X';
        });
    });
    return false;
}

Game.prototype.hasWinner = function() {  
    return this.hasWinnerOnHorizontal();
}

Game.prototype.currentPlayer = function() {
    return playerBasedOnPiecesPlaced(this.placedPieces());
}

Game.prototype.nextPlayer = function() {
    return playerBasedOnPiecesPlaced(this.placedPiecesCount+1);
}

Game.prototype.pieceAt = function(x,y) {
    let index = indexBasedOnCoords(x,y);
    return this.board[index];
}

module.exports = Game;
