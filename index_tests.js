

var expect = chai.expect;

describe('MyFunctions', function() {
    describe('#freshDeck', function() {
        it('should produce an array of 52 Cards', function() {
            const testDeck = new Deck();

            expect(testDeck.cards.length).to.equal(52);
        });

    
    });
});

