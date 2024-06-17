/**
 * N-dimensional vector manipulation functions.
 *
 * Vectors are plain number arrays, i.e. [x, y, z].
 *
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
export type Vector = number[];
export declare const vecAdd: (...vecs: Vector[]) => Vector;
export declare const vecSubtract: (...vecs: Vector[]) => Vector;
export declare const vecMultiply: (...vecs: Vector[]) => Vector;
export declare const vecDivide: (...vecs: Vector[]) => Vector;
export declare const vecScale: (vec: Vector, n: number) => Vector;
export declare const vecInverse: (vec: Vector) => Vector;
export declare const vecLength: (vec: Vector) => number;
export declare const vecNormalize: (vec: Vector) => Vector;
