import { jsx as l } from "react/jsx-runtime";
import { useState as $, useEffect as h } from "react";
import { resolveAsset as j } from "../common/assets.js";
import { fetchRetry as v } from "../common/http.js";
import { Image as x } from "./Image.js";
let r;
function d(f) {
  const {
    className: I,
    direction: m = 2,
    fallback: s,
    frame: c = 1,
    icon_state: i,
    icon: t,
    movement: a = !1,
    ...p
  } = f, [o, n] = $(""), u = `${o}?state=${i}&dir=${m}&movement=${a}&frame=${c}`;
  return h(() => {
    if (r) {
      n(r[t]);
      return;
    }
    v(j("icon_ref_map.json")).then((e) => e.json()).then((e) => {
      r = e, n(e[t]);
    }).catch(() => {
    });
  }, []), o ? /* @__PURE__ */ l(x, { fixErrors: !0, src: u, ...p }) : s;
}
export {
  d as DmIcon
};
