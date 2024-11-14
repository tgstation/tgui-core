import { jsxs as E, jsx as p } from "react/jsx-runtime";
import { useRef as K, useEffect as m } from "react";
import { KEY as V, isEscape as j } from "../common/keys.js";
import { classes as k } from "../common/react.js";
import { debounce as B } from "../common/timer.js";
import { Box as R } from "./Box.js";
function l(u) {
  return typeof u != "number" && typeof u != "string" ? "" : String(u);
}
const S = B((u) => u(), 250);
function A(u) {
  const {
    autoFocus: d,
    autoSelect: s,
    className: g,
    disabled: I,
    expensive: T,
    fluid: b,
    maxLength: x,
    monospace: y,
    onChange: t,
    onEnter: n,
    onEscape: o,
    onInput: i,
    placeholder: h,
    selfClear: w,
    value: a,
    ...N
  } = u, c = K(null);
  function _(e) {
    var f;
    if (!i) return;
    const r = (f = e.currentTarget) == null ? void 0 : f.value;
    T ? S(() => i(e, r)) : i(e, r);
  }
  function D(e) {
    if (e.key === V.Enter) {
      n == null || n(e, e.currentTarget.value), w ? e.currentTarget.value = "" : (e.currentTarget.blur(), t == null || t(e, e.currentTarget.value));
      return;
    }
    j(e.key) && (o == null || o(e), e.currentTarget.value = l(a), e.currentTarget.blur());
  }
  return m(() => {
    const e = c.current;
    if (!e) return;
    const r = l(a);
    e.value !== r && (e.value = r), !(!d && !s) && setTimeout(() => {
      e.focus(), s && e.select();
    }, 1);
  }, []), m(() => {
    const e = c.current;
    if (!e || document.activeElement === e)
      return;
    const r = l(a);
    e.value !== r && (e.value = r);
  }), /* @__PURE__ */ E(
    R,
    {
      className: k([
        "Input",
        b && "Input--fluid",
        y && "Input--monospace",
        g
      ]),
      ...N,
      children: [
        /* @__PURE__ */ p("div", { className: "Input__baseline", children: "." }),
        /* @__PURE__ */ p(
          "input",
          {
            className: "Input__input",
            disabled: I,
            maxLength: x,
            onBlur: (e) => t == null ? void 0 : t(e, e.target.value),
            onChange: _,
            onKeyDown: D,
            placeholder: h,
            ref: c
          }
        )
      ]
    }
  );
}
export {
  A as Input,
  l as toInputValue
};
