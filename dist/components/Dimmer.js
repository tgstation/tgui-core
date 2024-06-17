import { jsx as m } from "react/jsx-runtime";
import { classes as o } from "../common/react.js";
import { Box as t } from "./Box.js";
import '../assets/Dimmer.css';const c = "_dimmer_ldz2o_5", n = {
  dimmer: c
};
function _(r) {
  const { className: e, children: s, ...i } = r;
  return /* @__PURE__ */ m(t, { className: o([n.dimmer, e]), ...i, children: /* @__PURE__ */ m("div", { className: "Dimmer__inner", children: s }) });
}
export {
  _ as Dimmer
};
