import { classes as y } from "../common/react.js";
import { createElement as b } from "react";
import { CSS_COLORS as x } from "../constants.js";
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
const p = (o) => {
  if (typeof o == "string")
    return o.endsWith("px") ? parseFloat(o) / 12 + "rem" : o;
  if (typeof o == "number")
    return o + "rem";
}, r = (o) => {
  if (typeof o == "string")
    return p(o);
  if (typeof o == "number")
    return p(o * 0.5);
}, C = (o) => !a(o), a = (o) => typeof o == "string" && x.includes(o), f = (o) => (t, i) => {
  (typeof i == "number" || typeof i == "string") && (t[o] = i);
}, n = (o, t) => (i, e) => {
  (typeof e == "number" || typeof e == "string") && (i[o] = t(e));
}, g = (o, t) => (i, e) => {
  e && (i[o] = t);
}, s = (o, t, i) => (e, m) => {
  if (typeof m == "number" || typeof m == "string")
    for (let c = 0; c < i.length; c++)
      e[o + "-" + i[c]] = t(m);
}, l = (o) => (t, i) => {
  C(i) && (t[o] = i);
}, w = {
  align: f("textAlign"),
  bottom: n("bottom", p),
  fontFamily: f("fontFamily"),
  fontSize: n("fontSize", p),
  fontWeight: f("fontWeight"),
  height: n("height", p),
  left: n("left", p),
  maxHeight: n("maxHeight", p),
  maxWidth: n("maxWidth", p),
  minHeight: n("minHeight", p),
  minWidth: n("minWidth", p),
  opacity: f("opacity"),
  overflow: f("overflow"),
  overflowX: f("overflowX"),
  overflowY: f("overflowY"),
  position: f("position"),
  right: n("right", p),
  textAlign: f("textAlign"),
  top: n("top", p),
  verticalAlign: f("verticalAlign"),
  width: n("width", p),
  lineHeight: (o, t) => {
    typeof t == "number" ? o.lineHeight = t : typeof t == "string" && (o.lineHeight = p(t));
  },
  // Margin
  m: s("margin", r, [
    "Top",
    "Bottom",
    "Left",
    "Right"
  ]),
  mb: n("marginBottom", r),
  ml: n("marginLeft", r),
  mr: n("marginRight", r),
  mt: n("marginTop", r),
  mx: s("margin", r, ["Left", "Right"]),
  my: s("margin", r, ["Top", "Bottom"]),
  // Padding
  p: s("padding", r, [
    "Top",
    "Bottom",
    "Left",
    "Right"
  ]),
  pb: n("paddingBottom", r),
  pl: n("paddingLeft", r),
  pr: n("paddingRight", r),
  pt: n("paddingTop", r),
  px: s("padding", r, ["Left", "Right"]),
  py: s("padding", r, ["Top", "Bottom"]),
  // Color props
  color: l("color"),
  textColor: l("color"),
  backgroundColor: l("backgroundColor")
}, u = {
  bold: g("fontWeight", "bold"),
  fillPositionedParent: (o, t) => {
    t && (o.position = "absolute", o.top = 0, o.bottom = 0, o.left = 0, o.right = 0);
  },
  inline: g("display", "inline-block"),
  italic: g("fontStyle", "italic"),
  nowrap: g("whiteSpace", "nowrap"),
  preserveWhitespace: g("whiteSpace", "pre-wrap")
}, S = (o) => {
  const t = {}, i = {};
  for (let e of Object.keys(o)) {
    if (e === "style")
      continue;
    const m = o[e], c = w[e] || u[e];
    c ? c(i, m) : t[e] = m;
  }
  return t.style = { ...i, ...o.style }, t;
}, d = (o) => {
  const t = o.textColor || o.color, i = o.backgroundColor;
  return y([
    a(t) && "color-" + t,
    a(i) && "color-bg-" + i
  ]);
}, W = (o) => {
  const { as: t = "div", className: i, children: e, ...m } = o, c = i ? `${i} ${d(m)}` : d(m), h = S(m);
  return b(
    typeof t == "string" ? t : "div",
    {
      ...h,
      className: c
    },
    e
  );
};
export {
  W as Box,
  d as computeBoxClassName,
  S as computeBoxProps,
  r as halfUnit,
  p as unit
};
