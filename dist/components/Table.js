import { jsx as c } from "react/jsx-runtime";
import { classes as r } from "../common/react.js";
import { computeBoxClassName as t, computeBoxProps as n } from "../common/ui.js";
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
function b(e) {
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
        t(e)
      ]),
      colSpan: s,
      ...n(i)
    }
  );
}
((e) => {
  e.Cell = _, e.Row = b;
})(m || (m = {}));
export {
  m as Table
};
