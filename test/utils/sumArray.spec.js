/**
 * Author: Nadia
 * Date: 10/22/24
 * File: sum-of-array.spec.js
 * Description: This script tests the sum array function
 */
'use strict';

const sumArray = require('../../src/utils/sumArray');

describe('sumArray', () => {
    test('sums an array of positive numbers', () => {
        expect(sumArray([1, 2, 3, 4, 5])).toBe(15);
    });

    test('sums an empty array', () => {
        expect(sumArray([])).toBe(0);
    });

    test('sums an array with negative numbers', () => {
        expect(sumArray([-1, -2, -3])).toBe(-6);
    });
});