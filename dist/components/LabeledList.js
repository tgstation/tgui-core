import { jsx as l, jsxs as d } from "react/jsx-runtime";
import { classes as r } from "../common/react.js";
import { Box as i, unit as g } from "./Box.js";
import { Divider as x } from "./Divider.js";
import { Tooltip as N } from "./Tooltip.js";
import '../assets/LabeledList.css';const v = "_labeledList_pb6nb_9", y = "_row_pb6nb_20", B = "_cell_pb6nb_24", D = "_label__nowrap_pb6nb_36", j = "_buttons_pb6nb_42", o = {
  labeledList: v,
  row: y,
  cell: B,
  label__nowrap: D,
  buttons: j
}, p = (e) => {
  const { children: t } = e;
  return /* @__PURE__ */ l("table", { className: "LabeledList", children: t });
}, z = (e) => {
  const {
    className: t,
    label: s,
    labelColor: _ = "label",
    labelWrap: m,
    color: L,
    textAlign: h,
    buttons: a,
    content: f,
    children: u,
    verticalAlign: c = "baseline",
    tooltip: b
  } = e;
  let n;
  s && (n = s, typeof s == "string" && (n += ":")), b !== void 0 && (n = /* @__PURE__ */ l(N, { content: b, children: /* @__PURE__ */ l(
    i,
    {
      as: "span",
      style: {
        borderBottom: "2px dotted rgba(255, 255, 255, 0.8)"
      },
      children: n
    }
  ) }));
  let w = /* @__PURE__ */ l(
    i,
    {
      as: "td",
      color: _,
      className: r([
        o.cell,
        // Kinda flipped because we want nowrap as default. Cleaner CSS this way though.
        !m && o.label__nowrap
      ]),
      verticalAlign: c,
      children: n
    }
  );
  return /* @__PURE__ */ d("tr", { className: r([o.row, t]), children: [
    w,
    /* @__PURE__ */ d(
      i,
      {
        as: "td",
        color: L,
        textAlign: h,
        className: o.cell,
        colSpan: a ? void 0 : 2,
        verticalAlign: c,
        children: [
          f,
          u
        ]
      }
    ),
    a && /* @__PURE__ */ l("td", { className: r([o.cell, o.buttons]), children: a })
  ] });
}, A = (e) => {
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
};
p.Item = z;
p.Divider = A;
export {
  p as LabeledList
};
