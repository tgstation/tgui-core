import { jsx as l } from "react/jsx-runtime";
import { useState as $, useEffect as h } from "react";
import { Image as d } from "./Image.js";
let t;
function g(c) {
  const {
    className: j,
    direction: f = 2,
    fallback: s,
    frame: m = 1,
    icon_state: i,
    icon: r,
    movement: a = !1,
    ...p
  } = c, [o, n] = $(""), u = `${o}?state=${i}&dir=${f}&movement=${a}&frame=${m}`;
  return h(() => {
    if (t) {
      n(t[r]);
      return;
    }
    fetch(loadedMappings == null ? void 0 : loadedMappings["icon_ref_map.json"]).then((e) => e.json()).then((e) => {
      t = e, n(e[r]);
    }).catch(() => {
    });
  }, []), o ? /* @__PURE__ */ l(d, { fixErrors: !0, src: u, ...p }) : s;
}
export {
  g as DmIcon
};
