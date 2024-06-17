import { jsxs as j, jsx as p } from "react/jsx-runtime";
import { KEY as m } from "../common/keys.js";
import { classes as k } from "../common/react.js";
import { debounce as B } from "../common/timer.js";
import { useRef as E, useEffect as R } from "react";
import { Box as S } from "./Box.js";
import '../assets/Input.css';const V = "_input_17i79_20", F = "_fluid_17i79_35", L = "_baseline_17i79_40", Y = "_inner_17i79_45", q = "_monospace_17i79_71", u = {
  input: V,
  fluid: F,
  baseline: L,
  inner: Y,
  monospace: q
};
function _(r) {
  return typeof r != "number" && typeof r != "string" ? "" : String(r);
}
const z = B((r) => r(), 250);
function P(r) {
  const {
    autoFocus: d,
    autoSelect: c,
    className: b,
    disabled: g,
    expensive: T,
    fluid: y,
    maxLength: x,
    monospace: h,
    onChange: n,
    onEnter: i,
    onEscape: o,
    onInput: s,
    placeholder: I,
    selfClear: N,
    value: l,
    ...w
  } = r, a = E(null);
  function D(e) {
    var f;
    if (!s)
      return;
    const t = (f = e.currentTarget) == null ? void 0 : f.value;
    T ? z(() => s(e, t)) : s(e, t);
  }
  function K(e) {
    if (e.key === m.Enter) {
      i == null || i(e, e.currentTarget.value), N ? e.currentTarget.value = "" : (e.currentTarget.blur(), n == null || n(e, e.currentTarget.value));
      return;
    }
    e.key === m.Escape && (o == null || o(e), e.currentTarget.value = _(l), e.currentTarget.blur());
  }
  return R(() => {
    const e = a.current;
    if (!e)
      return;
    const t = _(l);
    e.value !== t && (e.value = t), !(!d && !c) && setTimeout(() => {
      e.focus(), c && e.select();
    }, 1);
  }, []), /* @__PURE__ */ j(
    S,
    {
      className: k([
        u.input,
        y && u.fluid,
        h && u.monospace,
        b
      ]),
      ...w,
      children: [
        /* @__PURE__ */ p("div", { className: u.baseline, children: "." }),
        /* @__PURE__ */ p(
          "input",
          {
            className: u.inner,
            disabled: g,
            maxLength: x,
            onBlur: (e) => n == null ? void 0 : n(e, e.target.value),
            onChange: D,
            onKeyDown: K,
            placeholder: I,
            ref: a
          }
        )
      ]
    }
  );
}
export {
  P as Input,
  _ as toInputValue
};
