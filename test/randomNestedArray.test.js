const { expect } = require('chai');
const rewire = require('rewire');
const rna = require('../index');
const { flattenDeep } = require('../utils/helpers');

const helpers = rewire('../');
const smallArrayGen = helpers.__get__('smallArrayGen');
const bigArrayGen = helpers.__get__('bigArrayGen');

describe('Nested Array generator', () => {
  describe('smallArrayGen', () => {
    it('Should return an array of random length of random numbers', () => {
      expect(smallArrayGen()).to.be.an('array');
      expect(smallArrayGen().every(e => typeof e === 'number')).to.equal(true);
    });
  });

  describe('bigArrayGen', () => {
    it('Should return an array of arrays using smallArrayGen with the given number of elements', () => {
      expect(bigArrayGen(30)).to.be.an('array');
      expect(bigArrayGen().every(e => Array.isArray(e))).to.equal(true);
      expect(flattenDeep(bigArrayGen(30))).to.have.length(30);
    });
  });

  describe('generate', () => {
    it('Should return an array of using bigArrayGen', () => {
      expect(rna(30)).to.be.an('array');
      expect(flattenDeep(rna(60))).to.have.length(60);
    });
  });
});
