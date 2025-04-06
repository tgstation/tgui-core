import { jsx as r } from "react/jsx-runtime";
import { Floating as i } from "./Floating.js";
function l(o) {
  const { content: t, children: n, position: e } = o;
  return /* @__PURE__ */ r(
    i,
    {
      hoverOpen: !0,
      content: t,
      contentClasses: "Tooltip",
      placement: e,
      children: n
    }
  );
}
export {
  l as Tooltip
};
