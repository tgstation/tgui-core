import { jsx as a, jsxs as u } from "react/jsx-runtime";
import { classes as T, canRender as d } from "../common/react.js";
import { computeBoxClassName as f, computeBoxProps as h } from "../common/ui.js";
import { Icon as N } from "./Icon.js";
function v(l) {
  const { className: c, vertical: i, fill: o, fluid: e, children: r, ...s } = l;
  return /* @__PURE__ */ a(
    "div",
    {
      className: T([
        "Tabs",
        i ? "Tabs--vertical" : "Tabs--horizontal",
        o && "Tabs--fill",
        e && "Tabs--fluid",
        c,
        f(s)
      ]),
      ...h(s),
      children: r
    }
  );
}
function x(l) {
  const {
    className: c,
    selected: i,
    color: o,
    icon: e,
    iconSpin: r,
    leftSlot: s,
    rightSlot: t,
    children: p,
    onClick: n,
    ...m
  } = l, _ = (b) => {
    n && (n(b), b.target.blur());
  };
  return /* @__PURE__ */ u(
    "div",
    {
      className: T([
        "Tab",
        "Tabs__Tab",
        `Tab--color--${o}`,
        i && "Tab--selected",
        c,
        f(m)
      ]),
      onClick: _,
      ...h(m),
      children: [
        d(s) && /* @__PURE__ */ a("div", { className: "Tab__left", children: s }) || !!e && /* @__PURE__ */ a("div", { className: "Tab__left", children: /* @__PURE__ */ a(N, { name: e, spin: r }) }),
        /* @__PURE__ */ a("div", { className: "Tab__text", children: p }),
        d(t) && /* @__PURE__ */ a("div", { className: "Tab__right", children: t })
      ]
    }
  );
}
v.Tab = x;
export {
  v as Tabs
};
