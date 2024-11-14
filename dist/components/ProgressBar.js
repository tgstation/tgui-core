import { jsxs as B, jsx as i } from "react/jsx-runtime";
import { CSS_COLORS as C } from "../common/constants.js";
import { keyOfMatchingRange as P, toFixed as h, scale as x, clamp01 as _ } from "../common/math.js";
import { classes as v } from "../common/react.js";
import { computeBoxProps as y, computeBoxClassName as N } from "./Box.js";
function j(n) {
  const {
    className: m,
    value: o,
    minValue: d = 0,
    maxValue: f = 1,
    color: u,
    ranges: p = {},
    children: r,
    ...l
  } = n, a = x(o, d, f), g = r !== void 0, s = u || P(o, p) || "default", e = y(l), t = ["ProgressBar", m, N(l)], c = {
    width: `${_(a) * 100}%`
  };
  return C.includes(s) || s === "default" ? t.push(`ProgressBar--color--${s}`) : (e.style = { ...e.style, borderColor: s }, c.backgroundColor = s), /* @__PURE__ */ B("div", { className: v(t), ...e, children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: "ProgressBar__fill ProgressBar__fill--animated",
        style: c
      }
    ),
    /* @__PURE__ */ i("div", { className: "ProgressBar__content", children: g ? r : `${h(a * 100)}%` })
  ] });
}
export {
  j as ProgressBar
};
