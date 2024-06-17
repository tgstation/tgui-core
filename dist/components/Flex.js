import { jsx as m } from "react/jsx-runtime";
import { classes as r } from "../common/react.js";
import { computeBoxClassName as x, computeBoxProps as u, unit as p } from "./Box.js";
import '../assets/Flex.css';const N = "_flex_djoni_5", y = "_inline_djoni_10", a = {
  flex: N,
  inline: y
}, v = (e) => r([
  a.flex,
  e.inline && a.inline,
  x(e)
]), _ = (e) => {
  const { className: n, direction: s, wrap: t, align: l, justify: i, inline: c, ...o } = e;
  return u({
    style: {
      ...o.style,
      flexDirection: s,
      flexWrap: t === !0 ? "wrap" : t,
      alignItems: l,
      justifyContent: i
    },
    ...o
  });
}, g = (e) => {
  const { className: n, ...s } = e;
  return /* @__PURE__ */ m(
    "div",
    {
      className: r([n, v(s)]),
      ..._(s)
    }
  );
}, j = (e) => {
  const { className: n, style: s, grow: t, order: l, shrink: i, basis: c, align: o, ...f } = e, d = c ?? // IE11: Set basis to specified width if it's known, which fixes certain
  // bugs when rendering tables inside the flex.
  e.width ?? // If grow is used, basis should be set to 0 to be consistent with
  // flex css shorthand `flex: 1`.
  (t !== void 0 ? 0 : void 0);
  return u({
    style: {
      ...s,
      flexGrow: t !== void 0 && Number(t),
      flexShrink: i !== void 0 && Number(i),
      flexBasis: p(d),
      order: l,
      alignSelf: o
    },
    ...f
  });
}, w = (e) => {
  const { className: n, ...s } = e;
  return /* @__PURE__ */ m(
    "div",
    {
      className: r([n, x(e)]),
      ...j(s)
    }
  );
};
g.Item = w;
export {
  g as Flex,
  v as computeFlexClassName,
  j as computeFlexItemProps,
  _ as computeFlexProps
};
