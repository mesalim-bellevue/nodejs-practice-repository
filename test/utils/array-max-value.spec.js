/**
 * Author: Sheldon Skaggs
 * Date: 23 October 2024
 * File: array-max-value.spec.js
 * Description: This script tests .getArrayMaxValue function in array-max-value.js
 */
'use strict';

// Import the getArrayMaxValue from array-m
const { getArrayMaxValue } = require('../../src/utils/array-max-value');

// Create a test suite for array-max-value.js file
describe('array-max-value.js', () => {

  // The method should thrown an error if the parameter is not an array
  it('should throw an error when an array is not supplied', () => {
    // Call the getArrayMaxValue function without and expect an error
    expect(() => getArrayMaxValue(1)).toThrow('The provided parameter is not an array.');
  });

  // The method should thrown an error if the array does not contain a number
  it('should throw an error when an array has no numbers', () => {
    // Create an array with no numbers
    const badArray = ['One', 'Two', 'Three'];

    // Call the getArrayMaxValue function with the badArray and expect an error
    expect(() => getArrayMaxValue(badArray)).toThrow('The provided array does not contain a number.');
  });

  // The method should return the maximum value
  it('should return the maximum value from the array', () => {
    // Create an array of numbers
    const numberArray = [1, 20, 3, 4, 5];

    // Call the getArrayMaxValue function with the numberArray
    const result = getArrayMaxValue(numberArray);

    // Expect the result to be 20
    expect(result).toBe(20);
  });

  // The method should return the maximum value from a mixed array
  it('should return the maximum value from a mixed array', () => {
    // Create an array of numbers
    const mixedArray = ['One', 20, '1000', 4, 5];

    // Call the getArrayMaxValue function with the numberArray
    const result = getArrayMaxValue(mixedArray);

    // Expect the result to be 20
    expect(result).toBe(20);
  });
});