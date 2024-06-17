/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
/**
 * Limits a number to the range between 'min' and 'max'.
 */
export declare const clamp: (value: any, min: any, max: any) => any;
/**
 * Limits a number between 0 and 1.
 */
export declare const clamp01: (value: any) => any;
/**
 * Scales a number to fit into the range between min and max.
 */
export declare const scale: (value: any, min: any, max: any) => number;
/**
 * Robust number rounding.
 *
 * Adapted from Locutus, see: http://locutus.io/php/math/round/
 *
 * @param  {number} value
 * @param  {number} precision
 * @return {number}
 */
export declare const round: (value: any, precision: any) => any;
/**
 * Returns a string representing a number in fixed point notation.
 */
export declare const toFixed: (value: any, fractionDigits?: number) => string;
/**
 * Checks whether a value is within the provided range.
 *
 * Range is an array of two numbers, for example: [0, 15].
 */
export declare const inRange: (value: any, range: any) => any;
/**
 * Walks over the object with ranges, comparing value against every range,
 * and returns the key of the first matching range.
 *
 * Range is an array of two numbers, for example: [0, 15].
 */
export declare const keyOfMatchingRange: (value: any, ranges: any) => string | undefined;
/**
 * Get number of digits following the decimal point in a number
 */
export declare const numberOfDecimalDigits: (value: any) => any;
