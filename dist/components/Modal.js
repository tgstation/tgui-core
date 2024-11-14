import { jsx as r } from "react/jsx-runtime";
import { classes as t } from "../common/react.js";
import { computeBoxClassName as a, computeBoxProps as c } from "./Box.js";
import { Dimmer as i } from "./Dimmer.js";
function f(m) {
  const { className: s, children: e, ...o } = m;
  return /* @__PURE__ */ r(i, { children: /* @__PURE__ */ r(
    "div",
    {
      className: t(["Modal", s, a(o)]),
      ...c(o),
      children: e
    }
  ) });
}
export {
  f as Modal
};
