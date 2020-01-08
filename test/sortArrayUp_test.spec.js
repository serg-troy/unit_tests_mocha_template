const assert = require('assert');
const {sortArrayUp} = require('../index.js');

describe('sortArrayUp_testing', () => {
    it('sortArrayUp_getCorrectResult', () => {
        assert.deepEqual(sortArrayUp([9, 6, 3, 1, 10, -5, -3]), [-5, -3, 1, 3, 6, 9, 10]);
    });

    it('sortArrayUp_getCorrectResult', () => {
        assert.deepEqual(sortArrayUp([3, 2, 1, 0]), [0, 1, 2, 3]);
    });
});
