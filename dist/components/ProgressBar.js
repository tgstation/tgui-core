import { jsxs as C, jsx as i } from "react/jsx-runtime";
import { CSS_COLORS as P } from "../common/constants.js";
import { keyOfMatchingRange as h, toFixed as x, clamp01 as _, scale as v } from "../common/math.js";
import { classes as y } from "../common/react.js";
import { computeBoxProps as N, computeBoxClassName as S } from "../common/ui.js";
function k(n) {
  const {
    className: m,
    value: o,
    minValue: d = 0,
    maxValue: f = 1,
    color: u,
    ranges: p = {},
    empty: g,
    children: r,
    ...l
  } = n, t = v(o, d, f), B = r !== void 0, s = u || h(o, p) || "default", e = N(l), a = ["ProgressBar", m, S(l)], c = {
    width: `${_(t) * 100}%`
  };
  return P.includes(s) || s === "default" ? a.push(`ProgressBar--color--${s}`) : (e.style = { ...e.style, borderColor: s }, c.backgroundColor = s), /* @__PURE__ */ C("div", { className: y(a), ...e, children: [
    /* @__PURE__ */ i(
      "div",
      {
        className: "ProgressBar__fill ProgressBar__fill--animated",
        style: c
      }
    ),
    /* @__PURE__ */ i("div", { className: "ProgressBar__content", children: B ? r : !g && `${x(t * 100)}%` })
  ] });
}
export {
  k as ProgressBar
};
