import { jsx as l } from "react/jsx-runtime";
import { classes as m } from "../common/react.js";
import { computeBoxProps as p, computeBoxClassName as u } from "./Box.js";
import '../assets/Icon.css';const x = "_iconStack_bg05l_7", y = "_icon_bg05l_7", S = {
  iconStack: x,
  icon: y
}, f = /-o$/;
function b(a) {
  const { name: t, size: o, spin: c, className: _, rotation: i, ...n } = a, e = n.style || {};
  o && (e.fontSize = o * 100 + "%"), i && (e.transform = `rotate(${i}deg)`), n.style = e;
  const N = p(n);
  let s = "";
  if (t.startsWith("tg-"))
    s = t;
  else {
    const k = f.test(t), r = t.replace(f, ""), g = !r.startsWith("fa-");
    s = k ? "far " : "fas ", g && (s += "fa-"), s += r, c && (s += " fa-spin");
  }
  return /* @__PURE__ */ l(
    "i",
    {
      className: m([
        S.icon,
        s,
        _,
        u(n)
      ]),
      ...N
    }
  );
}
function d(a) {
  const { className: t, children: o, ...c } = a;
  return /* @__PURE__ */ l(
    "span",
    {
      className: m([
        S.iconStack,
        t,
        u(c)
      ]),
      ...p(c),
      children: o
    }
  );
}
b.Stack = d;
export {
  b as Icon,
  d as IconStack
};
