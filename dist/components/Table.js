import { jsx as c } from "react/jsx-runtime";
import { classes as r } from "../common/react.js";
import { computeBoxProps as t, computeBoxClassName as n } from "../common/ui.js";
function m(e) {
  const { className: l, collapsing: a, children: s, ...o } = e;
  return /* @__PURE__ */ c(
    "table",
    {
      className: r([
        "Table",
        a && "Table--collapsing",
        l,
        n(o)
      ]),
      ...t(o),
      children: /* @__PURE__ */ c("tbody", { children: s })
    }
  );
}
function b(e) {
  const { className: l, header: a, ...s } = e;
  return /* @__PURE__ */ c(
    "tr",
    {
      className: r([
        "Table__row",
        a && "Table__row--header",
        l,
        n(e)
      ]),
      ...t(s)
    }
  );
}
function _(e) {
  const { className: l, collapsing: a, colSpan: s, header: o, ...i } = e;
  return /* @__PURE__ */ c(
    "td",
    {
      className: r([
        "Table__cell",
        a && "Table__cell--collapsing",
        o && "Table__cell--header",
        l,
        n(e)
      ]),
      colSpan: s,
      ...t(i)
    }
  );
}
((e) => {
  e.Cell = _, e.Row = b;
})(m || (m = {}));
export {
  m as Table
};
