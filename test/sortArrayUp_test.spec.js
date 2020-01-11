const {expect} = require('chai');


const {sortArrayUp} = require('../index.js');


describe('sortArrayUp_testing', () => {
  it('sortArrayUp_getCorrectResult', () => {
    expect(sortArrayUp([9, 6, 3, 1, 10, -5, -3])).deep.eq([-5, -3, 1, 3, 6, 9, 10]);
  });

  it('sortArrayUp_getCorrectResult', () => {
    expect(sortArrayUp([3, 2, 1, 0])).deep.eq([0, 1, 2, 3]);
  });
});
