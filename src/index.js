/**
 * Author: Professor Krasso
 * Date: 13 September 2024
 * File: index.js
 * Description: This script is the main entry point for the utils
 */

// Import the factorial function from the factorial.js file
const { factorial } = require('./utils/factorial');

// Import the reverseString function from the reverseStringjs file
const { reverseString } = require('./utils/reverseString');

// The main() function calculates the factorial of 5 and logs the result to the console
// and reverse  the string "evil" and logs the result to the console.
async function main () {
  const result = factorial(5); // Call the factorial function with the value of 5
  console.log('factorial of 5 is', result); // Log the result to the console

  const reversedStr = reverseString("evil"); // Call the reverseString function with the value of evil
  console.log('the reversed string of "evil" is: ', reversedStr); // Log the result to the console
}

main(); // Call the main function to calculate the factorial of 5 and reverse the string "evil"