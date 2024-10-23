/**
 * Author: Leah Harris
 * Date: 22 October 2024
 * File: index.js
 */

//Import the areaOfRectangle function
const { areaOfRectangle } = require('./utils/area-of-rectangle');

//main function to calculate the area of a 5 by 10 rectangle
async function main () {
  const result = areaOfRectangle(5, 10);
  //Log the results in the console
  console.log('The area of a 5 by 10 rectangle is', result);
}

//Call the main function
main();