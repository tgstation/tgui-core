import { jsx as m } from "react/jsx-runtime";
import { classes as l } from "../common/react.js";
import { computeBoxProps as p, computeBoxClassName as u } from "./Box.js";
const f = /-o$/;
function d(c) {
  const { name: s, size: o, spin: a, className: N, rotation: r, ...e } = c, n = e.style || {};
  o && (n.fontSize = `${o * 100}%`), r && (n.transform = `rotate(${r}deg)`), e.style = n;
  const x = p(e);
  let t = "";
  if (s.startsWith("tg-"))
    t = s;
  else {
    const I = f.test(s), i = s.replace(f, ""), S = !i.startsWith("fa-");
    t = I ? "far " : "fas ", S && (t += "fa-"), t += i, a && (t += " fa-spin");
  }
  return /* @__PURE__ */ m(
    "i",
    {
      className: l([
        "Icon",
        t,
        N,
        u(e)
      ]),
      ...x
    }
  );
}
function g(c) {
  const { className: s, children: o, ...a } = c;
  return /* @__PURE__ */ m(
    "span",
    {
      className: l(["IconStack", s, u(a)]),
      ...p(a),
      children: o
    }
  );
}
d.Stack = g;
export {
  d as Icon,
  g as IconStack
};
