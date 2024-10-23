/**
 * Author: Bernice Templeman
 * Date: 23 October 2024
 * File: reverseString.js
 * Description: This script reverses a string
 */
'use strict';

// The reverseString function reverses a string
function reverseString(str) {

  // Split the string into an array, use JavaScript's builtin reverse, then join into a string
  return str.split("").reverse().join("");

}

module.exports = { reverseString }; // Export the reverseString function for use in other scripts