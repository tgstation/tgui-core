import { jsx as r } from "react/jsx-runtime";
import { classes as e } from "../common/react.js";
import '../assets/Divider.css';const d = "_horizontal_1dhv5_9", c = "_hidden_1dhv5_12", s = "_vertical_1dhv5_16", i = {
  horizontal: d,
  hidden: c,
  vertical: s
};
function l(t) {
  const { hidden: o, vertical: n } = t;
  return /* @__PURE__ */ r(
    "div",
    {
      className: e([
        o && i.hidden,
        n ? i.vertical : i.horizontal
      ])
    }
  );
}
export {
  l as Divider
};
