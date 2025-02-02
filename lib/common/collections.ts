type Zip<T extends unknown[][]> = {
  [K in keyof T]: T[K] extends (infer U)[] ? U : never;
}[];

/**
 * Creates an array of grouped elements, the first of which contains
 * the first elements of the given arrays, the second of which contains
 * the second elements of the given arrays, and so on.
 */
export function zip<T extends unknown[][]>(...arr: T): Zip<T> {
  return Array(Math.max(...arr.map((a) => a.length)))
    .fill(undefined)
    .map((_, i) => arr.map((a) => a[i])) as Zip<T>;
}

/**
 * Helper function for string compares with native sorts
 * @param a first string to compare
 * @param b secon string to compare
 * @returns -1 for a < b, 1 for a > b and 0 otherwise
 */
export function stringCompare(a: string, b: string) {
  return a < b ? -1 : a > b ? 1 : 0;
}
