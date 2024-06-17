/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
const l = [/v4shim/i], d = {}, r = (t) => d[t] || t, f = (t) => (p) => (n) => {
  const { type: i, payload: e } = n;
  if (i === "asset/stylesheet") {
    Byond.loadCss(e);
    return;
  }
  if (i === "asset/mappings") {
    for (const s of Object.keys(e)) {
      if (l.some((c) => c.test(s)))
        continue;
      const o = e[s], a = s.split(".").pop();
      d[s] = o, a === "css" && Byond.loadCss(o), a === "js" && Byond.loadJs(o);
    }
    return;
  }
  p(n);
};
export {
  f as assetMiddleware,
  r as resolveAsset
};
