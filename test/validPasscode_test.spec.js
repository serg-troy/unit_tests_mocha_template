const {expect} = require('chai');


const {validPasscode} = require('../index.js');


describe('validPasscode_testing', () => {
  it('validPasscode_9119_true', () => {
    expect(validPasscode('9119')).true;
  });

  it('validPasscode_100000_true', () => {
    expect(validPasscode('100000')).true;
  });

  it('validPasscode_8z11119_false', () => {
    expect(validPasscode('8z11119')).false;
  });

  it('validPasscode_empty_false', () => {
    expect(validPasscode()).false;
  });
});
