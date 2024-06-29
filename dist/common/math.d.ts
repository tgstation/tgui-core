/**
 * Limits a number to the range between 'min' and 'max'.
 */
export declare function clamp(value: any, min: any, max: any): any;
/**
 * Limits a number between 0 and 1.
 */
export declare function clamp01(value: any): any;
/**
 * Scales a number to fit into the range between min and max.
 */
export declare function scale(value: any, min: any, max: any): number;
/**
 * Robust number rounding, similar to PHP's round() function.
 *
 * @url https://stackoverflow.com/questions/53450248/how-to-round-in-javascript-like-php-do/54721202#54721202
 */
export declare function round(num: any, dec: any): number;
/**
 * Returns a string representing a number in fixed point notation.
 */
export declare function toFixed(value: any, fractionDigits?: number): string;
/**
 * Checks whether a value is within the provided range.
 *
 * Range is an array of two numbers, for example: [0, 15].
 */
export declare function inRange(value: any, range: any): any;
/**
 * Walks over the object with ranges, comparing value against every range,
 * and returns the key of the first matching range.
 *
 * Range is an array of two numbers, for example: [0, 15].
 */
export declare function keyOfMatchingRange(value: any, ranges: any): string | undefined;
/**
 * Get number of digits following the decimal point in a number
 */
export declare function numberOfDecimalDigits(value: any): any;
