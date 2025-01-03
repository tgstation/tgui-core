import { jsx as o } from "react/jsx-runtime";
import { classes as a } from "../common/react.js";
const m = ({
  className: r,
  color: e,
  left: t,
  top: l = 0.5
}) => {
  const s = a(["react-colorful__pointer", r]), c = {
    top: `${l * 100}%`,
    left: `${t * 100}%`
  };
  return /* @__PURE__ */ o("div", { className: s, style: c, children: /* @__PURE__ */ o(
    "div",
    {
      className: "react-colorful__pointer-fill",
      style: { backgroundColor: e }
    }
  ) });
};
export {
  m as Pointer
};
