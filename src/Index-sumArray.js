/**
 * Author: Professor Krasso
 * Date: 13 September 2024
 * File: index.js
 * Description: This script is the main entry point for the
 */

// Import the sumArray function
const sumArray = require('./sumArray'); 

// Example usage of the sumArray function
const numbers1 = [1, 2, 3, 4, 5];
const result1 = sumArray(numbers1);
console.log(`The sum of [${numbers1.join(', ')}] is ${result1}.`); // Output: The sum of [1, 2, 3, 4, 5] is 15.

// Another example
const numbers2 = [-1, -2, -3, 4];
const result2 = sumArray(numbers2);
console.log(`The sum of [${numbers2.join(', ')}] is ${result2}.`); // Output: The sum of [-1, -2, -3, 4] is -2.

// You can add more examples as needed
const numbers3 = [];
const result3 = sumArray(numbers3);
console.log(`The sum of [${numbers3.join(', ')}] is ${result3}.`); // Output: The sum of [] is 0.
