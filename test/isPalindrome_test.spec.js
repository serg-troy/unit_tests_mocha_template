const assert = require('assert');
const {isPalindrome} = require('../index.js');

describe('isPalindrome_testing', () => {
    it('isPalindrome_og_False', () => {
        assert.equal(isPalindrome('og'), false);
    });

    it('isPalindrome_ogo_True', () => {
        assert.equal(isPalindrome('ogo'), true)
    });

    it('isPalindrome_axaAXAaXa_True', () => {
        assert.equal(isPalindrome('axaAXAaXa'), true)
    });
})
