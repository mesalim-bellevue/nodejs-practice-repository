/**
 * Author: Nadia
 * Date: 10/22/24
 * File: sum-of-array.js
 * Description: Function for calculating sum of an array
 */

// sumArray.js
function sumArray(arr) {
  return arr.reduce((acc, num) => acc + num, 0);
}

module.exports = sumArray; 

