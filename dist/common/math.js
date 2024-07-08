function e(t, n, r) {
  return t < n ? n : t > r ? r : t;
}
function c(t) {
  return t < 0 ? 0 : t > 1 ? 1 : t;
}
function f(t, n, r) {
  return (t - n) / (r - n);
}
function u(t, n) {
  const r = t >= 0 ? 1 : -1;
  return parseFloat(
    (Math.round(t * Math.pow(10, n) + r * 1e-4) / Math.pow(10, n)).toFixed(n)
  );
}
function s(t, n = 0) {
  return Number(t).toFixed(Math.max(n, 0));
}
function i(t, n) {
  return n && t >= n[0] && t <= n[1];
}
function a(t, n) {
  for (const r of Object.keys(n)) {
    const o = n[r];
    if (i(t, o))
      return r;
  }
}
function h(t) {
  return Math.floor(t) !== t && t.toString().split(".")[1].length || 0;
}
export {
  e as clamp,
  c as clamp01,
  i as inRange,
  a as keyOfMatchingRange,
  h as numberOfDecimalDigits,
  u as round,
  f as scale,
  s as toFixed
};
