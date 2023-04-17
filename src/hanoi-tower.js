const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const turns = Math.pow(2, disksNumber) - 1; // num of turns
  const seconds = Math.floor(turns / (turnsSpeed / 3600)); // time s
  console.log({ turns, seconds });
  return { turns, seconds };
}
calculateHanoi(5, 4074)
calculateHanoi(15, 5000)
calculateHanoi(7, 3000)
calculateHanoi(28, 500)

module.exports = {
  calculateHanoi
};
