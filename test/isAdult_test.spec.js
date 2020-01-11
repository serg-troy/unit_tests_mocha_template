const {expect} = require('chai');


const {isAdult} = require('../index.js');


describe('isAdult_testing', () => {
  it('isAdult_AgeLessThan18_False', () => {
    expect(isAdult(17)).false;
  });

  it('isAdult_AgeMoreThan17_True', () => {
    expect(isAdult(18)).true;
  });

  it('isAdult_AgeLessThan0_checkTheAge', () => {
    expect(isAdult(-7)).to.be.eq('Check the age!');
  });
});
