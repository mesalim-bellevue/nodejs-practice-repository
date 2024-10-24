/**
 * Author: Leah Harris
 * Date: 22 October 2024
 * File: area-of-rectangle.js
 * Description: This script contains a function that calculates the area of a rectangle.
 */

'use strict';

//function to calculate the area of a rectangle
function areaOfRectangle(w, h) {

  //check if width is zero or less
  if (w <= 0) {
    throw new Error ('width cannot be 0 or less');

    //check if heigh is 0 or less
  } else if (h <= 0) {
    throw new Error('height cannot be 0 or less');

    //calculate the area
  } else {
    return w * h;
  }
}

//export areaOfRectangle function
module.exports = { areaOfRectangle };

