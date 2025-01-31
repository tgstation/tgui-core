type Zip<T extends unknown[][]> = {
    [K in keyof T]: T[K] extends (infer U)[] ? U : never;
}[];
/**
 * Creates an array of grouped elements, the first of which contains
 * the first elements of the given arrays, the second of which contains
 * the second elements of the given arrays, and so on.
 */
export declare function zip<T extends unknown[][]>(...arr: T): Zip<T>;
export {};
