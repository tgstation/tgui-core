/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
const o = (r) => {
  let e = "";
  for (let t = 0; t < r.length; t++) {
    const n = r[t];
    typeof n == "string" && (e += n + " ");
  }
  return e;
}, f = (r) => Array.isArray(r) ? r.flat().filter((e) => e) : typeof r == "object" ? [r] : [], i = (r, e) => {
  let t;
  for (t in r)
    if (!(t in e))
      return !0;
  for (t in e)
    if (r[t] !== e[t])
      return !0;
  return !1;
}, s = (r) => r != null && typeof r != "boolean";
export {
  s as canRender,
  o as classes,
  f as normalizeChildren,
  i as shallowDiffers
};
