/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the  retSummult should be 1 (1 + 0 + 0 = 1)
 * For 91, the  retSummult should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  // throw new Error('Not implemented');
  let retSumm = n;
  if (retSumm / 10 < 1) return retSumm;
  retSumm = String(retSumm).split('').reduce((summ, e) => +summ + +e);
  return getSumOfDigits(retSumm);
}

module.exports = getSumOfDigits;
