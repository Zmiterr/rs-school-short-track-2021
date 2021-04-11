/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new Error('Not implemented');
  const dnsList = {};
  domains.forEach((domain) => {
    const domainParts = domain.split('.');
    let domainPart = '';
    for (let i = domainParts.length - 1; i >= 0; i -= 1) {
      domainPart += `.${domainParts[i]}`;
      if (dnsList[domainPart]) dnsList[domainPart] += 1;
      else dnsList[domainPart] = 1;
    }
    domainPart = '';
  });

  return dnsList;
}

module.exports = getDNSStats;
