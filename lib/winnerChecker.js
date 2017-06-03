var WinnerChecker = function (board) {
    this.board = board;
};

let getForwardDiagonalLine = function(board) {
    return [
                board[indexBasedOnCoords(3,1)],
                board[indexBasedOnCoords(2,2)],
                board[indexBasedOnCoords(1,3)]
           ].join('');
}

let getBackwardDiagonalLine = function(board) {
    return [
                board[indexBasedOnCoords(1,1)],
                board[indexBasedOnCoords(2,2)],
                board[indexBasedOnCoords(3,3)]
           ].join('');
}

let getHorizontalLine = function(y, board) {
    let startIndex = indexBasedOnCoords(1,y);
    let endIndex = indexBasedOnCoords(3,y);
    let horzLine = board.slice(startIndex,endIndex+1).join('');
    return horzLine;
}

let getVerticalLine = function(x, board) {
    return [
                board[indexBasedOnCoords(x,1)],
                board[indexBasedOnCoords(x,2)],
                board[indexBasedOnCoords(x,3)]
           ].join('');
}

WinnerChecker.prototype.hasWinnerOnDiagonal = function() {
    let winner = false;
    let backwardDiagLine = getBackwardDiagonalLine(this.board);
    if (backwardDiagLine === 'OOO') winner = 'O';
    if (backwardDiagLine === 'XXX') winner = 'X';

    let forwardDiagLine = getForwardDiagonalLine(this.board);
    if (forwardDiagLine === 'OOO') winner = 'O';
    if (forwardDiagLine === 'XXX') winner = 'X';
    return winner;
}

WinnerChecker.prototype.hasWinnerOnVertical = function() {
    let winner = false;
    [1, 2, 3].map(x => {
        let vertLine = getVerticalLine(x, this.board);
        if (vertLine === 'OOO') winner = 'O';
        if (vertLine === 'XXX') winner = 'X';
        if (winner) return;
    });
    return winner;
}

WinnerChecker.prototype.hasWinnerOnHorizontal = function() {
    let winner = false;
    [1, 2, 3].map(y => {
        let horzLine = getHorizontalLine(y, this.board);
        if (horzLine === 'OOO') winner = 'O';
        if (horzLine === 'XXX') winner = 'X';
        if (winner) return;
    });
    return winner;
}

WinnerChecker.prototype.hasWinner = function(game) {
    return this.hasWinnerOnHorizontal() || 
           this.hasWinnerOnVertical() || 
           this.hasWinnerOnDiagonal();
}

