const c = [/v4shim/i], a = {};
function l(t) {
  return a[t] || t;
}
const f = (t) => (d) => (n) => {
  const { type: i, payload: e } = n;
  if (i === "asset/stylesheet") {
    Byond.loadCss(e);
    return;
  }
  if (i === "asset/mappings") {
    for (const s of Object.keys(e)) {
      if (c.some((p) => p.test(s)))
        continue;
      const o = e[s], r = s.split(".").pop();
      a[s] = o, r === "css" && Byond.loadCss(o), r === "js" && Byond.loadJs(o);
    }
    return;
  }
  d(n);
};
export {
  f as assetMiddleware,
  l as resolveAsset
};
