/**
 * Ghetto performance measurement tools.
 *
 * Uses NODE_ENV to remove itself from production builds.
 *
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
const i = 16.666666666666668;
var c;
const a = !!((c = window.performance) != null && c.now), t = {}, s = {};
function p(o, n) {
  process.env.NODE_ENV !== "production" && (a && !n && (t[o] = performance.now()), s[o] = n || Date.now());
}
function u(o, n) {
  if (process.env.NODE_ENV === "production") return;
  let r = t[o], e = t[n];
  (!r || !e) && (r = s[o], e = s[n]);
  const f = Math.abs(e - r);
  return F(f);
}
function F(o) {
  const n = o / i;
  return o.toFixed(o < 10 ? 1 : 0) + "ms (" + n.toFixed(2) + " frames)";
}
const d = {
  mark: p,
  measure: u
};
export {
  d as perf
};
