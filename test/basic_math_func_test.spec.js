const assert = require('assert');
const {sum, mult} = require('../index.js');

describe('function sum', () => {
    it('sum 2 and 3 should equal 5', () => {
        assert.equal(sum(2, 3), 5);
    });

    it('sum 2 and 3 should not equal 5', () => {
        assert.notEqual(sum(2, 3), 0)
    });
})


it('multiplication should work correctly', () => {
    assert.equal(mult(10, 5), 50);
});
