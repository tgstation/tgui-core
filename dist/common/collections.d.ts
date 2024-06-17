/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
/**
 * Iterates over elements of collection, returning an array of all elements
 * iteratee returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * If collection is 'null' or 'undefined', it will be returned "as is"
 * without emitting any errors (which can be useful in some cases).
 */
export declare const filter: <T>(collection: T[], iterateeFn: (input: T, index: number, collection: T[]) => boolean) => T[];
type MapFunction = {
    <T, U>(collection: T[], iterateeFn: (value: T, index: number, collection: T[]) => U): U[];
    <T, U, K extends string | number>(collection: Record<K, T>, iterateeFn: (value: T, index: K, collection: Record<K, T>) => U): U[];
};
/**
 * Creates an array of values by running each element in collection
 * thru an iteratee function. The iteratee is invoked with three
 * arguments: (value, index|key, collection).
 *
 * If collection is 'null' or 'undefined', it will be returned "as is"
 * without emitting any errors (which can be useful in some cases).
 */
export declare const map: MapFunction;
/**
 * Creates an array of elements, sorted in ascending order by the results
 * of running each element in a collection thru each iteratee.
 *
 * Iteratees are called with one argument (value).
 */
export declare const sortBy: <T>(array: T[], ...iterateeFns: ((input: T) => unknown)[]) => T[];
export declare const sort: <T>(array: T[]) => T[];
/**
 * Returns a range of numbers from start to end, exclusively.
 * For example, range(0, 5) will return [0, 1, 2, 3, 4].
 */
export declare const range: (start: number, end: number) => number[];
type ReduceFunction = {
    <T, U>(array: T[], reducerFn: (accumulator: U, currentValue: T, currentIndex: number, array: T[]) => U, initialValue: U): U;
    <T>(array: T[], reducerFn: (accumulator: T, currentValue: T, currentIndex: number, array: T[]) => T): T;
};
/**
 * A fast implementation of reduce.
 */
export declare const reduce: ReduceFunction;
/**
 * Creates a duplicate-free version of an array, using SameValueZero for
 * equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * It accepts iteratee which is invoked for each element in array to generate
 * the criterion by which uniqueness is computed. The order of result values
 * is determined by the order they occur in the array. The iteratee is
 * invoked with one argument: value.
 */
export declare const uniqBy: <T extends unknown>(array: T[], iterateeFn?: (value: T) => unknown) => T[];
export declare const uniq: <T>(array: T[]) => T[];
type Zip<T extends unknown[][]> = {
    [I in keyof T]: T[I] extends (infer U)[] ? U : never;
}[];
/**
 * Creates an array of grouped elements, the first of which contains
 * the first elements of the given arrays, the second of which contains
 * the second elements of the given arrays, and so on.
 */
export declare const zip: <T extends unknown[][]>(...arrays: T) => Zip<T>;
export declare const binaryInsertWith: <T, U = unknown>(collection: readonly T[], value: T, getKey: (value: T) => U) => T[];
/**
 * This method takes a collection of items and a number, returning a collection
 * of collections, where the maximum amount of items in each is that second arg
 */
export declare const paginate: <T>(collection: T[], maxPerPage: number) => T[][];
export declare const deepMerge: (...objects: any[]) => any;
export {};
