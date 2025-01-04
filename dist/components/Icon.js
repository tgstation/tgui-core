import { jsx as l } from "react/jsx-runtime";
import { classes as p } from "../common/react.js";
import { computeBoxProps as u, computeBoxClassName as N } from "../common/ui.js";
const f = /-o$/;
function m(o) {
  const { name: s = "", size: a, spin: e, className: x, rotation: r, ...c } = o, n = c.style || {};
  a && (n.fontSize = `${a * 100}%`), r && (n.transform = `rotate(${r}deg)`), c.style = n;
  const I = u(c);
  let t = "";
  if (s.startsWith("tg-"))
    t = s;
  else {
    const S = f.test(s), i = s.replace(f, ""), d = !i.startsWith("fa-");
    t = S ? "far " : "fas ", d && (t += "fa-"), t += i, e && (t += " fa-spin");
  }
  return /* @__PURE__ */ l(
    "i",
    {
      className: p([
        "Icon",
        t,
        x,
        N(c)
      ]),
      ...I
    }
  );
}
function g(o) {
  const { className: s, children: a, ...e } = o;
  return /* @__PURE__ */ l(
    "span",
    {
      className: p(["IconStack", s, N(e)]),
      ...u(e),
      children: a
    }
  );
}
((o) => {
  o.Stack = g;
})(m || (m = {}));
export {
  m as Icon
};
