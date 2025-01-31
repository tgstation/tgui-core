import { zip } from './collections';

function add(a: number, b: number): number {
  return a + b;
}
function sub(a: number, b: number): number {
  return a - b;
}
function mul(a: number, b: number): number {
  return a * b;
}
function div(a: number, b: number): number {
  return a / b;
}

export type Vector = number[];

export function vecAdd(...vecs: Vector[]): Vector {
  return zip(...vecs).map((x) => x.reduce(add));
}

export function vecSubtract(...vecs: Vector[]): Vector {
  return zip(...vecs).map((x) => x.reduce(sub));
}

export function vecMultiply(...vecs: Vector[]): Vector {
  return zip(...vecs).map((x) => x.reduce(mul));
}

export function vecDivide(...vecs: Vector[]): Vector {
  return zip(...vecs).map((x) => x.reduce(div));
}

export function vecScale(vec: Vector, n: number): Vector {
  return vec.map((x) => x * n);
}

export function vecInverse(vec: Vector): Vector {
  return vec.map((x) => -x);
}

export function vecLength(vec: Vector): number {
  return Math.sqrt(vecMultiply(vec, vec).reduce(add));
}

export function vecNormalize(vec: Vector): Vector {
  const length = vecLength(vec);
  return vec.map((c) => c / length);
}
