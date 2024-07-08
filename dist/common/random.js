import { clamp as r } from "./math.js";
function o(t, n) {
  return Math.random() * (n - t) + t;
}
function m(t, n) {
  return t = Math.ceil(t), n = Math.floor(n), Math.floor(Math.random() * (n - t) + t);
}
function h(t) {
  return t[Math.floor(Math.random() * t.length)];
}
function c(t) {
  const n = r(t, 0, 100) / 100;
  return Math.random() <= n;
}
export {
  m as randomInteger,
  o as randomNumber,
  h as randomPick,
  c as randomProb
};
