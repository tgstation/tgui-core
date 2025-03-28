import { zip as r } from "./collections.js";
function u(n, e) {
  return n + e;
}
function c(n, e) {
  return n - e;
}
function i(n, e) {
  return n * e;
}
function o(n, e) {
  return n / e;
}
function m(...n) {
  return r(...n).map((e) => e.reduce(u));
}
function p(...n) {
  return r(...n).map((e) => e.reduce(c));
}
function f(...n) {
  return r(...n).map((e) => e.reduce(i));
}
function v(...n) {
  return r(...n).map((e) => e.reduce(o));
}
function l(n, e) {
  return n.map((t) => t * e);
}
function s(n) {
  return n.map((e) => -e);
}
function a(n) {
  return Math.sqrt(f(n, n).reduce(u));
}
function h(n) {
  const e = a(n);
  return n.map((t) => t / e);
}
export {
  m as vecAdd,
  v as vecDivide,
  s as vecInverse,
  a as vecLength,
  f as vecMultiply,
  h as vecNormalize,
  l as vecScale,
  p as vecSubtract
};
