import { jsx as a, jsxs as N } from "react/jsx-runtime";
import { classes as f, canRender as d } from "../common/react.js";
import { computeBoxClassName as h, computeBoxProps as p } from "../common/ui.js";
import { Icon as v } from "./Icon.js";
function T(e) {
  const { className: i, vertical: c, fill: o, fluid: s, children: r, ...l } = e;
  return /* @__PURE__ */ a(
    "div",
    {
      className: f([
        "Tabs",
        c ? "Tabs--vertical" : "Tabs--horizontal",
        o && "Tabs--fill",
        s && "Tabs--fluid",
        i,
        h(l)
      ]),
      ...p(l),
      children: r
    }
  );
}
function x(e) {
  const {
    className: i,
    selected: c,
    color: o,
    icon: s,
    iconSpin: r,
    leftSlot: l,
    rightSlot: t,
    children: u,
    onClick: n,
    ...m
  } = e;
  function _(b) {
    n && (n(b), b.target.blur());
  }
  return /* @__PURE__ */ N(
    "div",
    {
      className: f([
        "Tab",
        "Tabs__Tab",
        `Tab--color--${o}`,
        c && "Tab--selected",
        i,
        h(m)
      ]),
      onClick: _,
      ...p(m),
      children: [
        d(l) && /* @__PURE__ */ a("div", { className: "Tab__left", children: l }) || !!s && /* @__PURE__ */ a("div", { className: "Tab__left", children: /* @__PURE__ */ a(v, { name: s, spin: r }) }),
        /* @__PURE__ */ a("div", { className: "Tab__text", children: u }),
        d(t) && /* @__PURE__ */ a("div", { className: "Tab__right", children: t })
      ]
    }
  );
}
((e) => {
  e.Tab = x;
})(T || (T = {}));
export {
  T as Tabs
};
