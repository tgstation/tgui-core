import type { Fn } from './types';

/**
 * Creates a function that returns the result of invoking the given
 * functions, where each successive invocation is supplied the return
 * value of the previous.
 *
 * Example:
 *
 * ```tsx
 * const add2 = (x) => x + 2;
 * const multiplyBy3 = (x) => x * 3;
 * const subtract5 = (x) => x - 5;
 *
 * const composedFunction = flow(add2, multiplyBy3, subtract5); // ((4 + 2) * 3) - 5 = 13
 * const composedFunction2 = flow([add2, multiplyBy3], subtract5); // ((4 + 2) * 3) - 5 = 13
 *
 */
export const flow =
  (...funcs: Array<Fn | Fn[]>) =>
  (input: any, ...rest: any[]): any => {
    let output = input;

    for (const func of funcs) {
      // Recurse into the array of functions
      if (Array.isArray(func)) {
        output = flow(...func)(output, ...rest);
      } else if (func) {
        output = func(output, ...rest);
      }
    }
    return output;
  };
