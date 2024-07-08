import { jsx as t, jsxs as c } from "react/jsx-runtime";
import { Box as s } from "./Box.js";
import { Button as a } from "./Button.js";
import '../assets/Dialog.css';const m = "_dialog_1hdv8_5", v = "_content_1hdv8_17", u = "_header_1hdv8_25", g = "_title_1hdv8_33", p = "_body_1hdv8_42", C = "_footer_1hdv8_47", f = "_button_1hdv8_55", o = {
  dialog: m,
  content: v,
  header: u,
  title: g,
  body: p,
  footer: C,
  button: f
};
function h(n) {
  const { title: e, onClose: i, children: r, width: l, height: _ } = n;
  return /* @__PURE__ */ t("div", { className: o.dialog, children: /* @__PURE__ */ c(s, { className: o.content, width: l || "370px", height: _, children: [
    /* @__PURE__ */ c("div", { className: o.header, children: [
      /* @__PURE__ */ t("div", { className: o.title, children: e }),
      /* @__PURE__ */ t(s, { mr: 2, children: /* @__PURE__ */ t(
        a,
        {
          mr: "-3px",
          width: "26px",
          lineHeight: "22px",
          textAlign: "center",
          color: "transparent",
          icon: "window-close-o",
          tooltip: "Close",
          tooltipPosition: "bottom-start",
          onClick: i
        }
      ) })
    ] }),
    r
  ] }) });
}
function d(n) {
  const { onClick: e, children: i } = n;
  return /* @__PURE__ */ t(
    a,
    {
      onClick: e,
      className: o.button,
      verticalAlignContent: "middle",
      children: i
    }
  );
}
h.Button = d;
function w(n) {
  const { documentName: e, onSave: i, onDiscard: r, onClose: l } = n;
  return /* @__PURE__ */ c(h, { title: "Notepad", onClose: l, children: [
    /* @__PURE__ */ c("div", { className: o.body, children: [
      "Do you want to save changes to ",
      e,
      "?"
    ] }),
    /* @__PURE__ */ c("div", { className: o.footer, children: [
      /* @__PURE__ */ t(d, { onClick: i, children: "Save" }),
      /* @__PURE__ */ t(d, { onClick: r, children: "Don't Save" }),
      /* @__PURE__ */ t(d, { onClick: l, children: "Cancel" })
    ] })
  ] });
}
export {
  h as Dialog,
  w as UnsavedChangesDialog
};
