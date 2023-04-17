const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  let additionStr = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  let repeatedStr = (str + additionStr + separator).repeat(repeatTimes - 1) + str + additionStr;

  console.log(repeatedStr);
  return repeatedStr;
}
repeater('la', { repeatTimes: 3, separator: 's', addition: '+', additionRepeatTimes: 1 });
repeater('TESTstr', { separator: 'ds', addition: 'ADD!', additionSeparator: ')))000' });

module.exports = {
  repeater
};
