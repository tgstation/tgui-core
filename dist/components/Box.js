import { createElement as n } from "react";
import { computeBoxClassName as s, computeBoxProps as l, computeTwClass as u } from "../common/ui.js";
function x(t) {
  const { as: m = "div", className: e, children: c, tw: r, ...o } = t, a = e ? `${e} ${s(o)}` : s(o), p = l({
    ...o,
    ...u(r)
  });
  return n(
    m,
    {
      ...p,
      className: a
    },
    c
  );
}
export {
  x as Box
};
