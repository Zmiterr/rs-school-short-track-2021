/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new Error('Not implemented');
  const numArr = String(n).split('');
  const minNum = String(n).split('').sort((a, b) => a - b)[0];
  for (let i = numArr.length; i >= 0; i--) {
    if (numArr[i] === minNum) {
      numArr.splice(i, 1);
      break;
    }
  }
  return +numArr.join('');
}

module.exports = deleteDigit;
