import { jsxs as g, jsx as n } from "react/jsx-runtime";
import { keyOfMatchingRange as v, toFixed as y, scale as N, clamp01 as _ } from "../common/math.js";
import { classes as m } from "../common/react.js";
import { CSS_COLORS as B } from "../constants.js";
import { s as o } from "../ProgressBar.module-BkAFfFy0.js";
import { computeBoxProps as S, computeBoxClassName as O } from "./Box.js";
function w(d) {
  const {
    className: f,
    value: r,
    minValue: u = 0,
    maxValue: p = 1,
    color: C,
    ranges: h = {},
    children: l,
    ...t
  } = d, a = N(r, u, p), x = l !== void 0, s = C || v(r, h) || "default", e = S(t), c = [
    o.progressBar,
    f,
    O(t)
  ], i = {
    width: _(a) * 100 + "%"
  };
  return B.includes(s) || s === "default" ? c.push(o["color__" + s]) : (e.style = { ...e.style, borderColor: s }, i.backgroundColor = s), /* @__PURE__ */ g("div", { className: m(c), ...e, children: [
    /* @__PURE__ */ n(
      "div",
      {
        className: m([o.fill, o.fill__animated]),
        style: i
      }
    ),
    /* @__PURE__ */ n("div", { className: o.content, children: x ? l : y(a * 100) + "%" })
  ] });
}
export {
  w as ProgressBar
};
