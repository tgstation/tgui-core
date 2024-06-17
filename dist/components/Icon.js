import { jsx as f } from "react/jsx-runtime";
import { classes as m } from "../common/react.js";
import { computeBoxProps as p, computeBoxClassName as S } from "./Box.js";
import '../assets/Icon.css';const x = "_iconStack_bg05l_7", y = "_icon_bg05l_7", _ = {
  iconStack: x,
  icon: y
}, l = /-o$/, b = (n) => {
  const { name: t, size: o, spin: c, className: N, rotation: r, ...a } = n, e = a.style || {};
  o && (e.fontSize = o * 100 + "%"), r && (e.transform = `rotate(${r}deg)`), a.style = e;
  const k = p(a);
  let s = "";
  if (t.startsWith("tg-"))
    s = t;
  else {
    const u = l.test(t), i = t.replace(l, ""), g = !i.startsWith("fa-");
    s = u ? "far " : "fas ", g && (s += "fa-"), s += i, c && (s += " fa-spin");
  }
  return /* @__PURE__ */ f(
    "i",
    {
      className: m([
        _.icon,
        s,
        N,
        S(a)
      ]),
      ...k
    }
  );
}, d = (n) => {
  const { className: t, children: o, ...c } = n;
  return /* @__PURE__ */ f(
    "span",
    {
      className: m([
        _.iconStack,
        t,
        S(c)
      ]),
      ...p(c),
      children: o
    }
  );
};
b.Stack = d;
export {
  b as Icon,
  d as IconStack
};
