import { jsxs as S, jsx as p } from "react/jsx-runtime";
import { useRef as j, useEffect as m } from "react";
import { KEY as k, isEscape as v } from "../common/keys.js";
import { classes as w } from "../common/react.js";
import { debounce as B } from "../common/timer.js";
import { Box as F } from "./Box.js";
function d(r) {
  return typeof r != "number" && typeof r != "string" ? "" : String(r);
}
const O = B((r) => r(), 250);
function z(r) {
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
    onEnter: o,
    onEscape: s,
    onInput: a,
    placeholder: E,
    selfClear: N,
    updateOnPropsChange: _,
    value: c,
    ...A
  } = r, i = j(null);
  function D(t) {
    var u;
    if (!a) return;
    const e = (u = t.currentTarget) == null ? void 0 : u.value;
    b ? O(() => a(t, e)) : a(t, e);
  }
  function K(t) {
    if (t.key === k.Enter) {
      o == null || o(t, t.currentTarget.value), N ? t.currentTarget.value = "" : (t.currentTarget.blur(), n == null || n(t, t.currentTarget.value));
      return;
    }
    v(t.key) && (s == null || s(t), t.currentTarget.value = d(c), t.currentTarget.blur());
  }
  function f(t) {
    const e = i.current;
    if (!e) return;
    const u = d(t);
    e.value !== u && (e.value = u);
  }
  return m(() => {
    const t = i.current;
    if (t) {
      f(c);
      const e = g || l, u = document.activeElement === t;
      e && !u && setTimeout(() => {
        t.focus(), l && t.select();
      }, 1);
    }
  }, []), m(() => {
    if (_) {
      const t = i.current;
      t && (document.activeElement === t || f(c));
    }
  }, [c]), /* @__PURE__ */ S(
    F,
    {
      className: w([
        "Input",
        h && "Input--fluid",
        y && "Input--monospace",
        I
      ]),
      ...A,
      children: [
        /* @__PURE__ */ p("div", { className: "Input__baseline", children: "." }),
        /* @__PURE__ */ p(
          "input",
          {
            className: "Input__input",
            disabled: T,
            maxLength: x,
            onBlur: (t) => n == null ? void 0 : n(t, t.target.value),
            onChange: D,
            onKeyDown: K,
            placeholder: E,
            ref: i
          }
        )
      ]
    }
  );
}
export {
  z as Input,
  d as toInputValue
};
