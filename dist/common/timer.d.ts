/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
/**
 * Returns a function, that, as long as it continues to be invoked, will
 * not be triggered. The function will be called after it stops being
 * called for N milliseconds. If `immediate` is passed, trigger the
 * function on the leading edge, instead of the trailing.
 */
export declare const debounce: <F extends (...args: any[]) => any>(fn: F, time: number, immediate?: boolean) => ((...args: Parameters<F>) => void);
/**
 * Returns a function, that, when invoked, will only be triggered at most once
 * during a given window of time.
 */
export declare const throttle: <F extends (...args: any[]) => any>(fn: F, time: number) => ((...args: Parameters<F>) => void);
/**
 * Suspends an asynchronous function for N milliseconds.
 *
 * @param {number} time
 */
export declare const sleep: (time: number) => Promise<void>;
