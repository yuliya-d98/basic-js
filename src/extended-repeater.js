import { NotImplementedError } from '../extensions/index.js';

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
 export default function repeater(str, options) {
  let addition1 =
    options.addition !== undefined ? String(options.addition) : "";
  let str2 = String(str);
  let separator = options.separator || "+"; 
  let additionSeparator = options.additionSeparator || "|"; 
  let additionRepeatTimes = options.additionRepeatTimes || 1; 
  let repeatTimes = options.repeatTimes || 1; 
  let array = [];
  let array2 = [];
  for (let i = 0; i < additionRepeatTimes; i++) {
    array.push(addition1);
  }
  let miniString = array.join(additionSeparator);
  let miniStr = str2 + miniString;
  for (let i = 0; i < repeatTimes; i++) {
    array2.push(miniStr);
  }

  let result = array2.join(separator);
  return result;
}
