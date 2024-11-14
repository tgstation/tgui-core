import { jsx as c } from "react/jsx-runtime";
import { classes as r } from "../common/react.js";
import { computeBoxClassName as t, computeBoxProps as n } from "./Box.js";
function m(e) {
  const { className: l, collapsing: a, children: s, ...o } = e;
  return /* @__PURE__ */ c(
    "table",
    {
      className: r([
        "Table",
        a && "Table--collapsing",
        l,
        t(o)
      ]),
      ...n(o),
      children: /* @__PURE__ */ c("tbody", { children: s })
    }
  );
}
function i(e) {
  const { className: l, header: a, ...s } = e;
  return /* @__PURE__ */ c(
    "tr",
    {
      className: r([
        "Table__row",
        a && "Table__row--header",
        l,
        t(e)
      ]),
      ...n(s)
    }
  );
}
m.Row = i;
function T(e) {
  const { className: l, collapsing: a, colSpan: s, header: o, ...b } = e;
  return /* @__PURE__ */ c(
    "td",
    {
      className: r([
        "Table__cell",
        a && "Table__cell--collapsing",
        o && "Table__cell--header",
        l,
        t(e)
      ]),
      colSpan: s,
      ...n(b)
    }
  );
}
m.Cell = T;
export {
  m as Table,
  T as TableCell,
  i as TableRow
};
