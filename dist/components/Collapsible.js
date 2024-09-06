import { jsxs as n, jsx as e } from "react/jsx-runtime";
import { useState as p } from "react";
import { Box as t } from "./Box.js";
import { Button as b } from "./Button.js";
function x(o) {
  const {
    children: r,
    child_mt: s = 1,
    color: m,
    title: a,
    buttons: c,
    icon: i,
    ...d
  } = o, [l, h] = p(o.open);
  return /* @__PURE__ */ n(t, { mb: 1, children: [
    /* @__PURE__ */ n("div", { className: "Table", children: [
      /* @__PURE__ */ e("div", { className: "Table__cell", children: /* @__PURE__ */ e(
        b,
        {
          fluid: !0,
          color: m,
          icon: i || (l ? "chevron-down" : "chevron-right"),
          onClick: () => h(!l),
          ...d,
          children: a
        }
      ) }),
      c && /* @__PURE__ */ e("div", { className: "Table__cell Table__cell--collapsing", children: c })
    ] }),
    l && /* @__PURE__ */ e(t, { mt: s, children: r })
  ] });
}
export {
  x as Collapsible
};
