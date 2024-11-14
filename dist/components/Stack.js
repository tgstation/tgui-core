import { jsx as i } from "react/jsx-runtime";
import { classes as a } from "../common/react.js";
import { computeBoxClassName as o } from "./Box.js";
import { computeFlexClassName as k, computeFlexProps as v, computeFlexItemProps as m } from "./Flex.js";
function n(r) {
  const { className: c, vertical: e, fill: t, reverse: s, zebra: l, ...d } = r, f = e ? "column" : "row", S = s ? "-reverse" : "";
  return /* @__PURE__ */ i(
    "div",
    {
      className: a([
        "Stack",
        t && "Stack--fill",
        e ? "Stack--vertical" : "Stack--horizontal",
        l && "Stack--zebra",
        s && `Stack--reverse${e ? "--vertical" : ""}`,
        c,
        k(r)
      ]),
      ...v({
        direction: `${f}${S}`,
        ...d
      })
    }
  );
}
function u(r) {
  const { className: c, innerRef: e, ...t } = r;
  return /* @__PURE__ */ i(
    "div",
    {
      className: a(["Stack__item", c, o(t)]),
      ref: e,
      ...m(t)
    }
  );
}
n.Item = u;
function p(r) {
  const { className: c, hidden: e, ...t } = r;
  return /* @__PURE__ */ i(
    "div",
    {
      className: a([
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
n.Divider = p;
export {
  n as Stack
};
