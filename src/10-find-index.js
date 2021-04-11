/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  // throw new Error('Not implemented');
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
    if (array[array.length - 1 - i] === value) {
      return array.length - 1 - i;
    }
  }
  return undefined;
}

module.exports = findIndex;
