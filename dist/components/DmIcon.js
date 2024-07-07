import { jsx as p } from "react/jsx-runtime";
import { useState as R, useEffect as u } from "react";
import { resolveAsset as l } from "../common/assets.js";
import { fetchRetry as A } from "../common/http.js";
import { Image as N } from "./Image.js";
let s;
function x(t) {
  const {
    className: c,
    direction: m = 2,
    fallback: r,
    frame: S = 1,
    icon_state: o,
    icon: e,
    movement: E = !1,
    ...H
  } = t, [T, f] = R(""), O = `${T}?state=${o}&dir=${m}&movement=${E}&frame=${S}`;
  return u(() => {
    async function n() {
      const a = await (await A(l("icon_ref_map.json"))).json();
      s = a, f(a[e]);
    }
    s ? f(s[e]) : n();
  }, []), T ? /* @__PURE__ */ p(N, { fixErrors: !0, src: O, ...H }) : r;
}
export {
  x as DmIcon
};
