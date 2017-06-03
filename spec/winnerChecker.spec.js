const chai = require('chai');
const expect = chai.expect;
const WinnerChecker = require('../lib/winnerChecker.js');

describe('Checking winning scenarios on a 3x3 board', function() {
    let checker;

    ['O','X'].map(piece => {

        describe(`with 3 vertical ${piece}s`, function() {
            before(function(){
                checker = new WinnerChecker([piece, undefined, undefined,
                                             piece, undefined, undefined, 
                                             piece, undefined, undefined]);
            });
            it (`should have a winner of ${piece}`, function() {
                expect(checker.hasWinner()).to.equal(piece);
            })
        });

        describe(`with with 3 horizontal ${piece}s`, function() {
            before(function(){
                checker = new WinnerChecker([piece, piece, piece,
                                             undefined, undefined, undefined,
                                             undefined, undefined, undefined]);
            });
            it (`should have a winner of ${piece}`, function() {
                expect(checker.hasWinner()).to.equal(piece);
            })
        });

        describe(`with 3 forward diagonal ${piece}s`, function() {
            before(function(){
                checker = new WinnerChecker([piece, undefined, undefined,
                                             undefined, piece, undefined,
                                             undefined, undefined, piece]);
            });
            it (`should have a winner of  ${piece}`, function() {
                expect(checker.hasWinner()).to.equal(piece);
            })
        });

        describe(`with 3 backward diagonal ${piece}s`, function() {
            before(function(){
                checker = new WinnerChecker([undefined, undefined, piece,
                                             undefined, piece, undefined,
                                             piece, undefined, undefined]);
            });
            it (`should have a winner of ${piece}`, function() {
                expect(checker.hasWinner()).to.equal(piece);
            })
        });
    });
});

