import { CSS_COLORS as u } from "./constants.js";
import { classes as y } from "./react.js";
const f = (o) => {
  if (typeof o == "string")
    return o.endsWith("px") ? `${Number.parseFloat(o) / 12}rem` : o;
  if (typeof o == "number")
    return `${o}rem`;
}, p = (o) => {
  if (typeof o == "string")
    return f(o);
  if (typeof o == "number")
    return f(o * 0.5);
};
function w(o) {
  return !h(o);
}
function h(o) {
  return typeof o == "string" && u.includes(o);
}
const c = (o) => (t, i) => {
  (typeof i == "number" || typeof i == "string") && (t[o] = i);
}, n = (o, t) => (i, e) => {
  (typeof e == "number" || typeof e == "string") && (i[o] = t(e));
}, l = (o, t) => (i, e) => {
  e && (i[o] = t);
}, s = (o, t, i) => (e, r) => {
  if (typeof r == "number" || typeof r == "string")
    for (let m = 0; m < i.length; m++)
      e[o + i[m]] = t(r);
}, a = (o) => (t, i) => {
  w(i) && (t[o] = i);
}, d = {
  align: c("textAlign"),
  bottom: n("bottom", f),
  fontFamily: c("fontFamily"),
  fontSize: n("fontSize", f),
  fontWeight: c("fontWeight"),
  height: n("height", f),
  left: n("left", f),
  maxHeight: n("maxHeight", f),
  maxWidth: n("maxWidth", f),
  minHeight: n("minHeight", f),
  minWidth: n("minWidth", f),
  opacity: c("opacity"),
  overflow: c("overflow"),
  overflowX: c("overflowX"),
  overflowY: c("overflowY"),
  position: c("position"),
  right: n("right", f),
  textAlign: c("textAlign"),
  top: n("top", f),
  verticalAlign: c("verticalAlign"),
  width: n("width", f),
  lineHeight: (o, t) => {
    typeof t == "number" ? o.lineHeight = t : typeof t == "string" && (o.lineHeight = f(t));
  },
  // Margin
  m: s("margin", p, [
    "Top",
    "Bottom",
    "Left",
    "Right"
  ]),
  mb: n("marginBottom", p),
  ml: n("marginLeft", p),
  mr: n("marginRight", p),
  mt: n("marginTop", p),
  mx: s("margin", p, ["Left", "Right"]),
  my: s("margin", p, ["Top", "Bottom"]),
  // Padding
  p: s("padding", p, [
    "Top",
    "Bottom",
    "Left",
    "Right"
  ]),
  pb: n("paddingBottom", p),
  pl: n("paddingLeft", p),
  pr: n("paddingRight", p),
  pt: n("paddingTop", p),
  px: s("padding", p, ["Left", "Right"]),
  py: s("padding", p, ["Top", "Bottom"]),
  // Color props
  color: a("color"),
  textColor: a("color"),
  backgroundColor: a("backgroundColor")
}, b = {
  bold: l("fontWeight", "bold"),
  fillPositionedParent: (o, t) => {
    t && (o.position = "absolute", o.top = 0, o.bottom = 0, o.left = 0, o.right = 0);
  },
  inline: l("display", "inline-block"),
  italic: l("fontStyle", "italic"),
  nowrap: l("whiteSpace", "nowrap"),
  preserveWhitespace: l("whiteSpace", "pre-wrap")
};
function T(o) {
  const t = {}, i = {};
  for (const e in o) {
    if (e === "style")
      continue;
    const r = o[e], m = d[e] || b[e];
    m ? m(i, r) : t[e] = r;
  }
  return t.style = { ...i, ...o.style }, t;
}
function S(o) {
  const t = o.textColor || o.color, { backgroundColor: i } = o;
  return y([
    h(t) && `color-${t}`,
    h(i) && `color-bg-${i}`
  ]);
}
function P(o) {
  const t = {};
  if (!o) return t;
  const i = o.split(" ");
  for (const e of i) {
    const [r, m] = e.split("-");
    if (r)
      if (r in d) {
        if (m === "") continue;
        const g = Number(m);
        !Number.isNaN(g) && Number.isFinite(g) ? t[r] = g : t[r] = m;
      } else r in b ? t[r] = !0 : console.warn(`Unknown prop ${r}`);
  }
  return t;
}
export {
  b as booleanStyleMap,
  S as computeBoxClassName,
  T as computeBoxProps,
  P as computeTwClass,
  p as halfUnit,
  d as stringStyleMap,
  f as unit
};
