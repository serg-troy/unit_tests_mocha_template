const {expect} = require('chai');


const {removeDuplicates} = require('../index.js');


describe('removeDuplicates_testing', () => {
  it('removeDuplicates_worksCorrectly', () => {
    expect(removeDuplicates([9, 6, 3, 1, 10, -5, -3, 9, 6, 1])).deep.eq([9, 6, 3, 1, 10, -5, -3]);
  });
    
  it('removeDuplicates_worksCorrectly', () => {
    expect(removeDuplicates([9, 6, 3, 1, 10, -5, -3, 9, 6, 1])).not.deep.eq([9, 6, 3, 1, 10, -5, -3, 9, 6, 1]);
  });

  it('removeDuplicates_worksCorrectly', () => {
    expect(removeDuplicates([0, 1, 0, 1, 0, 1, 0, 1])).deep.eq([0, 1]);
  });

  it('removeDuplicates_worksCorrectly', () => {
    expect(removeDuplicates([0, 0, 0, 0, 0, 0, 7])).deep.eq([0, 7]);
  });
});
