import { jsx as t } from "react/jsx-runtime";
import { classes as c } from "../common/react.js";
import { computeBoxProps as s, computeBoxClassName as m } from "../common/ui.js";
function d(r) {
  const { content: l, children: a, className: e, ...o } = r;
  return o.color = l ? null : "default", o.backgroundColor = r.color || "default", /* @__PURE__ */ t(
    "div",
    {
      className: c(["ColorBox", e, m(o)]),
      ...s(o),
      children: l || ""
    }
  );
}
export {
  d as ColorBox
};
