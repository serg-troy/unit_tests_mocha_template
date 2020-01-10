const {expect} = require('chai');


const {sum, mult} = require('../index.js');


describe('sum_Testing', () => {
    it('sum_2+3_equals5', () => {
        expect(sum(2, 3)).to.eq(5);
    });

    it('sum_2+3_notEquals6', () => {
        expect(sum(2, 3)).not.to.eq(6);
    });
});

describe('mult_testing', () => {
    it('mult_10by5_equals50', () => {
        expect(mult(10, 5)).to.eq(50);
    });

    it('mult_0by1_notEquals1', () => {
        expect(mult(0, 1)).not.to.eq(1);
    });
});
