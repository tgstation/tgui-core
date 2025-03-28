import { jsx as l } from "react/jsx-runtime";
import { classes as r } from "../common/react.js";
import { computeBoxClassName as m, computeBoxProps as a, unit as f } from "../common/ui.js";
function p(e) {
  return r([
    "Flex",
    e.inlineFlex && "Flex--inline",
    m(e)
  ]);
}
function d(e) {
  const { direction: s, wrap: t, align: i, justify: n, ...o } = e;
  return a({
    style: {
      ...o.style,
      flexDirection: s,
      flexWrap: t === !0 ? "wrap" : t,
      alignItems: i,
      justifyContent: n
    },
    ...o
  });
}
function F(e) {
  const { className: s, ...t } = e;
  return /* @__PURE__ */ l(
    "div",
    {
      className: r([s, p(t)]),
      ...d(t)
    }
  );
}
const N = (e) => r(["Flex__item", m(e)]);
function v(e) {
  const { style: s, grow: t, order: i, shrink: n, basis: o, align: c, ...u } = e, x = o ?? // IE11: Set basis to specified width if it's known, which fixes certain
  // bugs when rendering tables inside the flex.
  e.width ?? // If grow is used, basis should be set to 0 to be consistent with
  // flex css shorthand `flex: 1`.
  (t !== void 0 ? 0 : void 0);
  return a({
    style: {
      ...s,
      flexGrow: t !== void 0 && Number(t),
      flexShrink: n !== void 0 && Number(n),
      flexBasis: f(x),
      order: i,
      alignSelf: c
    },
    ...u
  });
}
function y(e) {
  const { className: s, ...t } = e;
  return /* @__PURE__ */ l(
    "div",
    {
      className: r([s, N(e)]),
      ...v(t)
    }
  );
}
F.Item = y;
export {
  F as Flex,
  p as computeFlexClassName,
  N as computeFlexItemClassName,
  v as computeFlexItemProps,
  d as computeFlexProps
};
