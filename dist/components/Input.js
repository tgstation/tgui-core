import { jsxs as j, jsx as p } from "react/jsx-runtime";
import { useRef as k, useEffect as m } from "react";
import { KEY as w, isEscape as B } from "../common/keys.js";
import { classes as F } from "../common/react.js";
import { debounce as O } from "../common/timer.js";
import { Box as R } from "./Box.js";
function d(r) {
  return typeof r != "number" && typeof r != "string" ? "" : String(r);
}
const V = O((r) => r(), 250);
function C(r) {
  const {
    autoFocus: g,
    autoSelect: l,
    className: I,
    disabled: T,
    expensive: b,
    fluid: h,
    maxLength: x,
    monospace: y,
    onChange: n,
    onEnter: c,
    onEscape: s,
    onInput: i,
    placeholder: N,
    selfClear: _,
    updateOnPropsChange: D,
    value: o,
    ...E
  } = r, a = k(null);
  function K(t) {
    var u;
    if (!i) return;
    const e = (u = t.currentTarget) == null ? void 0 : u.value;
    b ? V(() => i(t, e)) : i(t, e);
  }
  function S(t) {
    if (t.key === w.Enter) {
      c == null || c(t, t.currentTarget.value), _ ? t.currentTarget.value = "" : (t.currentTarget.blur(), n == null || n(t, t.currentTarget.value));
      return;
    }
    B(t.key) && (s == null || s(t), t.currentTarget.value = d(o), t.currentTarget.blur());
  }
  function f(t) {
    const e = a.current;
    if (!e) return;
    const u = d(t);
    e.value !== u && (e.value = u);
  }
  return m(() => {
    const t = a.current;
    if (t) {
      f(o);
      const e = g || l, u = document.activeElement === t;
      e && !u && setTimeout(() => {
        t.focus(), l && t.select();
      }, 1);
    }
  }, []), m(() => {
    D && f(o);
  }, [o]), /* @__PURE__ */ j(
    R,
    {
      className: F([
        "Input",
        h && "Input--fluid",
        y && "Input--monospace",
        I
      ]),
      ...E,
      children: [
        /* @__PURE__ */ p("div", { className: "Input__baseline", children: "." }),
        /* @__PURE__ */ p(
          "input",
          {
            className: "Input__input",
            disabled: T,
            maxLength: x,
            onBlur: (t) => n == null ? void 0 : n(t, t.target.value),
            onChange: K,
            onKeyDown: S,
            placeholder: N,
            ref: a
          }
        )
      ]
    }
  );
}
export {
  C as Input,
  d as toInputValue
};
