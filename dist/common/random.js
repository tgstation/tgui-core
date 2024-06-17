import { clamp as a } from "./math.js";
const o = (t, r) => Math.random() * (r - t) + t, m = (t, r) => (t = Math.ceil(t), r = Math.floor(r), Math.floor(Math.random() * (r - t) + t)), h = (t) => t[Math.floor(Math.random() * t.length)], c = (t) => {
  const r = a(t, 0, 100) / 100;
  return Math.random() <= r;
};
export {
  m as randomInteger,
  o as randomNumber,
  h as randomPick,
  c as randomProb
};
