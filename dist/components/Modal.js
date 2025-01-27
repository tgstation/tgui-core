import { jsx as i } from "react/jsx-runtime";
import { KEY as n, isEscape as f } from "../common/keys.js";
import { classes as l } from "../common/react.js";
import { computeBoxClassName as p, computeBoxProps as d } from "../common/ui.js";
import { Dimmer as u } from "./Dimmer.js";
function N(s) {
  const { className: t, children: a, onEnter: r, onEscape: m, ...e } = s;
  function c(o) {
    o.key === n.Enter && (r == null || r(o)), f(o.key) && (m == null || m(o));
  }
  return /* @__PURE__ */ i(u, { onKeyDown: c, children: /* @__PURE__ */ i(
    "div",
    {
      className: l(["Modal", t, p(e)]),
      ...d(e),
      children: a
    }
  ) });
}
export {
  N as Modal
};
