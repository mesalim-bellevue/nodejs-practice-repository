/**
 * Author: Kylie Struhs
 * Date: October 23 2024
 * File: palindrome.spec.js
 * Description: this file tests the isPalindrome function
 */
"use strict";

const {isPalindrome} = require('../../src/utils/palindrome') // import the isPalindrome function from palindrome.js

describe('palindrome.js', () => {
  // call the function with a null value and see if it stops it
  it('Should catch when length of string is 0', () => {
    const result = isPalindrome('');
    expect (result).toBe('Please enter a word');
  });
  // call the function with a string with a length less than 3 and see if it stops it
  it('Should catch a word less than three letters', () => {
    const result = isPalindrome('hi');
    expect (result).toBe('Palindromes need to be 3 or more letters');
  });
  // call the function with a value of 'hannah' and see if it correctly identifies it as a palindrome
  it('Should correctly identify a palindrome', () => {
    const result = isPalindrome('hannah');
    expect (result).toBe('Your word hannah is a palindrome')
  });
});
