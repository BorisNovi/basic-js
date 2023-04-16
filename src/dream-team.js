const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const temp = [];
  if (!members) {
    return false;
  }
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      for (let member of members) {
        if (typeof member === 'string') {
          let trimmed = member.trim();
          temp.push(trimmed[0].toUpperCase())
        }
      }
      return temp.sort().join('');
    }
  }
  return false;
}

createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']);
createDreamTeam(['olivia', 1111, 'Lily', 'Oscar', true, null]);

module.exports = {
  createDreamTeam
};
