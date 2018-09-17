const { expect } = require('chai');
const sinon = require('sinon');
const rna = require('../index');
const { flattenDeep } = require('../utils/helpers');

describe('Nested Array generator', () => {
  describe('Unit tests', () => {
    describe('smallArrayGen', () => {
      it('Should return an array of random length of random numbers', () => {
        expect(rna.smallArrayGen()).to.be.an('array');
        expect(rna.smallArrayGen().every(e => typeof e === 'number')).to.equal(true);
      });
    });

    describe('bigArrayGen', () => {
      it('Should return an array of arrays using smallArrayGen with the given number of elements', () => {
        const spy = sinon.spy(rna, 'smallArrayGen');
        expect(rna.bigArrayGen(30)).to.be.an('array');
        expect(rna.bigArrayGen().every(e => Array.isArray(e))).to.equal(true);
        expect(flattenDeep(rna.bigArrayGen(30))).to.have.length(30);
        expect(spy.called).to.equal(true);
        rna.smallArrayGen.restore();
      });
    });

    describe('generate', () => {
      it('Should return an array of using bigArrayGen', () => {
        const spy = sinon.spy(rna, 'bigArrayGen');
        expect(rna.generate(30)).to.be.an('array');
        expect(flattenDeep(rna.generate(60))).to.have.length(60);
        expect(spy.called).to.equal(true);
        rna.bigArrayGen.restore();
      });
    });
  });
});
