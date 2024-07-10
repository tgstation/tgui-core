import { jsx as u } from "react/jsx-runtime";
import { Image as $ } from "./Image.js";
function x(o) {
  var r;
  const {
    className: l,
    direction: t = 2,
    fallback: n,
    frame: c = 1,
    icon_state: m,
    icon: i,
    movement: s = !1,
    ...a
  } = o, e = (r = Byond.iconRefMap) == null ? void 0 : r[i];
  if (!e) return n;
  const f = `${e}?state=${m}&dir=${t}&movement=${!!s}&frame=${c}`;
  return /* @__PURE__ */ u($, { fixErrors: !0, src: f, ...a });
}
export {
  x as DmIcon
};
