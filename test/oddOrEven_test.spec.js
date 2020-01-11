const {expect} = require('chai');


const {oddOrEven} = require('../index.js');


describe('isOddNumber_testing', () => {
  it('isOddNumber_28_isEven', () => {
    expect(oddOrEven(28)).eq( 'even');
  });

  it('isOddNumber_101_isOdd', () => {
    expect(oddOrEven(101)).eq('odd');
  });

  it('isOddNumber_123568_true', () => {
    expect(oddOrEven(123568)).eq('even');
  });

  it('isOddNumber_999999_true', () => {
    expect(oddOrEven(999999)).eq('odd');
  });
});
