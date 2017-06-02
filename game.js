function TicTacToe() {
    this.baz = 'baz';
}

TicTacToe.prototype.start = function() {
    
}

TicTacToe.prototype.hasWinner = function() {
    return false;
}

TicTacToe.prototype.nextPlayer = function() {
    return 'X';
}

module.exports = TicTacToe;
