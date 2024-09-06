import { jsxs as K, jsx as m } from "react/jsx-runtime";
import { useRef as V, useEffect as d } from "react";
import { KEY as j, isEscape as k } from "../common/keys.js";
import { classes as B } from "../common/react.js";
import { debounce as R } from "../common/timer.js";
import { Box as S } from "./Box.js";
import '../assets/Input.css';const F = "_input_17i79_20", L = "_fluid_17i79_35", Y = "_baseline_17i79_40", q = "_inner_17i79_45", v = "_monospace_17i79_71", u = {
  input: F,
  fluid: L,
  baseline: Y,
  inner: q,
  monospace: v
};
function a(r) {
  return typeof r != "number" && typeof r != "string" ? "" : String(r);
}
const z = R((r) => r(), 250);
function P(r) {
  const {
    autoFocus: _,
    autoSelect: f,
    className: b,
    disabled: g,
    expensive: T,
    fluid: y,
    maxLength: x,
    monospace: h,
    onChange: t,
    onEnter: i,
    onEscape: o,
    onInput: s,
    placeholder: w,
    selfClear: I,
    value: c,
    ...N
  } = r, l = V(null);
  function D(e) {
    var p;
    if (!s) return;
    const n = (p = e.currentTarget) == null ? void 0 : p.value;
    T ? z(() => s(e, n)) : s(e, n);
  }
  function E(e) {
    if (e.key === j.Enter) {
      i == null || i(e, e.currentTarget.value), I ? e.currentTarget.value = "" : (e.currentTarget.blur(), t == null || t(e, e.currentTarget.value));
      return;
    }
    k(e.key) && (o == null || o(e), e.currentTarget.value = a(c), e.currentTarget.blur());
  }
  return d(() => {
    const e = l.current;
    if (!e) return;
    const n = a(c);
    e.value !== n && (e.value = n), !(!_ && !f) && setTimeout(() => {
      e.focus(), f && e.select();
    }, 1);
  }, []), d(() => {
    const e = l.current;
    if (!e || document.activeElement === e)
      return;
    const n = a(c);
    e.value !== n && (e.value = n);
  }), /* @__PURE__ */ K(
    S,
    {
      className: B([
        u.input,
        y && u.fluid,
        h && u.monospace,
        b
      ]),
      ...N,
      children: [
        /* @__PURE__ */ m("div", { className: u.baseline, children: "." }),
        /* @__PURE__ */ m(
          "input",
          {
            className: u.inner,
            disabled: g,
            maxLength: x,
            onBlur: (e) => t == null ? void 0 : t(e, e.target.value),
            onChange: D,
            onKeyDown: E,
            placeholder: w,
            ref: l
          }
        )
      ]
    }
  );
}
export {
  P as Input,
  a as toInputValue
};
