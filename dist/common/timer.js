/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
const c = (o, n, t = !1) => {
  let e;
  return (...u) => {
    const s = () => {
      e = null, t || o(...u);
    }, l = t && !e;
    clearTimeout(e), e = setTimeout(s, n), l && o(...u);
  };
}, i = (o, n) => {
  let t, e;
  return function u(...s) {
    const l = Date.now();
    e && clearTimeout(e), !t || l - t >= n ? (o.apply(null, s), t = l) : e = setTimeout(
      () => u(...s),
      n - (l - (t ?? 0))
    );
  };
}, r = (o) => new Promise((n) => setTimeout(n, o));
export {
  c as debounce,
  r as sleep,
  i as throttle
};
