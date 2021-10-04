import { NotImplementedError } from '../extensions/index.js';

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
 export default function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let name = '';
  members = members.sort();
  for (let i = 0; i < members.length; i += 1) {
    if(typeof(members[i]) === 'string') {
      name += members[i].trimStart().slice(0, 1);
    }
  }
  name = name.toUpperCase().split('').sort().join('');
  return name;
};
