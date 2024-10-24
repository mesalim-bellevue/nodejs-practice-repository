/**
 * Author: Leah Harris
 * Date: 22 October 2024
 * File: area-of-rectangle.spec.js
 * Description: This file contains three unit tests for the areaOfRectangle function
 */

'use strict';

//Import the areaOfRectangle function from the area-of-rectangle.js file
const { areaOfRectangle } = require('../src/utils/area-of-rectangle');

//Test suite containing unit tests for the areaOfRectangle function
describe('area-of-rectangle.js', () => {

  //test if error is thrown for a problematic width
  it('should throw an error for an incorrect width', () => {
    expect(() => areaOfRectangle(0, 21)).toThrow('width cannot be 0 or less');
  });

  //test if error is thrown for problematic height
  it('should throw an error for an incorrect height', () => {
    expect(() => areaOfRectangle(34, -32)).toThrow('height cannot be 0 or less');
  });

  //test if function calculates the area correctly
  it('should calculate the area of a rectangle correctly', () => {
    const result = areaOfRectangle(30, 2);
    expect(result).toBe(60);
  });
})