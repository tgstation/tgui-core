function c(n, o, t = !1) {
  let e;
  return (...i) => {
    function l() {
      e = null, t || n(...i);
    }
    const u = t && !e;
    clearTimeout(e), e = setTimeout(l, o), u && n(...i);
  };
}
function r(n, o) {
  let t, e;
  return function i(...l) {
    const u = Date.now();
    e && clearTimeout(e), !t || u - t >= o ? (n(...l), t = u) : e = setTimeout(
      () => i(...l),
      o - (u - (t ?? 0))
    );
  };
}
function f(n) {
  return new Promise((o) => setTimeout(o, n));
}
export {
  c as debounce,
  f as sleep,
  r as throttle
};
