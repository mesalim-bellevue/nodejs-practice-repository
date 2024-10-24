/**
 * Author: Brandon Salvemini
 * Date: 22 October 2024
 * File: fahrenheit-to-celsius.js
 * Description: Script with function to convert from degrees fahrenheit to degrees celsius
 */
"use strict";

// Function to convert fahrenheit to celsius
function fahrenheitToCelsius(fahrenheitTemp) {
  // Formula: C = (°F - 32) ÷ 1.8
  // https://www.calculatorsoup.com/calculators/conversions/fahrenheit-to-celsius.php

  // If fahrenheitTemp is not a number, throw an error
  if (isNaN(fahrenheitTemp)) {
    // Throw an error with the message "Input must be a number"
    throw new Error("Input must be a number");
  }

  // Convert fahrenheit to celsius using the above formula
  let celsiusTemp = (fahrenheitTemp - 32) / 1.8;

  // If celsiusTemp is not an integer
  // This is used to check if the result is a decimal so it can be rounded if necessary
  if (!Number.isInteger(celsiusTemp)) {
    // celsiusTemp is not an Integer, so round it to 4 decimal places
    celsiusTemp = celsiusTemp.toFixed(4);

    // Convert celsiusTemp back to a number, because toFixed() converts it to a string
    // Test 2 would fail without this
    celsiusTemp = Number(celsiusTemp);
  }

  // Return the temperature in degrees celsius
  return celsiusTemp;
}

// export the fahrenheitToCelsius function using the module.exports object
module.exports = { fahrenheitToCelsius };
