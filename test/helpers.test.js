const { expect } = require('chai');
const { flattenDeep } = require('../utils/helpers');

describe('flattenDeep', () => {
  it('works an empty array', () => {
    const a = flattenDeep([]);
    expect(a).to.be.an('array');
    expect(JSON.stringify(a)).to.equal(JSON.stringify([]));
  });

  it('returns a new flat array when given a flat array', () => {
    expect(JSON.stringify(flattenDeep([1, 2]))).to.equal(JSON.stringify([1, 2]));
  });

  it('returns undefined when given a non-array', () => {
    expect(flattenDeep('x')).to.be.undefined;
    expect(flattenDeep({})).to.be.undefined;
    expect(flattenDeep(3)).to.be.undefined;
    expect(flattenDeep(() => {})).to.be.undefined;
  });

  it('returns a flat array', () => {

  });

  it('takes a nested array and returns a flat array', () => {
    expect(JSON.stringify(flattenDeep([1, [2, [3], 4]]))).to.equal(JSON.stringify([1, 2, 3, 4]));
  });
});
