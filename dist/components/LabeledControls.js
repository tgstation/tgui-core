import { jsx as t, jsxs as o } from "react/jsx-runtime";
import { Flex as e } from "./Flex.js";
function s(n) {
  const { children: r, wrap: l, ...c } = n;
  return /* @__PURE__ */ t(
    e,
    {
      mx: -0.5,
      wrap: l,
      align: "stretch",
      justify: "space-between",
      ...c,
      children: r
    }
  );
}
function m(n) {
  const { label: r, children: l, mx: c = 1, ...i } = n;
  return /* @__PURE__ */ t(e.Item, { mx: c, children: /* @__PURE__ */ o(
    e,
    {
      height: "100%",
      direction: "column",
      align: "center",
      textAlign: "center",
      justify: "space-between",
      ...i,
      children: [
        /* @__PURE__ */ t(e.Item, {}),
        /* @__PURE__ */ t(e.Item, { children: l }),
        /* @__PURE__ */ t(e.Item, { color: "label", children: r })
      ]
    }
  ) });
}
s.Item = m;
export {
  s as LabeledControls
};
