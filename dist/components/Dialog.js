import { jsx as t, jsxs as c } from "react/jsx-runtime";
import { Box as r } from "./Box.js";
import { Button as a } from "./Button.js";
import '../assets/Dialog.css';const m = "_dialog_1hdv8_5", v = "_content_1hdv8_17", g = "_header_1hdv8_25", p = "_title_1hdv8_33", u = "_body_1hdv8_42", C = "_footer_1hdv8_47", b = "_button_1hdv8_55", o = {
  dialog: m,
  content: v,
  header: g,
  title: p,
  body: u,
  footer: C,
  button: b
}, h = (e) => {
  const { title: n, onClose: i, children: s, width: l, height: _ } = e;
  return /* @__PURE__ */ t("div", { className: o.dialog, children: /* @__PURE__ */ c(r, { className: o.content, width: l || "370px", height: _, children: [
    /* @__PURE__ */ c("div", { className: o.header, children: [
      /* @__PURE__ */ t("div", { className: o.title, children: n }),
      /* @__PURE__ */ t(r, { mr: 2, children: /* @__PURE__ */ t(
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
    s
  ] }) });
}, d = (e) => {
  const { onClick: n, children: i } = e;
  return /* @__PURE__ */ t(
    a,
    {
      onClick: n,
      className: o.button,
      verticalAlignContent: "middle",
      children: i
    }
  );
};
h.Button = d;
const w = (e) => {
  const { documentName: n, onSave: i, onDiscard: s, onClose: l } = e;
  return /* @__PURE__ */ c(h, { title: "Notepad", onClose: l, children: [
    /* @__PURE__ */ c("div", { className: o.body, children: [
      "Do you want to save changes to ",
      n,
      "?"
    ] }),
    /* @__PURE__ */ c("div", { className: o.footer, children: [
      /* @__PURE__ */ t(d, { onClick: i, children: "Save" }),
      /* @__PURE__ */ t(d, { onClick: s, children: "Don't Save" }),
      /* @__PURE__ */ t(d, { onClick: l, children: "Cancel" })
    ] })
  ] });
};
export {
  h as Dialog,
  w as UnsavedChangesDialog
};
