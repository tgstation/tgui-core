import { jsx as t, jsxs as l } from "react/jsx-runtime";
import { Box as e } from "./Box.js";
import { Button as r } from "./Button.js";
function d(o) {
  const { title: i, onClose: n, children: c, width: a, height: s } = o;
  return /* @__PURE__ */ t("div", { className: "Dialog", children: /* @__PURE__ */ l(e, { className: "Dialog__content", width: a || "370px", height: s, children: [
    /* @__PURE__ */ l("div", { className: "Dialog__header", children: [
      /* @__PURE__ */ t("div", { className: "Dialog__title", children: i }),
      /* @__PURE__ */ t(e, { mr: 2, children: /* @__PURE__ */ t(
        r,
        {
          color: "transparent",
          icon: "window-close-o",
          lineHeight: "22px",
          mr: "-3px",
          onClick: n,
          textAlign: "center",
          tooltip: "Close",
          tooltipPosition: "bottom-start",
          width: "26px"
        }
      ) })
    ] }),
    c
  ] }) });
}
function m(o) {
  const { onClick: i, children: n } = o;
  return /* @__PURE__ */ t(
    r,
    {
      onClick: i,
      className: "Dialog__button",
      verticalAlignContent: "middle",
      children: n
    }
  );
}
d.Button = m;
export {
  d as Dialog
};
