import { jsxs as s, jsx as l } from "react/jsx-runtime";
import { s as t } from "../Section.module-CLVHJ4yA.js";
import { Box as e } from "./Box.js";
function h(i) {
  const { children: r, titleStyle: c, titleSubtext: n, title: o, textStyle: a, style: m } = i;
  return /* @__PURE__ */ s(e, { style: m, children: [
    /* @__PURE__ */ s(e, { className: t.title, style: c, children: [
      /* @__PURE__ */ l(e, { className: t.titleText, style: a, children: o }),
      /* @__PURE__ */ l("div", { className: t.buttons, children: n })
    ] }),
    /* @__PURE__ */ l(e, { className: t.rest, children: /* @__PURE__ */ l(e, { className: t.content, children: r }) })
  ] });
}
export {
  h as StyleableSection
};
