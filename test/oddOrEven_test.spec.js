const assert = require('assert');
const {oddOrEven} = require('../index.js');

describe('isOddNumber_testing', () => {
    it('isOddNumber_28_isEven', () => {
        assert.equal(oddOrEven(28), 'even');
    });

    it('isOddNumber_101_isOdd', () => {
        assert.equal(oddOrEven(101), 'odd');
    });

    it('isOddNumber_123568_true', () => {
        assert.equal(oddOrEven(123568), 'even');
    });

    it('isOddNumber_999999_true', () => {
        assert.equal(oddOrEven(999999), 'odd');
    });
});
