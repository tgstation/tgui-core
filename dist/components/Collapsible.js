import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { useState as b } from "react";
import { Box as n } from "./Box.js";
import { Button as u } from "./Button.js";
function T(o) {
  const {
    children: r,
    child_mt: s = 1,
    childStyles: m,
    color: a,
    title: d,
    buttons: t,
    icon: c,
    ...h
  } = o, [l, p] = b(o.open);
  return /* @__PURE__ */ i(n, { mb: 1, children: [
    /* @__PURE__ */ i("div", { className: "Table", children: [
      /* @__PURE__ */ e("div", { className: "Table__cell", children: /* @__PURE__ */ e(
        u,
        {
          fluid: !0,
          color: a,
          icon: c || (l ? "chevron-down" : "chevron-right"),
          onClick: () => p(!l),
          ...h,
          children: d
        }
      ) }),
      t && /* @__PURE__ */ e("div", { className: "Table__cell Table__cell--collapsing", children: t })
    ] }),
    l && /* @__PURE__ */ e(n, { mt: s, style: m, children: r })
  ] });
}
export {
  T as Collapsible
};
