let PrimeFactors = require("../app/primefactors.js").PrimeFactors
let assert = require('assert');

describe('Prime Factor Test', function() {


    it('First test. Test one', function() {
    	//console.log(Object.keys(Game));
        assert.deepEqual([], PrimeFactors.generate(1));
    });

    it('Second test. Test two', function() {
        //console.log(Object.keys(Game));
        assert.deepEqual([2], PrimeFactors.generate(2));
    });

    it('Third test. Test three', function() {
        //console.log(Object.keys(Game));
        assert.deepEqual([3], PrimeFactors.generate(3));
    });

    it('Fourth test. Test four', function() {
        //console.log(Object.keys(Game));
        assert.deepEqual([2,2], PrimeFactors.generate(4));
    });

    it('Fifth test. Test six', function() {
        //console.log(Object.keys(Game));
        assert.deepEqual([2,3], PrimeFactors.generate(6));
    });

    it('Sixth test. Test eight', function() {
        //console.log(Object.keys(Game));
        assert.deepEqual([2,2,2], PrimeFactors.generate(8));
    });

    it('Seventh test. Test nine', function() {
        //console.log(Object.keys(Game));
        assert.deepEqual([3,3], PrimeFactors.generate(9));
    });

    it('12', function() {
        //console.log(Object.keys(Game));
        assert.deepEqual([2,2,3], PrimeFactors.generate(12));
    });

});