type Zip<T extends unknown[][]> = {
    [K in keyof T]: T[K] extends (infer U)[] ? U : never;
}[];
/**
 * Creates an array of grouped elements, the first of which contains
 * the first elements of the given arrays, the second of which contains
 * the second elements of the given arrays, and so on.
 */
export declare function zip<T extends unknown[][]>(...arr: T): Zip<T>;
/**
 * Helper function for string compares with native sorts
 * @param a first string to compare
 * @param b second string to compare
 * @returns -1 for a < b, 1 for a > b and 0 otherwise
 */
export declare function stringCompare(a: string, b: string): 0 | 1 | -1;
export {};
