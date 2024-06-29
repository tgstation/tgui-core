import { jsx as c } from "react/jsx-runtime";
import { classes as l } from "../common/react.js";
import { computeBoxClassName as m, computeBoxProps as a, unit as d } from "./Box.js";
import '../assets/Flex.css';const p = "_flex_djoni_5", N = "_inline_djoni_10", r = {
  flex: p,
  inline: N
};
function y(e) {
  return l([
    r.flex,
    e.inline && r.inline,
    m(e)
  ]);
}
function v(e) {
  const { direction: n, wrap: t, align: o, justify: s, ...i } = e;
  return a({
    style: {
      ...i.style,
      flexDirection: n,
      flexWrap: t === !0 ? "wrap" : t,
      alignItems: o,
      justifyContent: s
    },
    ...i
  });
}
function _(e) {
  const { className: n, ...t } = e;
  return /* @__PURE__ */ c(
    "div",
    {
      className: l([n, y(t)]),
      ...v(t)
    }
  );
}
function g(e) {
  const { style: n, grow: t, order: o, shrink: s, basis: i, align: u, ...f } = e, x = i ?? // IE11: Set basis to specified width if it's known, which fixes certain
  // bugs when rendering tables inside the flex.
  e.width ?? // If grow is used, basis should be set to 0 to be consistent with
  // flex css shorthand `flex: 1`.
  (t !== void 0 ? 0 : void 0);
  return a({
    style: {
      ...n,
      flexGrow: t !== void 0 && Number(t),
      flexShrink: s !== void 0 && Number(s),
      flexBasis: d(x),
      order: o,
      alignSelf: u
    },
    ...f
  });
}
function j(e) {
  const { className: n, ...t } = e;
  return /* @__PURE__ */ c(
    "div",
    {
      className: l([n, m(e)]),
      ...g(t)
    }
  );
}
_.Item = j;
export {
  _ as Flex,
  y as computeFlexClassName,
  g as computeFlexItemProps,
  v as computeFlexProps
};
