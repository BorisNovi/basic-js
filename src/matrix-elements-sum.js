const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;

  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      if (i === 0 || matrix[i - 1][j] !== 0) {
        sum += matrix[i][j];
      }
    }
  }
  console.log(matrix, 'after 0 = ', sum);
  return sum;
}


getMatrixElementsSum([
  [0, 1, 1, 2],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
]); // return 9

getMatrixElementsSum([
    [1, 2, 3, 4],
    [0, 5, 0, 0],
    [2, 0, 3, 3],
  ]); // return 15

  getMatrixElementsSum([
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
  ]); // return 18

  getMatrixElementsSum([
    [0],
  ]); // return 0

  getMatrixElementsSum([
    [1],
    [5],
    [0],
    [2],
  ]); // return 6

module.exports = {
  getMatrixElementsSum
};
