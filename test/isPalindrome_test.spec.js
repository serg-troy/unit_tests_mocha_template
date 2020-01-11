const {expect} = require('chai');


const {isPalindrome} = require('../index.js');


describe('isPalindrome_testing', () => {
  it('isPalindrome_og_False', () => {
    expect(isPalindrome('og')).false;
  });

  it('isPalindrome_ogo_True', () => {
    expect(isPalindrome('ogo')).true;
  });

  it('isPalindrome_axaAXAaXa_True', () => {
    expect(isPalindrome('axaAXAaXa')).true;
  });
});
