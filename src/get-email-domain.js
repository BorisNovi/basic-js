const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let dogInd = 0;
  for (let i = email.length - 1; i >= 0; i--) {
    if (email[i] === '@') {
      dogInd = i + 1;
      break;
    }
  }
  console.log(email.slice(dogInd, email.length));
  return email.slice(dogInd, email.length)
}


getEmailDomain('prettyandsimple@example.com')
getEmailDomain('someaddress@caves.ru') // кавес
getEmailDomain('very.unusual.@.unusual.com@usual.com')

module.exports = {
  getEmailDomain
};
