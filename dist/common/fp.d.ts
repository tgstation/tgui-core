/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
type Func = (...args: any[]) => any;
/**
 * Creates a function that returns the result of invoking the given
 * functions, where each successive invocation is supplied the return
 * value of the previous.
 *
 * @example
 * ```tsx
 * const add2 = (x) => x + 2;
 * const multiplyBy3 = (x) => x * 3;
 * const subtract5 = (x) => x - 5;
 *
 * const composedFunction = flow(add2, multiplyBy3, subtract5); // ((4 + 2) * 3) - 5 = 13
 * const composedFunction2 = flow([add2, multiplyBy3], subtract5); // ((4 + 2) * 3) - 5 = 13
 *
 */
export declare const flow: (...funcs: Array<Func | Func[]>) => (input: any, ...rest: any[]) => any;
export {};
