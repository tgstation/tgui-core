import { zip } from './collections.ts';

/** Adds two numbers */
function add(a: number, b: number): number {
  return a + b;
}

/** Subtracts two numbers */
function sub(a: number, b: number): number {
  return a - b;
}

/** Multiplies two numbers */
function mul(a: number, b: number): number {
  return a * b;
}

/** Divides two numbers */
function div(a: number, b: number): number {
  return a / b;
}

/** Represents a vector as an array of numbers */
export type Vector = number[];

/** Adds multiple vectors together element-wise */
export function vecAdd(...vecs: Vector[]): Vector {
  return zip(...vecs).map((x) => x.reduce(add));
}

/** Subtracts multiple vectors element-wise */
export function vecSubtract(...vecs: Vector[]): Vector {
  return zip(...vecs).map((x) => x.reduce(sub));
}

/** Multiplies multiple vectors element-wise */
export function vecMultiply(...vecs: Vector[]): Vector {
  return zip(...vecs).map((x) => x.reduce(mul));
}

/** Divides multiple vectors element-wise */
export function vecDivide(...vecs: Vector[]): Vector {
  return zip(...vecs).map((x) => x.reduce(div));
}

/** Multiplies a vector by a scalar number */
export function vecScale(vec: Vector, n: number): Vector {
  return vec.map((x) => x * n);
}

/** Negates all elements of a vector */
export function vecInverse(vec: Vector): Vector {
  return vec.map((x) => -x);
}

/** Calculates the Euclidean length of a vector */
export function vecLength(vec: Vector): number {
  return Math.sqrt(vecMultiply(vec, vec).reduce(add));
}

/** Returns a normalized (unit length) version of the vector */
export function vecNormalize(vec: Vector): Vector {
  const length = vecLength(vec);
  return vec.map((c) => c / length);
}
