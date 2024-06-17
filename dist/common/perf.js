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
const a = !!((c = window.performance) != null && c.now);
let t = {}, s = {};
function p(r, o) {
  process.env.NODE_ENV !== "production" && (a && !o && (t[r] = performance.now()), s[r] = o || Date.now());
}
function u(r, o) {
  if (process.env.NODE_ENV === "production")
    return;
  let e = t[r], n = t[o];
  (!e || !n) && (e = s[r], n = s[o]);
  const f = Math.abs(n - e);
  return F(f);
}
function F(r) {
  const o = r / i;
  return r.toFixed(r < 10 ? 1 : 0) + "ms (" + o.toFixed(2) + " frames)";
}
const d = {
  mark: p,
  measure: u
};
export {
  d as perf
};
