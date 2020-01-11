const {expect} = require('chai');


const {permuteAPalindrome} = require('../index.js');


describe('purmuteAPalindrome_FunctionTesting', () => {
  it('inputString_CanComprisePalindrome_false', () => {
    expect(permuteAPalindrome('ahghghghgjkkkdllops')).false;
  });

  it('inputString_CanComprisePalindrome_true', () => {
    expect(permuteAPalindrome('ogoggooggoo')).true;
  });

  it('inputString_CanComprisePalindrome_true', () => {
    expect(permuteAPalindrome('911')).true;
  });

  it('inputString_CanComprisePalindrome_false', () => {
    expect(permuteAPalindrome('sergey')).false;
  });
});
