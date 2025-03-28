/** Represents a vector as an array of numbers */
export type Vector = number[];
/** Adds multiple vectors together element-wise */
export declare function vecAdd(...vecs: Vector[]): Vector;
/** Subtracts multiple vectors element-wise */
export declare function vecSubtract(...vecs: Vector[]): Vector;
/** Multiplies multiple vectors element-wise */
export declare function vecMultiply(...vecs: Vector[]): Vector;
/** Divides multiple vectors element-wise */
export declare function vecDivide(...vecs: Vector[]): Vector;
/** Multiplies a vector by a scalar number */
export declare function vecScale(vec: Vector, n: number): Vector;
/** Negates all elements of a vector */
export declare function vecInverse(vec: Vector): Vector;
/** Calculates the Euclidean length of a vector */
export declare function vecLength(vec: Vector): number;
/** Returns a normalized (unit length) version of the vector */
export declare function vecNormalize(vec: Vector): Vector;
