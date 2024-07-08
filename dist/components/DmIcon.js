import { jsxs as y, Fragment as $, jsx as g } from "react/jsx-runtime";
import { useState as c, useEffect as x } from "react";
import { resolveAsset as v } from "../common/assets.js";
import { fetchRetry as D } from "../common/http.js";
import { Image as I } from "./Image.js";
let t;
function S(m) {
  const {
    className: R,
    direction: f = 2,
    fallback: i,
    frame: a = 1,
    icon_state: l,
    icon: o,
    movement: p = !1,
    ...u
  } = m, [n, s] = c(""), [h, r] = c(""), j = `${n}?state=${l}&dir=${f}&movement=${p}&frame=${a}`;
  return x(() => {
    if (t) {
      r(Object.keys(t).length.toString()), s(t[o]);
      return;
    }
    D(v("icon_ref_map.json")).then((e) => (r("!"), e.json())).then((e) => {
      t = e, s(e[o]), r("!!");
    }).catch(() => {
    });
  }, []), n ? /* @__PURE__ */ y($, { children: [
    /* @__PURE__ */ g(I, { fixErrors: !0, src: j, ...u }),
    h
  ] }) : i;
}
export {
  S as DmIcon
};
