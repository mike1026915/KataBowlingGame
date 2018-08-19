let assert = require('assert');
let Game = require('../app/game.js').Game


describe('Array', function() {
  describe('Nagative #indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
  describe('Positive #indexOf()', function() {
    it('should return 1 when the value is found at 1', function() {
      assert.equal([1,2,3].indexOf(2), 1);
    });
  });
});



describe('Bowling Game Test', function() {

	function rollMany(game, n, pins) {
		for(let i = 0; i < n; i++) {
			game.roll(pins);
		}
	}

	function rollSpare(game) {
    	game.roll(5);
    	game.roll(5);
	}

	function rollStrike(game) {
    	game.roll(10);
	}

    it('Get a gutter game', function() {
    	//console.log(Object.keys(Game));
    	let g = new Game();
    	rollMany(g, 20, 0);
    	assert.equal(g.score(), 0);
    });

    it('Get all one game', function() {
    	//console.log(Object.keys(Game));
    	let g = new Game();
    	rollMany(g, 20, 1);

    	assert.equal(g.score(), 20);
    });


    it('Test one spare', function() {
    	//console.log(Object.keys(Game));
    	let g = new Game();
    	rollSpare(g);
    	g.roll(3);
    	rollMany(g, 17, 0);

    	assert.equal(g.score(), 16);
    });

    it('Test one strike', function() {
    	//console.log(Object.keys(Game));
    	let g = new Game();
    	g.roll(10); // strike
    	g.roll(4);
    	g.roll(3);
    	rollMany(g, 16, 0);

    	assert.equal(g.score(), 24);
    });

	it('Perfect Game', function() {
    	//console.log(Object.keys(Game));
    	let g = new Game();
    	rollMany(g, 12, 10)
    	
    	assert.equal(g.score(), 300);
    });

});