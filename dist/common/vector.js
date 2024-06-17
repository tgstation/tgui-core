import { map as n, reduce as r, zip as c } from "./collections.js";
/**
 * N-dimensional vector manipulation functions.
 *
 * Vectors are plain number arrays, i.e. [x, y, z].
 *
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
const s = (t, e) => t + e, u = (t, e) => t - e, v = (t, e) => t * e, i = (t, e) => t / e, d = (...t) => n(c(...t), (e) => r(e, s)), m = (...t) => n(c(...t), (e) => r(e, u)), a = (...t) => n(c(...t), (e) => r(e, v)), D = (...t) => n(c(...t), (e) => r(e, i)), h = (t, e) => n(t, (o) => o * e), M = (t) => n(t, (e) => -e), l = (t) => Math.sqrt(r(a(t, t), s)), S = (t) => {
  const e = l(t);
  return n(t, (o) => o / e);
};
export {
  d as vecAdd,
  D as vecDivide,
  M as vecInverse,
  l as vecLength,
  a as vecMultiply,
  S as vecNormalize,
  h as vecScale,
  m as vecSubtract
};
