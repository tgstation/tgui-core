import { jsx as o, jsxs as e } from "react/jsx-runtime";
import { Box as r } from "./Box.js";
import { Button as s } from "./Button.js";
function d(i) {
  const { title: n, onClose: t, children: c, width: l, height: h } = i;
  return /* @__PURE__ */ o("div", { className: "Dialog", children: /* @__PURE__ */ e(r, { className: "Dialog__content", width: l || "370px", height: h, children: [
    /* @__PURE__ */ e("div", { className: "Dialog__header", children: [
      /* @__PURE__ */ o("div", { className: "Dialog__title", children: n }),
      /* @__PURE__ */ o(r, { mr: 2, children: /* @__PURE__ */ o(
        s,
        {
          mr: "-3px",
          width: "26px",
          lineHeight: "22px",
          textAlign: "center",
          color: "transparent",
          icon: "window-close-o",
          tooltip: "Close",
          tooltipPosition: "bottom-start",
          onClick: t
        }
      ) })
    ] }),
    c
  ] }) });
}
function a(i) {
  const { onClick: n, children: t } = i;
  return /* @__PURE__ */ o(
    s,
    {
      onClick: n,
      className: "Dialog__button",
      verticalAlignContent: "middle",
      children: t
    }
  );
}
d.Button = a;
function p(i) {
  const { documentName: n, onSave: t, onDiscard: c, onClose: l } = i;
  return /* @__PURE__ */ e(d, { title: "Notepad", onClose: l, children: [
    /* @__PURE__ */ e("div", { className: "Dialog__body", children: [
      "Do you want to save changes to ",
      n,
      "?"
    ] }),
    /* @__PURE__ */ e("div", { className: "Dialog__footer", children: [
      /* @__PURE__ */ o(a, { onClick: t, children: "Save" }),
      /* @__PURE__ */ o(a, { onClick: c, children: "Don't Save" }),
      /* @__PURE__ */ o(a, { onClick: l, children: "Cancel" })
    ] })
  ] });
}
export {
  d as Dialog,
  p as UnsavedChangesDialog
};
