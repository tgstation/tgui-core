import { jsxs as i, jsx as e } from "react/jsx-runtime";
import { useState as h } from "react";
import { Box as r } from "./Box.js";
import { Button as p } from "./Button.js";
function v(o) {
  const { children: t, color: s, title: a, buttons: n, icon: c, ...m } = o, [l, d] = h(o.open);
  return /* @__PURE__ */ i(r, { mb: 1, children: [
    /* @__PURE__ */ i("div", { className: "Table", children: [
      /* @__PURE__ */ e("div", { className: "Table__cell", children: /* @__PURE__ */ e(
        p,
        {
          fluid: !0,
          color: s,
          icon: c || (l ? "chevron-down" : "chevron-right"),
          onClick: () => d(!l),
          ...m,
          children: a
        }
      ) }),
      n && /* @__PURE__ */ e("div", { className: "Table__cell Table__cell--collapsing", children: n })
    ] }),
    l && /* @__PURE__ */ e(r, { mt: 1, children: t })
  ] });
}
export {
  v as Collapsible
};
