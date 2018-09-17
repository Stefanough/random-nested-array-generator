/**
 * Flattens an arbitrarily deep nested array recursively.
 * @param {array} array Nested array to flatten deeply.
 * @returns {array} Flat array.
 */
function flattenDeep(array) {
  if (array.length === 0) {
    return [];
  }
  let x = array.shift();
  if (Array.isArray(x)) {
    x = flattenDeep(x);
  } else {
    x = [x];
  }
  return x.concat(flattenDeep(array));
}

module.exports = { flattenDeep };
