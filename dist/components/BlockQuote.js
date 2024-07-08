import { jsx as c } from "react/jsx-runtime";
import { classes as e } from "../common/react.js";
import { Box as r } from "./Box.js";
import '../assets/BlockQuote.css';const l = "_blockQuote_14fvy_13", m = {
  blockQuote: l
};
function f(o) {
  const { className: t, ...s } = o;
  return /* @__PURE__ */ c(r, { className: e([m.blockQuote, t]), ...s });
}
export {
  f as BlockQuote
};
