import { jsx as l } from "react/jsx-runtime";
import { classes as o } from "../common/react.js";
import { computeFlexClassName as f, computeFlexProps as w, computeFlexItemProps as _ } from "./Flex.js";
import { computeBoxClassName as n } from "./Box.js";
import '../assets/Stack.css';const h = "_fill_wrul1_9", p = "_horizontal_wrul1_13", z = "_item_wrul1_13", x = "_vertical_wrul1_20", N = "_reverse_wrul1_27", b = "_reverse__vertical_wrul1_35", S = "_zebra_wrul1_43", k = "_divider_wrul1_47", F = "_divider__hidden_wrul1_47", e = {
  fill: h,
  horizontal: p,
  item: z,
  vertical: x,
  reverse: N,
  reverse__vertical: b,
  zebra: S,
  divider: k,
  divider__hidden: F
};
function a(t) {
  const { className: s, vertical: r, fill: i, reverse: c, zebra: d, ...v } = t, m = r ? "column" : "row", u = c ? "-reverse" : "";
  return /* @__PURE__ */ l(
    "div",
    {
      className: o([
        i && e.fill,
        r ? e.vertical : e.horizontal,
        d && e.zebra,
        c && e[`reverse${r ? "__vertical" : ""}`],
        s,
        f(t)
      ]),
      ...w({
        direction: `${m}${u}`,
        ...v
      })
    }
  );
}
function I(t) {
  const { className: s, innerRef: r, ...i } = t;
  return /* @__PURE__ */ l(
    "div",
    {
      className: o([e.item, s, n(i)]),
      ref: r,
      ..._(i)
    }
  );
}
a.Item = I;
function P(t) {
  const { className: s, hidden: r, ...i } = t;
  return /* @__PURE__ */ l(
    "div",
    {
      className: o([
        e.item,
        e.divider,
        r && e.divider__hidden,
        s,
        n(i)
      ]),
      ..._(i)
    }
  );
}
a.Divider = P;
export {
  a as Stack
};
