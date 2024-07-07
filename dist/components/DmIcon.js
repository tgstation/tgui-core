import { jsx as l } from "react/jsx-runtime";
import { useState as h, useEffect as $ } from "react";
import { resolveAsset as j } from "../common/assets.js";
import { fetchRetry as v } from "../common/http.js";
import { Image as x } from "./Image.js";
let t;
function b(o) {
  const {
    className: E,
    direction: n = 2,
    fallback: f,
    frame: m = 1,
    icon_state: s,
    icon: c,
    movement: i = !1,
    ...a
  } = o, [r, p] = h(""), u = `${r}?state=${s}&dir=${n}&movement=${i}&frame=${m}`;
  return $(() => {
    t || v(j("icon_ref_map.json")).then((e) => e.json()).then((e) => {
      t = e, p(e[c]);
    }).catch((e) => {
      console.error("Error fetching ref map:", e);
    });
  }, []), r ? /* @__PURE__ */ l(x, { fixErrors: !0, src: u, ...a }) : f;
}
export {
  b as DmIcon
};
