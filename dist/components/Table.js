import { jsx as s } from "react/jsx-runtime";
import { classes as t } from "../common/react.js";
import { computeBoxClassName as n, computeBoxProps as r } from "./Box.js";
import '../assets/Table.css';const m = "_table_1hctn_5", d = "_collapsing_1hctn_13", p = "_row_1hctn_17", g = "_cell_1hctn_21", w = "_row__header_1hctn_32", b = "_cell__header_1hctn_33", u = "_cell__collapsing_1hctn_38", e = {
  table: m,
  collapsing: d,
  row: p,
  cell: g,
  row__header: w,
  cell__header: b,
  cell__collapsing: u
};
function h(l) {
  const { className: c, collapsing: o, children: _, ...a } = l;
  return /* @__PURE__ */ s(
    "table",
    {
      className: t([
        e.table,
        o && e.collapsing,
        c,
        n(a)
      ]),
      ...r(a),
      children: /* @__PURE__ */ s("tbody", { children: _ })
    }
  );
}
function N(l) {
  const { className: c, header: o, ..._ } = l;
  return /* @__PURE__ */ s(
    "tr",
    {
      className: t([
        e.row,
        o && e.row__header,
        c,
        n(l)
      ]),
      ...r(_)
    }
  );
}
h.Row = N;
function f(l) {
  const { className: c, collapsing: o, colSpan: _, header: a, ...i } = l;
  return /* @__PURE__ */ s(
    "td",
    {
      className: t([
        e.cell,
        o && e.cell__collapsing,
        a && e.cell__header,
        c,
        n(l)
      ]),
      colSpan: _,
      ...r(i)
    }
  );
}
h.Cell = f;
export {
  h as Table,
  f as TableCell,
  N as TableRow
};
