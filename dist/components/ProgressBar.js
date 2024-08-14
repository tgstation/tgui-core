import { jsxs as x, jsx as n } from "react/jsx-runtime";
import { CSS_COLORS as v } from "../common/constants.js";
import { keyOfMatchingRange as y, toFixed as N, scale as S, clamp01 as _ } from "../common/math.js";
import { classes as m } from "../common/react.js";
import { p as e } from "../ProgressBar.module-Jzqlebbx.js";
import { computeBoxProps as B, computeBoxClassName as O } from "./Box.js";
function w(d) {
  const {
    className: f,
    value: r,
    minValue: p = 0,
    maxValue: u = 1,
    color: C,
    ranges: g = {},
    children: l,
    ...t
  } = d, a = S(r, p, u), h = l !== void 0, o = C || y(r, g) || "default", s = B(t), c = [
    e.progressBar,
    f,
    O(t)
  ], i = {
    width: _(a) * 100 + "%"
  };
  return v.includes(o) || o === "default" ? c.push(e["color__" + o]) : (s.style = { ...s.style, borderColor: o }, i.backgroundColor = o), /* @__PURE__ */ x("div", { className: m(c), ...s, children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: m([e.fill, e.fill__animated]),
        style: i
      }
    ),
    /* @__PURE__ */ n("div", { className: e.content, children: h ? l : N(a * 100) + "%" })
  ] });
}
export {
  w as ProgressBar
};
