/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // throw new Error('Not implemented');
  const specArr = [];
  arr.forEach((e) => {
    if (e !== -1) specArr.push(e);
  });

  specArr.sort((a, b) => b - a);

  return arr.map((e) => ((e === -1) ? e : specArr.pop()));
}

module.exports = sortByHeight;
