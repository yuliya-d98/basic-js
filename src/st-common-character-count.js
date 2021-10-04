import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 export default function getCommonCharacterCount(s1, s2) {
  s1 = s1.split('')
  s2 = s2.split('').sort();
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
      if (s1.includes(s2[i]) && s2.includes(s1[i])) {
        count += 1; 
      } 
  }  
  return count; 
}
