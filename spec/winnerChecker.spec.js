const chai = require('chai');
const expect = chai.expect;
const WinnerChecker = require('../lib/winnerChecker.js');

describe('A new game', function() {
    let checker;

    describe('with the the board set with 3 vertical Os', function() {
        before(function(){
            checker = new WinnerChecker(['O', undefined, undefined,
                                      'O', undefined, undefined, 
                                      'O', undefined, undefined]);
        });
        it ('should have a winner of O', function() {
            expect(checker.hasWinner()).to.equal('O');
        })
    });

    describe('with the the board set with 3 horizontal Os', function() {
        before(function(){
            checker = new WinnerChecker(['O', 'O', 'O',
                                       undefined, undefined, undefined,
                                       undefined, undefined, undefined]);
        });
        it ('should have a winner of O', function() {
            expect(checker.hasWinner()).to.equal('O');
        })
    });

    describe('with two pieces placed at 1,1 and 2,1', function() {
        before(function(){
            checker = new WinnerChecker(['O', 'O', undefined,
                                       undefined, undefined, undefined,
                                       undefined, undefined, undefined]);
        });
        it ('should not have a winner', function() {
            expect(checker.hasWinner()).to.equal(false);
        });
    });

    describe('with the the board set with 3 forward diagonal Os', function() {
        before(function(){
            checker = new WinnerChecker(['O', undefined, undefined,
                                      undefined, 'O', undefined,
                                      undefined, undefined, 'O']);
        });
        it ('should have a winner of O', function() {
            expect(checker.hasWinner()).to.equal('O');
        })
    });

    describe('with the the board set with 3 backward diagonal Os', function() {
        before(function(){
            checker = new WinnerChecker([undefined, undefined, 'O',
                                      undefined, 'O', undefined,
                                      'O', undefined, undefined]);
        });
        it ('should have a winner of O', function() {
            expect(checker.hasWinner()).to.equal('O');
        })
    });
});

