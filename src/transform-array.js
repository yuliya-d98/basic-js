import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 export default function transform(arr) {
  if (Array.isArray(arr)) {
    let arr2 = [];
    for (let i of arr) {
      arr2.push(i);
    }
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] == "--discard-next") {
        arr2[i + 1] == undefined ? arr2.splice(i, 1) : arr2.splice(i, 2);
      }
      if (arr2[i] == "--discard-prev") {
        arr2[i - 1] == undefined || typeof arr[i - 2] == "number"
          ? arr2.splice(i, 1)
          : arr2.splice(i - 1, 2);
      }
      if (arr2[i] == "--double-next") {
        arr2[i + 1] == undefined
          ? arr2.splice(i, 1)
          : (arr2[i] = arr2[i + 1]);
      }
      if (arr2[i] == "--double-prev") {
        arr2[i - 1] == undefined || typeof arr[i - 2] == "number"
          ? arr2.splice(i, 1)
          : (arr2[i] = arr2[i - 1]);
      }
    }
    return arr2;
  }
  throw new Error("'arr' parameter must be an instance of the Array!");
}
import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 export default function transform(arr) {
  if (Array.isArray(arr)) {
    let arr2 = [];
    for (let i of arr) {
      arr2.push(i);
    }
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] == "--discard-next") {
        arr2[i + 1] == undefined ? arr2.splice(i, 1) : arr2.splice(i, 2);
      }
      if (arr2[i] == "--discard-prev") {
        arr2[i - 1] == undefined || typeof arr[i - 2] == "number"
          ? arr2.splice(i, 1)
          : arr2.splice(i - 1, 2);
      }
      if (arr2[i] == "--double-next") {
        arr2[i + 1] == undefined
          ? arr2.splice(i, 1)
          : (arr2[i] = arr2[i + 1]);
      }
      if (arr2[i] == "--double-prev") {
        arr2[i - 1] == undefined || typeof arr[i - 2] == "number"
          ? arr2.splice(i, 1)
          : (arr2[i] = arr2[i - 1]);
      }
    }
    return arr2;
  }
  throw new Error("'arr' parameter must be an instance of the Array!");
}
