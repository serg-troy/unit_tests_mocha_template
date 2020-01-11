const {expect} = require('chai');


const {isIntegerArray} = require('../index.js');


describe('isIntegerArray_worksCorrectly', () => {
  it('sortArrayUp_getCorrectResult', () => {
    expect(isIntegerArray([9, 6, 3, 1, 10, -5, -3])).true;
  });

  it('isIntegerArray_worksCorrectly', () => {
    expect(isIntegerArray([3, 2, 1, 0])).true;
  });

  it('sortArrayUp_getCorrectResult', () => {
    expect(isIntegerArray([0.5, 5, 'st', 13])).false;
  });

  it('isIntegerArray_stringArg_throwErr', () => {
    expect(isIntegerArray()).false;
  });
});