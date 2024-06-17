import { jsx as t } from "react/jsx-runtime";
import { classes as s } from "../common/react.js";
import { computeBoxClassName as e, computeBoxProps as n } from "./Box.js";
import '../assets/ColorBox.css';const m = "_colorBox_110qz_5", a = {
  colorBox: m
};
function d(r) {
  const { content: c, children: x, className: l, ...o } = r;
  return o.color = c ? null : "default", o.backgroundColor = r.color || "default", /* @__PURE__ */ t(
    "div",
    {
      className: s([
        a.colorBox,
        l,
        e(o)
      ]),
      ...n(o),
      children: c || "."
    }
  );
}
export {
  d as ColorBox
};
