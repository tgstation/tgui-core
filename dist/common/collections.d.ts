type Zip<T extends unknown[][]> = {
    [I in keyof T]: T[I] extends (infer U)[] ? U : never;
}[];
/**
 * Creates an array of grouped elements, the first of which contains
 * the first elements of the given arrays, the second of which contains
 * the second elements of the given arrays, and so on.
 */
export declare function zip<T extends unknown[][]>(...arrays: T): Zip<T>;
export {};
