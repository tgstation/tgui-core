import { jsx as i } from "react/jsx-runtime";
import { useRef as S } from "react";
import { classes as s } from "../common/react.js";
import { computeBoxClassName as o } from "../common/ui.js";
import { computeFlexProps as k, computeFlexClassName as v, computeFlexItemProps as m } from "./Flex.js";
function l(r) {
  const { className: c, vertical: e, fill: t, reverse: a, zebra: n, ...d } = r, u = e ? "column" : "row", f = a ? "-reverse" : "";
  return /* @__PURE__ */ i(
    "div",
    {
      className: s([
        "Stack",
        t && "Stack--fill",
        e ? "Stack--vertical" : "Stack--horizontal",
        n && "Stack--zebra",
        a && `Stack--reverse${e ? "--vertical" : ""}`,
        c,
        v(r)
      ]),
      ...k({
        direction: `${u}${f}`,
        ...d
      })
    }
  );
}
function p(r) {
  const { className: c, innerRef: e, ...t } = r, a = S((e == null ? void 0 : e.current) ?? null);
  return /* @__PURE__ */ i(
    "div",
    {
      className: s(["Stack__item", c, o(t)]),
      ref: a,
      ...m(t)
    }
  );
}
l.Item = p;
function x(r) {
  const { className: c, hidden: e, ...t } = r;
  return /* @__PURE__ */ i(
    "div",
    {
      className: s([
        "Stack__item",
        "Stack__divider",
        e && "Stack__divider--hidden",
        c,
        o(t)
      ]),
      ...m(t)
    }
  );
}
l.Divider = x;
export {
  l as Stack
};
