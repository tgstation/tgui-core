import { CSS_COLORS as u } from "./constants.js";
import { classes as y } from "./react.js";
const f = (t) => {
  if (typeof t == "string")
    return t.endsWith("px") ? `${Number.parseFloat(t) / 12}rem` : t;
  if (typeof t == "number")
    return `${t}rem`;
}, p = (t) => {
  if (typeof t == "string")
    return f(t);
  if (typeof t == "number")
    return f(t * 0.5);
};
function w(t) {
  return !h(t);
}
function h(t) {
  return typeof t == "string" && u.includes(t);
}
const l = (t) => (o, i) => {
  (typeof i == "number" || typeof i == "string") && (o[t] = i);
}, n = (t, o) => (i, e) => {
  (typeof e == "number" || typeof e == "string") && (i[t] = o(e));
}, s = (t, o) => (i, e) => {
  e && (i[t] = o);
}, c = (t, o, i) => (e, r) => {
  if (typeof r == "number" || typeof r == "string")
    for (let m = 0; m < i.length; m++)
      e[t + i[m]] = o(r);
}, a = (t) => (o, i) => {
  w(i) && (o[t] = i);
}, d = {
  align: l("textAlign"),
  bottom: n("bottom", f),
  fontFamily: l("fontFamily"),
  fontSize: n("fontSize", f),
  fontWeight: l("fontWeight"),
  height: n("height", f),
  left: n("left", f),
  maxHeight: n("maxHeight", f),
  maxWidth: n("maxWidth", f),
  minHeight: n("minHeight", f),
  minWidth: n("minWidth", f),
  opacity: l("opacity"),
  overflow: l("overflow"),
  overflowX: l("overflowX"),
  overflowY: l("overflowY"),
  position: l("position"),
  right: n("right", f),
  textAlign: l("textAlign"),
  top: n("top", f),
  verticalAlign: l("verticalAlign"),
  width: n("width", f),
  lineHeight: (t, o) => {
    typeof o == "number" ? t.lineHeight = o : typeof o == "string" && (t.lineHeight = f(o));
  },
  // Margin
  m: c("margin", p, [
    "Top",
    "Bottom",
    "Left",
    "Right"
  ]),
  mb: n("marginBottom", p),
  ml: n("marginLeft", p),
  mr: n("marginRight", p),
  mt: n("marginTop", p),
  mx: c("margin", p, ["left", "right"]),
  my: c("margin", p, ["top", "bottom"]),
  // Padding
  p: c("padding", p, [
    "Top",
    "Bottom",
    "Left",
    "Right"
  ]),
  pb: n("paddingBottom", p),
  pl: n("paddingLeft", p),
  pr: n("paddingRight", p),
  pt: n("paddingTop", p),
  px: c("padding", p, ["left", "right"]),
  py: c("padding", p, ["top", "bottom"]),
  // Color props
  color: a("color"),
  textColor: a("color"),
  backgroundColor: a("backgroundColor")
}, b = {
  bold: s("fontWeight", "bold"),
  fillPositionedParent: (t, o) => {
    o && (t.position = "absolute", t.top = 0, t.bottom = 0, t.left = 0, t.right = 0);
  },
  inline: s("display", "inline-block"),
  italic: s("fontStyle", "italic"),
  nowrap: s("whiteSpace", "nowrap"),
  preserveWhitespace: s("whiteSpace", "pre-wrap")
};
function S(t) {
  const o = {}, i = {};
  for (const e in t) {
    if (e === "style")
      continue;
    const r = t[e], m = d[e] || b[e];
    m ? m(i, r) : o[e] = r;
  }
  return o.style = { ...i, ...t.style }, o;
}
function T(t) {
  const o = t.textColor || t.color, { backgroundColor: i } = t;
  return y([
    h(o) && `color-${o}`,
    h(i) && `color-bg-${i}`
  ]);
}
function P(t) {
  const o = {};
  if (!t) return o;
  const i = t.split(" ");
  for (const e of i) {
    const [r, m] = e.split("-");
    if (r)
      if (r in d) {
        if (m === "") continue;
        const g = Number(m);
        !Number.isNaN(g) && Number.isFinite(g) ? o[r] = g : o[r] = m;
      } else r in b ? o[r] = !0 : console.warn(`Unknown prop ${r}`);
  }
  return o;
}
export {
  b as booleanStyleMap,
  T as computeBoxClassName,
  S as computeBoxProps,
  P as computeTwClass,
  p as halfUnit,
  d as stringStyleMap,
  f as unit
};
