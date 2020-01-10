const {expect} = require('chai');


const {mostValChar} = require('../index.js');

describe('mostValChar_testing', () => {
    it('mostValChar_bioooooffb_b', () => {
        expect(mostValChar('bioooooffb')).eq('b');
    });

    it('mostValChar_bioooooffb_not_o', () => {
        expect(mostValChar('bioooooffb')).not.eq('o');
    });

    it('mostValChar_nomenclature_e', () => {
        expect(mostValChar('nomenclature')).eq('e');
    });

    it('mostValChar_alibaba_a', () => {
        expect(mostValChar('alibaba')).eq('a');
    });
});

