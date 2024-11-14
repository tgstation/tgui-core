import { jsx as d } from "react/jsx-runtime";
import { classes as o } from "../common/react.js";
function n(i) {
  const { hidden: r, vertical: e } = i;
  return /* @__PURE__ */ d(
    "div",
    {
      className: o([
        "Divider",
        r && "Divider--hidden",
        e ? "Divider--vertical" : "Divider--horizontal"
      ])
    }
  );
}
export {
  n as Divider
};
