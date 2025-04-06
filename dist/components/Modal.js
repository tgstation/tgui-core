import { jsx as s } from "react/jsx-runtime";
import { KEY as l, isEscape as n } from "../common/keys.js";
import { classes as f } from "../common/react.js";
import { computeBoxProps as p, computeBoxClassName as d } from "../common/ui.js";
import { Dimmer as u } from "./Dimmer.js";
function K(i) {
  const { className: a, children: t, onEnter: m, onEscape: r, ...e } = i;
  function c(o) {
    o.key === l.Enter && (m == null || m(o)), n(o.key) && (r == null || r(o));
  }
  return /* @__PURE__ */ s(u, { className: "Modal__dimmer", onKeyDown: c, children: /* @__PURE__ */ s(
    "div",
    {
      className: f(["Modal", a, d(e)]),
      ...p(e),
      children: t
    }
  ) });
}
export {
  K as Modal
};
