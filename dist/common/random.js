import { clamp as a } from "./math.js";
function e(n, o) {
  return Math.random() * (o - n) + n;
}
function c(n, o) {
  const r = Math.ceil(n), t = Math.floor(o);
  return Math.floor(Math.random() * (t - r) + r);
}
function h(n) {
  return n[Math.floor(Math.random() * n.length)];
}
function u(n) {
  const o = a(n, 0, 100) / 100;
  return Math.random() <= o;
}
export {
  c as randomInteger,
  e as randomNumber,
  h as randomPick,
  u as randomProb
};
