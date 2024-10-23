/**
 * Author: Kylie Struhs
 * Date: 23 October 2024
 * File: palindrome.js
 * Description: This file determines if a word is a palindrome
 */

"use strict";

// The isPalindrome function will determine if a word is a palindrome

function isPalindrome(n) {
  // check if a word has been entered
  if (n.length === 0) {
    return "Please enter a word";

    // check if a word is long enough to be a palindrome
  } else if (n.length === 1 || n.length === 2) {
    return "Palindromes need to be 3 or more letters";

    // word is three letters or more and can be a palindrome
  } else {
    function reverseString(n) {
      // split the string into an array of letters
      let splitString = n.split("");
      // reverse the array
      let reverseArray = splitString.reverse();
      // join the reversed array together
      let joinArray = reverseArray.join("");
      return joinArray;
    }
    let reversed = reverseString(n);
    // compare reversed string to original string
    if (reversed === n) {
      return `Your word ${n} is a palindrome`;
    } else {
      return "Your word is not a palindrome";
    }
  }
}

module.exports = { isPalindrome};
