import { zip } from './collections';

const ADD = (a: number, b: number): number => a + b;
const SUB = (a: number, b: number): number => a - b;
const MUL = (a: number, b: number): number => a * b;
const DIV = (a: number, b: number): number => a / b;

export type Vector = number[];

export function vecAdd(...vecs: Vector[]): Vector {
  return zip(...vecs).map((x) => x.reduce(ADD));
}

export function vecSubtract(...vecs: Vector[]): Vector {
  return zip(...vecs).map((x) => x.reduce(SUB));
}

export function vecMultiply(...vecs: Vector[]): Vector {
  return zip(...vecs).map((x) => x.reduce(MUL));
}

export function vecDivide(...vecs: Vector[]): Vector {
  return zip(...vecs).map((x) => x.reduce(DIV));
}

export function vecScale(vec: Vector, n: number): Vector {
  return vec.map((x) => x * n);
}

export function vecInverse(vec: Vector): Vector {
  return vec.map((x) => -x);
}

export function vecLength(vec: Vector): number {
  return Math.sqrt(vecMultiply(vec, vec).reduce(ADD));
}

export function vecNormalize(vec: Vector): Vector {
  const length = vecLength(vec);
  return vec.map((c) => c / length);
}
