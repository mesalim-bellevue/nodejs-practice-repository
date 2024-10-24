/**
 * Author: Bernice Templeman
 * Date: 23 October 2024
 * File: reverseString.spec.js
 * Description: This script tests the reverseString function.
 */
'use strict';

const { reverseString } = require('../../src/utils/reverseString'); // Import the reverseString function from the reverseString.js file

// The describe() function is a test suite that contains one or more tests
describe('reverseString.js', () => {

  // The it() function is a test spec that contains one or more expectations
  it('should reverse the string "evil"', () => {
    const result = reverseString("evil"); // Call the reverseString function with the value of "evil"
    expect(result).toBe("live"); // The expected result is "live"
  });

  // The it() function is a test spec that contains one or more expectations
  it('should return empty string', () => {
    const result = reverseString(""); // Call the reverseString function with the value of ""
    expect(result).toBe(""); // The expected result is ""
  });

  // The it() function is a test spec that contains one or more expectations
  it('should return string with spaces in it', () => {
    const result = reverseString("  testing with spaces . ");  // Call the returnString function with the value of ""
    expect(result).toBe(' . secaps htiw gnitset  '); // The expected result is ' . secaps htiw gnitset  '
  });
});