/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new Error('Not implemented');
  const arrS1 = s1.split('');
  const arrS2 = s2.split('');
  let count = 0;
  for (let i = 0; i < arrS1.length; i++) {
    if (arrS2.indexOf(arrS1[i]) >= 0) {
      arrS2.splice(arrS2.indexOf(arrS1[i]), 1);
      count++;
    }
  }
  return count;
}

module.exports = getCommonCharacterCount;
