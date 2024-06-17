/**
 * Ghetto performance measurement tools.
 *
 * Uses NODE_ENV to remove itself from production builds.
 *
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
/**
 * Marks a certain spot in the code for later measurements.
 */
declare function mark(name: string, timestamp?: number): void;
/**
 * Calculates and returns the difference between two markers as a string.
 *
 * Use logger.log() to print the measurement.
 */
declare function measure(markerNameA: string, markerNameB: string): string | undefined;
export declare const perf: {
    mark: typeof mark;
    measure: typeof measure;
};
export {};
