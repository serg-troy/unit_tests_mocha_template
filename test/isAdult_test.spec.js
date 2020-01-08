const assert = require('assert');
const {isAdult} = require('../index.js');

describe('isAdult_testing', () => {
    it('isAdult_AgeLessThan18_False', () => {
        assert.equal(isAdult(17), false);
    });

    it('isAdult_AgeMoreThan17_True', () => {
        assert.equal(isAdult(18), true)
    });

    it('isAdult_AgeLessThan0_Null', () => {
        assert.equal(isAdult(-7), null)
    });
})
