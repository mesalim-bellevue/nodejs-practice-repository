/**
 * Author: Sheldon Skaggs
 * Date: 23 October 2024
 * File: array-max-value.js
 * Description: This script holds the getArrayMaxValue function that will find the maximum value in an array
 */
'use strict';

// The getArrayMaxValue function returns the maximum value in an array
function getArrayMaxValue(anArray) {
  // Declare variables
  var maxValue = null; // Holds the current maximum value in the array

  // Using Array, determine if anArray is an array
  if(!Array.isArray(anArray)) {
    throw new Error('The provided parameter is not an array.');
  }

  // Use the Array.forEach method to cycle through the array and find the maximum value
  anArray.forEach((arrayItem) => {
    // Check if the arrayItem is a number
    if(!isNaN(arrayItem) && typeof arrayItem !== "string") {
      // determine maximum value
      if(arrayItem > maxValue) {
        maxValue = arrayItem;
      }
    }
  });

  // Return max value if it is a number
  if(typeof maxValue === "number") {
    return maxValue;
  } else {
    // Throw an error
    throw new Error('The provided array does not contain a number.');
  }
}

// Export the getArrayMaxValue function to be used elsewhere
module.exports = { getArrayMaxValue };