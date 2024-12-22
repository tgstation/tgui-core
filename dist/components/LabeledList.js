import { jsx as e, jsxs as d } from "react/jsx-runtime";
import { classes as c } from "../common/react.js";
import { unit as g } from "../common/ui.js";
import { Box as r } from "./Box.js";
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
    labelColor: m = "label",
    labelWrap: L,
    color: p,
    textAlign: _,
    buttons: o,
    content: f,
    children: h,
    verticalAlign: s = "baseline",
    tooltip: n
  } = l;
  let i;
  a && (i = a, typeof a == "string" && (i += ":")), n !== void 0 && (i = /* @__PURE__ */ e(N, { content: n, children: /* @__PURE__ */ e(
    r,
    {
      as: "span",
      style: {
        borderBottom: "2px dotted rgba(255, 255, 255, 0.8)"
      },
      children: i
    }
  ) }));
  const u = /* @__PURE__ */ e(
    r,
    {
      as: "td",
      color: m,
      className: c([
        "LabeledList__cell",
        // Kinda flipped because we want nowrap as default. Cleaner CSS this way though.
        !L && "LabeledList__label--nowrap"
      ]),
      verticalAlign: s,
      children: i
    }
  );
  return /* @__PURE__ */ d("tr", { className: c(["LabeledList__row", t]), children: [
    u,
    /* @__PURE__ */ d(
      r,
      {
        as: "td",
        color: p,
        textAlign: _,
        className: "LabeledList__cell",
        colSpan: o ? void 0 : 2,
        verticalAlign: s,
        children: [
          f,
          h
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
