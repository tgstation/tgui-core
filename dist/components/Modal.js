import { jsx as m } from "react/jsx-runtime";
import { classes as e } from "../common/react.js";
import { computeBoxClassName as a, computeBoxProps as l } from "./Box.js";
import { Dimmer as c } from "./Dimmer.js";
import '../assets/Modal.css';const i = "_modal_1e7qt_9", d = {
  modal: i
};
function x(s) {
  const { className: r, children: t, ...o } = s;
  return /* @__PURE__ */ m(c, { children: /* @__PURE__ */ m(
    "div",
    {
      className: e([
        d.modal,
        r,
        a(o)
      ]),
      ...l(o),
      children: t
    }
  ) });
}
export {
  x as Modal
};
