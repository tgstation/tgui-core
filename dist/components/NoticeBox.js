import { jsx as n } from "react/jsx-runtime";
import { classes as x } from "../common/react.js";
import { Box as a } from "./Box.js";
function f(e) {
  const { className: c, color: o, info: t, success: s, warning: m, danger: r, ...i } = e;
  return /* @__PURE__ */ n(
    a,
    {
      className: x([
        "NoticeBox",
        o && `NoticeBox--color--${o}`,
        t && "NoticeBox--type--info",
        s && "NoticeBox--type--success",
        r && "NoticeBox--type--danger",
        c
      ]),
      ...i
    }
  );
}
export {
  f as NoticeBox
};
