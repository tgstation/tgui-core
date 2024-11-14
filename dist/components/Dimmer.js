import { jsx as r } from "react/jsx-runtime";
import { classes as o } from "../common/react.js";
import { Box as c } from "./Box.js";
function l(m) {
  const { className: e, children: s, ...i } = m;
  return /* @__PURE__ */ r(c, { className: o(["Dimmer", e]), ...i, children: /* @__PURE__ */ r("div", { className: "Dimmer__inner", children: s }) });
}
export {
  l as Dimmer
};
