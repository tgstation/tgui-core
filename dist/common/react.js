function f(r) {
  let n = "";
  for (let t = 0; t < r.length; t++) {
    const e = r[t];
    typeof e == "string" && (n += `${e} `);
  }
  return n;
}
function i(r) {
  return Array.isArray(r) ? r.flat().filter((n) => n) : typeof r == "object" ? [r] : [];
}
function o(r, n) {
  let t;
  for (t in r)
    if (!(t in n))
      return !0;
  for (t in n)
    if (r[t] !== n[t])
      return !0;
  return !1;
}
function u(r) {
  return r != null && typeof r != "boolean";
}
export {
  u as canRender,
  f as classes,
  i as normalizeChildren,
  o as shallowDiffers
};
