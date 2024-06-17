/**
 * Returns random number between lowerBound exclusive and upperBound inclusive
 */
export declare const randomNumber: (lowerBound: number, upperBound: number) => number;
/**
 * Returns random integer between lowerBound exclusive and upperBound inclusive
 */
export declare const randomInteger: (lowerBound: number, upperBound: number) => number;
/**
 * Returns random array element
 */
export declare const randomPick: <T>(array: T[]) => T;
/**
 * Return 1 with probability P percent; otherwise 0
 */
export declare const randomProb: (probability: number) => boolean;
