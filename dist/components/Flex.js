import { jsx as l } from "react/jsx-runtime";
import { classes as o } from "../common/react.js";
import { computeBoxClassName as m, computeBoxProps as a, unit as f } from "../common/ui.js";
function d(e) {
  return o([
    "Flex",
    e.inlineFlex && "Flex--inline",
    m(e)
  ]);
}
function p(e) {
  const { direction: i, wrap: t, align: r, justify: s, ...n } = e;
  return a({
    style: {
      ...n.style,
      flexDirection: i,
      flexWrap: t === !0 ? "wrap" : t,
      alignItems: r,
      justifyContent: s
    },
    ...n
  });
}
function F(e) {
  const { className: i, ...t } = e;
  return /* @__PURE__ */ l(
    "div",
    {
      className: o([i, d(t)]),
      ...p(t)
    }
  );
}
const N = (e) => o(["Flex__item", m(e)]);
function v(e) {
  const { style: i, grow: t, order: r, shrink: s, basis: n, align: c, ...u } = e, x = n ?? // IE11: Set basis to specified width if it's known, which fixes certain
  // bugs when rendering tables inside the flex.
  e.width ?? // If grow is used, basis should be set to 0 to be consistent with
  // flex css shorthand `flex: 1`.
  (t !== void 0 ? 0 : void 0);
  return a({
    style: {
      ...i,
      minWidth: t !== void 0 && 0,
      minHeight: t !== void 0 && 0,
      flexGrow: t !== void 0 && Number(t),
      flexShrink: s !== void 0 && Number(s),
      flexBasis: f(x),
      order: r,
      alignSelf: c
    },
    ...u
  });
}
function g(e) {
  const { className: i, ...t } = e;
  return /* @__PURE__ */ l(
    "div",
    {
      className: o([i, N(e)]),
      ...v(t)
    }
  );
}
F.Item = g;
export {
  F as Flex,
  d as computeFlexClassName,
  N as computeFlexItemClassName,
  v as computeFlexItemProps,
  p as computeFlexProps
};
