/**
 * Returns random number between lowerBound exclusive and upperBound inclusive
 */
export declare function randomNumber(lowerBound: number, upperBound: number): number;
/**
 * Returns random integer between lowerBound exclusive and upperBound inclusive
 */
export declare function randomInteger(lowerBound: number, upperBound: number): number;
/**
 * Returns random array element
 */
export declare function randomPick<T>(array: T[]): T;
/**
 * Return 1 with probability P percent; otherwise 0
 */
export declare function randomProb(probability: number): boolean;
