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


it('mult_10by5_equals50', () => {
    expect(mult(10, 5)).to.eq(50);
});
