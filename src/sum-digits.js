const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const stringed = n.toString();
  if (stringed.length === 1) {
    return n;
  }
  let sum = 0;
  for (let i = 0; i < stringed.length; i++) {
    sum += +stringed[i];
  }
  if (sum.toString().length > 1) {
    return getSumOfDigits(sum);
  }
  else return sum;
}

console.log(getSumOfDigits(91));
console.log(getSumOfDigits(901));
console.log(getSumOfDigits(5057));

module.exports = {
  getSumOfDigits
};
