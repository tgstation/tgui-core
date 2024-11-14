import { jsxs as l, jsx as e } from "react/jsx-runtime";
import { Box as t } from "./Box.js";
function m(i) {
  const { children: c, titleStyle: n, titleSubtext: s, title: o, textStyle: r, style: a } = i;
  return /* @__PURE__ */ l(t, { style: a, children: [
    /* @__PURE__ */ l(t, { className: "Section__title", style: n, children: [
      /* @__PURE__ */ e(t, { className: "Section__titleText", style: r, children: o }),
      /* @__PURE__ */ e("div", { className: "Section__buttons", children: s }),
      " "
    ] }),
    /* @__PURE__ */ e(t, { className: "Section__rest", children: /* @__PURE__ */ e(t, { className: "Section__content", children: c }) })
  ] });
}
export {
  m as StyleableSection
};
