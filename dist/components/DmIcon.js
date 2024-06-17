import { jsx as $ } from "react/jsx-runtime";
import { useState as R, useEffect as d } from "react";
import { resolveAsset as j } from "../assets.js";
import { fetchRetry as v } from "../http.js";
import { Image as x } from "./Image.js";
let e;
function b(n) {
  const {
    className: y,
    direction: f = 2,
    fallback: a,
    frame: c = 1,
    icon_state: m,
    icon: t,
    movement: i = !1,
    ...p
  } = n, [o, r] = R(""), u = `${o}?state=${m}&dir=${f}&movement=${i}&frame=${c}`;
  return d(() => {
    async function l() {
      const s = await (await v(j("icon_ref_map.json"))).json();
      e = s, r(s[t]);
    }
    e ? r(e[t]) : l();
  }, []), o ? /* @__PURE__ */ $(x, { fixErrors: !0, src: u, ...p }) : a;
}
export {
  b as DmIcon
};
