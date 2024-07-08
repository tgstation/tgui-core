import { clamp as n } from "./math.js";
function o(t, r) {
  return Math.random() * (r - t) + t;
}
function m(t, r) {
  return t = Math.ceil(t), r = Math.floor(r), Math.floor(Math.random() * (r - t) + t);
}
const h = (t) => t[Math.floor(Math.random() * t.length)];
function c(t) {
  const r = n(t, 0, 100) / 100;
  return Math.random() <= r;
}
export {
  m as randomInteger,
  o as randomNumber,
  h as randomPick,
  c as randomProb
};
