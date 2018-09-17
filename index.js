// const randomNestedArray = {};

/**
 * Generate an array of length n filled with random numbers between 0 and 99.
 * @param {number} n max length of generated array
 * @returns {array} array of random elements between 0 and 99.
 */
const smallArrayGen = function smallArrayGen(max = 6) {
  let length = Math.floor(Math.random() * (max)) + 1;
  const result = [];
  while (length > 0) {
    result.push(Math.floor(Math.random() * 100));
    length -= 1;
  }
  return result;
};

/**
 * Creates a 2D array with the given number of elements each nested array is randomly generated
 * using smallArrayGen().
 * @param {number} n total number of randomly generated elements in the returned array.
 */
const bigArrayGen = function bigArrayGen(n = 30) {
  const result = [];
  let totalSize = n;

  while (totalSize > 0) {
    if (totalSize > 6) {
      result.push(smallArrayGen(6));
    } else {
      result.push(smallArrayGen(totalSize));
    }
    totalSize -= result[result.length - 1].length;
  }
  return result;
};

/**
 * Creates a randomly generated nested array using bigArrayGen(). Returns an array of equivalent
 * 'flattened' length. [1, [2, 3, [4]]] has four elements when flattened.
 * @param {number} n Total number of 'flat' elements in returned 2D array.
 */
module.exports = function generate(n = 30) {
  const store = bigArrayGen(n);
  const result = store.pop();
  let currentArray = result;

  while (store.length > 0) {
    const i = Math.floor(Math.random() * currentArray.length);
    if (Array.isArray(currentArray[i])) {
      currentArray = currentArray[i];
    } else {
      currentArray.splice(i, 0, store.pop());
      currentArray = result;
    }
  }
  return result;
};
