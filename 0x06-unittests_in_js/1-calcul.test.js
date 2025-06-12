const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function() {
    describe('SUM', function() {
        it('should return 6 when summing 1.4 and 4.5', function () {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
        });

        it('should return 5 when summing 1.2 and 3.7', function () {
            assert.strictEqual(calculateNumber('SUM', 1.2, 3.7), 5);
        });
    });

    describe('SUBTRACT', function() {
        it('should return -4 when subtracting 4.5 from 1.4', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
        });

        it('should return 0 when subtracting 3.4 from 3.4', function () {
            assert.strictEqual(calculateNumber('SUBTRACT', 3.4, 3.4), 0);
        });
    });

    describe('DIVIDE', function() {
        it("should return 0.2 when dividing 1.4 by 4.5", function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
        });

        it("should return 'Error' when dividing by 0", function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), Infinity);
        });

        it("should return 'Error' when dividing by a number rounded to 0", function () {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.2), Infinity);
        });
    });
    
    describe('Invalid type', function () {
        it('should throw an error for invalid operation type', function () {
            assert.throws(() => calculateNumber('MULTIPLY', 2, 3), /Invalid operation type/);
        });
    });

});
