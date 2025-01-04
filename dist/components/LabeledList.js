import { jsx as l, jsxs as d } from "react/jsx-runtime";
import { classes as c } from "../common/react.js";
import { unit as g } from "../common/ui.js";
import { Box as r } from "./Box.js";
import { Divider as x } from "./Divider.js";
import { Tooltip as N } from "./Tooltip.js";
function b(e) {
  const { children: t } = e;
  return /* @__PURE__ */ l("table", { className: "LabeledList", children: /* @__PURE__ */ l("tbody", { children: t }) });
}
function v(e) {
  const {
    className: t,
    label: o,
    labelColor: m = "label",
    labelWrap: L,
    color: p,
    textAlign: _,
    buttons: a,
    content: f,
    children: h,
    verticalAlign: s = "baseline",
    tooltip: n
  } = e;
  let i;
  o && (i = o, typeof o == "string" && (i += ":")), n !== void 0 && (i = /* @__PURE__ */ l(N, { content: n, children: /* @__PURE__ */ l(
    r,
    {
      as: "span",
      style: {
        borderBottom: "2px dotted rgba(255, 255, 255, 0.8)"
      },
      children: i
    }
  ) }));
  const u = /* @__PURE__ */ l(
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
        colSpan: a ? void 0 : 2,
        verticalAlign: s,
        children: [
          f,
          h
        ]
      }
    ),
    a && /* @__PURE__ */ l("td", { className: "LabeledList__cell LabeledList__buttons", children: a })
  ] });
}
function y(e) {
  const t = e.size ? g(Math.max(0, e.size - 1)) : 0;
  return /* @__PURE__ */ l("tr", { className: "LabeledList__row", children: /* @__PURE__ */ l(
    "td",
    {
      colSpan: 3,
      style: {
        paddingTop: t,
        paddingBottom: t
      },
      children: /* @__PURE__ */ l(x, {})
    }
  ) });
}
((e) => {
  e.Divider = y, e.Item = v;
})(b || (b = {}));
export {
  b as LabeledList
};
