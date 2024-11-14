function e(n, t, r) {
  return n < t ? t : n > r ? r : n;
}
function u(n) {
  return n < 0 ? 0 : n > 1 ? 1 : n;
}
function f(n, t = 0, r = 100) {
  return (n - t) / (r - t);
}
function c(n, t) {
  const r = n >= 0 ? 1 : -1;
  return Number.parseFloat(
    (Math.round(n * 10 ** t + r * 1e-4) / 10 ** t).toFixed(t)
  );
}
function s(n, t = 0) {
  return Number(n).toFixed(Math.max(t, 0));
}
function o(n, t) {
  return t && n >= t[0] && n <= t[1];
}
function m(n, t) {
  for (const r of Object.keys(t)) {
    const i = t[r];
    if (o(n, i))
      return r;
  }
}
function b(n) {
  return Math.floor(n) !== n && n.toString().split(".")[1].length || 0;
}
function N(n) {
  return typeof n == "number" && Number.isFinite(n) && !Number.isNaN(n);
}
export {
  e as clamp,
  u as clamp01,
  o as inRange,
  N as isSafeNumber,
  m as keyOfMatchingRange,
  b as numberOfDecimalDigits,
  c as round,
  f as scale,
  s as toFixed
};
