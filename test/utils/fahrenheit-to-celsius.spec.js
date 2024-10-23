/**
 * Author: Brandon Salvemini
 * Date: 22 October 2024
 * File: fahrenheit-to-celsius.spec.js
 * Description: Tests for the fahrenheitToCelsius function
 */
"use strict";

const {
  fahrenheitToCelsius,
} = require("../../src/utils/fahrenheit-to-celsius"); // Import the fahrenheitToCelsius function from the
// fahrenheit-to-celsius.spec.js file

describe("fahrenheit-to-celsius.js", () => {
  it("should convert fahrenheit to celsius correctly", () => {
    const result = fahrenheitToCelsius(212); // Call the fahrenheitToCelsius function with a value of 212
    expect(result).toBe(100); // The result is expected to be 100
  });

  it("should round to four decimal places when the result is not a whole number", () => {
    const result = fahrenheitToCelsius(100); // Call the fahrenheitToCelsius function with a value of 100
    expect(result).toBe(37.7778); // The result is expected to be 37.7778
  });

  it("should throw an error if a non-numerical value is used", () => {
    // Call the fahrenheitToCelsius function with the value of "ten" and expect it to throw an error
    expect(() => fahrenheitToCelsius("ten").toThrow("Input must be a number"));
  });
});
