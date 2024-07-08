/**
 * Limits a number to the range between 'min' and 'max'.
 */
export declare function clamp(value: number, min: number, max: number): number;
/**
 * Limits a number between 0 and 1.
 */
export declare function clamp01(value: number): number;
/**
 * Scales a number to fit into the range between min and max.
 */
export declare function scale(value: number, min?: number, max?: number): number;
/**
 * Robust number rounding, similar to PHP's round() function.
 *
 * @url https://stackoverflow.com/questions/53450248/how-to-round-in-javascript-like-php-do/54721202#54721202
 */
export declare function round(num: number, dec: number): number;
/**
 * Returns a string representing a number in fixed point notation.
 */
export declare function toFixed(value: number, fractionDigits?: number): string;
/**
 * Checks whether a value is within the provided range.
 *
 * Range is an array of two numbers, for example: [0, 15].
 */
export declare function inRange(value: number, range: number[]): boolean;
/**
 * Walks over the object with ranges, comparing value against every range,
 * and returns the key of the first matching range.
 *
 * Range is an array of two numbers, for example: [0, 15].
 */
export declare function keyOfMatchingRange(value: number, ranges: Record<string, any>): string | undefined;
/**
 * Get number of digits following the decimal point in a number
 */
export declare function numberOfDecimalDigits(value: number): number;
