import { CSS_COLORS as b } from "./constants.js";
import { classes as y } from "./react.js";
const f = (o) => {
  if (typeof o == "string")
    return o.endsWith("px") ? `${Number.parseFloat(o) / 12}rem` : o;
  if (typeof o == "number")
    return `${o}rem`;
}, e = (o) => {
  if (typeof o == "string")
    return f(o);
  if (typeof o == "number")
    return f(o * 0.5);
};
function w(o) {
  return !h(o);
}
function h(o) {
  return typeof o == "string" && b.includes(o);
}
const c = (o) => (t, n) => {
  (typeof n == "number" || typeof n == "string") && (t[o] = n);
}, i = (o, t) => (n, r) => {
  (typeof r == "number" || typeof r == "string") && (n[o] = t(r));
}, l = (o, t) => (n, r) => {
  r && (n[o] = t);
}, g = (o, t, n) => (r, p) => {
  if (typeof p == "number" || typeof p == "string")
    for (let m = 0; m < n.length; m++)
      r[o + n[m]] = t(p);
}, a = (o) => (t, n) => {
  w(n) && (t[o] = n);
}, d = {
  align: c("textAlign"),
  bottom: i("bottom", f),
  fontFamily: c("fontFamily"),
  fontSize: i("fontSize", f),
  fontWeight: c("fontWeight"),
  height: i("height", f),
  left: i("left", f),
  maxHeight: i("maxHeight", f),
  maxWidth: i("maxWidth", f),
  minHeight: i("minHeight", f),
  minWidth: i("minWidth", f),
  opacity: c("opacity"),
  overflow: c("overflow"),
  overflowX: c("overflowX"),
  overflowY: c("overflowY"),
  position: c("position"),
  right: i("right", f),
  textAlign: c("textAlign"),
  top: i("top", f),
  verticalAlign: c("verticalAlign"),
  width: i("width", f),
  lineHeight: (o, t) => {
    typeof t == "number" ? o.lineHeight = t : typeof t == "string" && (o.lineHeight = f(t));
  },
  // Margin
  m: g("margin", e, [
    "Top",
    "Bottom",
    "Left",
    "Right"
  ]),
  mb: i("marginBottom", e),
  ml: i("marginLeft", e),
  mr: i("marginRight", e),
  mt: i("marginTop", e),
  mx: g("margin", e, ["Left", "Right"]),
  my: g("margin", e, ["Top", "Bottom"]),
  // Gap
  g: i("gap", e),
  gr: i("rowGap", e),
  gc: i("columnGap", e),
  // Padding
  p: g("padding", e, [
    "Top",
    "Bottom",
    "Left",
    "Right"
  ]),
  pb: i("paddingBottom", e),
  pl: i("paddingLeft", e),
  pr: i("paddingRight", e),
  pt: i("paddingTop", e),
  px: g("padding", e, ["Left", "Right"]),
  py: g("padding", e, ["Top", "Bottom"]),
  // Color props
  color: a("color"),
  textColor: a("color"),
  backgroundColor: a("backgroundColor")
}, u = {
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
  const t = {}, n = {};
  for (const r in o) {
    if (r === "style")
      continue;
    const p = o[r], m = d[r] || u[r];
    m ? m(n, p) : t[r] = p;
  }
  return t.style = { ...n, ...o.style }, t;
}
function S(o) {
  const t = o.textColor || o.color, { backgroundColor: n } = o;
  return y([
    h(t) && `color-${t}`,
    h(n) && `color-bg-${n}`
  ]);
}
function P(o) {
  const t = {};
  if (!o) return t;
  const n = o.split(" ");
  for (const r of n) {
    const [p, m] = r.split("-");
    if (p)
      if (p in d) {
        if (m === "") continue;
        const s = Number(m);
        !Number.isNaN(s) && Number.isFinite(s) ? t[p] = s : t[p] = m;
      } else p in u ? t[p] = !0 : console.warn(`Unknown prop ${p}`);
  }
  return t;
}
export {
  u as booleanStyleMap,
  S as computeBoxClassName,
  T as computeBoxProps,
  P as computeTwClass,
  e as halfUnit,
  d as stringStyleMap,
  f as unit
};
