import { jsx as N } from "react/jsx-runtime";
import { Image as e } from "./Image.js";
var u = /* @__PURE__ */ ((T) => (T[T.NORTH = 1] = "NORTH", T[T.SOUTH = 2] = "SOUTH", T[T.EAST = 4] = "EAST", T[T.WEST = 8] = "WEST", T[T.NORTHEAST = 5] = "NORTHEAST", T[T.NORTHWEST = 9] = "NORTHWEST", T[T.SOUTHEAST = 6] = "SOUTHEAST", T[T.SOUTHWEST = 10] = "SOUTHWEST", T))(u || {});
function $(T) {
  var m;
  const {
    className: A,
    direction: E = 2,
    fallback: a,
    frame: s = 1,
    icon_state: H,
    icon: O,
    movement: f = !1,
    ...r
  } = T, S = (m = Byond.iconRefMap) == null ? void 0 : m[O];
  if (!S) return a;
  const R = `${S}?state=${H}&dir=${E}&movement=${!!f}&frame=${s}`;
  return /* @__PURE__ */ N(e, { fixErrors: !0, src: R, ...r });
}
export {
  u as Direction,
  $ as DmIcon
};
