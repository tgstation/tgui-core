import { createElement as y } from "react";
import { CSS_COLORS as b } from "../common/constants.js";
import { classes as u } from "../common/react.js";
function p(o) {
  if (typeof o == "string")
    return o.endsWith("px") ? `${Number.parseFloat(o) / 12}rem` : o;
  if (typeof o == "number")
    return `${o}rem`;
}
function r(o) {
  if (typeof o == "string")
    return p(o);
  if (typeof o == "number")
    return p(o * 0.5);
}
function x(o) {
  return !a(o);
}
function a(o) {
  return typeof o == "string" && b.includes(o);
}
const m = (o) => (t, i) => {
  (typeof i == "number" || typeof i == "string") && (t[o] = i);
}, n = (o, t) => (i, e) => {
  (typeof e == "number" || typeof e == "string") && (i[o] = t(e));
}, l = (o, t) => (i, e) => {
  e && (i[o] = t);
}, g = (o, t, i) => (e, f) => {
  if (typeof f == "number" || typeof f == "string")
    for (let c = 0; c < i.length; c++)
      e[o + i[c]] = t(f);
}, s = (o) => (t, i) => {
  x(i) && (t[o] = i);
}, C = {
  align: m("textAlign"),
  bottom: n("bottom", p),
  fontFamily: m("fontFamily"),
  fontSize: n("fontSize", p),
  fontWeight: m("fontWeight"),
  height: n("height", p),
  left: n("left", p),
  maxHeight: n("maxHeight", p),
  maxWidth: n("maxWidth", p),
  minHeight: n("minHeight", p),
  minWidth: n("minWidth", p),
  opacity: m("opacity"),
  overflow: m("overflow"),
  overflowX: m("overflowX"),
  overflowY: m("overflowY"),
  position: m("position"),
  right: n("right", p),
  textAlign: m("textAlign"),
  top: n("top", p),
  verticalAlign: m("verticalAlign"),
  width: n("width", p),
  lineHeight: (o, t) => {
    typeof t == "number" ? o.lineHeight = t : typeof t == "string" && (o.lineHeight = p(t));
  },
  // Margin
  m: g("margin", r, [
    "Top",
    "Bottom",
    "Left",
    "Right"
  ]),
  mb: n("marginBottom", r),
  ml: n("marginLeft", r),
  mr: n("marginRight", r),
  mt: n("marginTop", r),
  mx: g("margin", r, ["Left", "Right"]),
  my: g("margin", r, ["Top", "Bottom"]),
  // Padding
  p: g("padding", r, [
    "Top",
    "Bottom",
    "Left",
    "Right"
  ]),
  pb: n("paddingBottom", r),
  pl: n("paddingLeft", r),
  pr: n("paddingRight", r),
  pt: n("paddingTop", r),
  px: g("padding", r, ["Left", "Right"]),
  py: g("padding", r, ["Top", "Bottom"]),
  // Color props
  color: s("color"),
  textColor: s("color"),
  backgroundColor: s("backgroundColor")
}, w = {
  bold: l("fontWeight", "bold"),
  fillPositionedParent: (o, t) => {
    t && (o.position = "absolute", o.top = 0, o.bottom = 0, o.left = 0, o.right = 0);
  },
  inline: l("display", "inline-block"),
  italic: l("fontStyle", "italic"),
  nowrap: l("whiteSpace", "nowrap"),
  preserveWhitespace: l("whiteSpace", "pre-wrap")
};
function S(o) {
  const t = {}, i = {};
  for (const e of Object.keys(o)) {
    if (e === "style")
      continue;
    const f = o[e], c = C[e] || w[e];
    c ? c(i, f) : t[e] = f;
  }
  return t.style = { ...i, ...o.style }, t;
}
function d(o) {
  const t = o.textColor || o.color, i = o.backgroundColor;
  return u([
    a(t) && `color-${t}`,
    a(i) && `color-bg-${i}`
  ]);
}
function W(o) {
  const { as: t = "div", className: i, children: e, ...f } = o, c = i ? `${i} ${d(f)}` : d(f), h = S(f);
  return y(
    typeof t == "string" ? t : "div",
    {
      ...h,
      className: c
    },
    e
  );
}
export {
  W as Box,
  d as computeBoxClassName,
  S as computeBoxProps,
  r as halfUnit,
  p as unit
};
