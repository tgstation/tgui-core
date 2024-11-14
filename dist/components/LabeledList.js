import { jsx as e, jsxs as d } from "react/jsx-runtime";
import { classes as c } from "../common/react.js";
import { Box as s, unit as g } from "./Box.js";
import { Divider as x } from "./Divider.js";
import { Tooltip as N } from "./Tooltip.js";
function b(l) {
  const { children: t } = l;
  return /* @__PURE__ */ e("table", { className: "LabeledList", children: /* @__PURE__ */ e("tbody", { children: t }) });
}
function v(l) {
  const {
    className: t,
    label: a,
    labelColor: L = "label",
    labelWrap: m,
    color: p,
    textAlign: _,
    buttons: o,
    content: h,
    children: f,
    verticalAlign: r = "baseline",
    tooltip: n
  } = l;
  let i;
  a && (i = a, typeof a == "string" && (i += ":")), n !== void 0 && (i = /* @__PURE__ */ e(N, { content: n, children: /* @__PURE__ */ e(
    s,
    {
      as: "span",
      style: {
        borderBottom: "2px dotted rgba(255, 255, 255, 0.8)"
      },
      children: i
    }
  ) }));
  const u = /* @__PURE__ */ e(
    s,
    {
      as: "td",
      color: L,
      className: c([
        "LabeledList__cell",
        // Kinda flipped because we want nowrap as default. Cleaner CSS this way though.
        !m && "LabeledList__label--nowrap"
      ]),
      verticalAlign: r,
      children: i
    }
  );
  return /* @__PURE__ */ d("tr", { className: c(["LabeledList__row", t]), children: [
    u,
    /* @__PURE__ */ d(
      s,
      {
        as: "td",
        color: p,
        textAlign: _,
        className: "LabeledList__cell",
        colSpan: o ? void 0 : 2,
        verticalAlign: r,
        children: [
          h,
          f
        ]
      }
    ),
    o && /* @__PURE__ */ e("td", { className: "LabeledList__cell LabeledList__buttons", children: o })
  ] });
}
b.Item = v;
function y(l) {
  const t = l.size ? g(Math.max(0, l.size - 1)) : 0;
  return /* @__PURE__ */ e("tr", { className: "LabeledList__row", children: /* @__PURE__ */ e(
    "td",
    {
      colSpan: 3,
      style: {
        paddingTop: t,
        paddingBottom: t
      },
      children: /* @__PURE__ */ e(x, {})
    }
  ) });
}
b.Divider = y;
export {
  b as LabeledList
};
