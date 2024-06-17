/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
const i = (t, r, n) => t < r ? r : t > n ? n : t, h = (t) => t < 0 ? 0 : t > 1 ? 1 : t, e = (t, r, n) => (t - r) / (n - r), M = (t, r) => {
  if (!t || isNaN(t))
    return t;
  let n, o, s, c;
  return r |= 0, n = Math.pow(10, r), t *= n, c = +(t > 0) | -(t < 0), s = Math.abs(t % 1) >= 0.4999999999854481, o = Math.floor(t), s && (t = o + (c > 0)), (s ? t : Math.round(t)) / n;
}, g = (t, r = 0) => Number(t).toFixed(Math.max(r, 0)), f = (t, r) => r && t >= r[0] && t <= r[1], m = (t, r) => {
  for (let n of Object.keys(r)) {
    const o = r[n];
    if (f(t, o))
      return n;
  }
}, b = (t) => Math.floor(t) !== t && t.toString().split(".")[1].length || 0;
export {
  i as clamp,
  h as clamp01,
  f as inRange,
  m as keyOfMatchingRange,
  b as numberOfDecimalDigits,
  M as round,
  e as scale,
  g as toFixed
};
