import { jsxs as I, jsx as f } from "react/jsx-runtime";
import { forwardRef as Y, useRef as C, useState as H, useImperativeHandle as L, useEffect as _ } from "react";
import { KEY as g, isEscape as P } from "../common/keys.js";
import { classes as p } from "../common/react.js";
import { Box as U } from "./Box.js";
import { toInputValue as T } from "./Input.js";
import '../assets/TextArea.css';const $ = "_textArea_1bert_20", q = "_fluid_1bert_33", z = "_noborder_1bert_39", G = "_inner_1bert_43", J = "_scrollable_1bert_43", M = "_custom_1bert_78", O = "_nowrap_1bert_83", Q = "_wrapper_1bert_89", e = {
  textArea: $,
  fluid: q,
  noborder: z,
  inner: G,
  scrollable: J,
  custom: M,
  nowrap: O,
  wrapper: Q
}, tr = Y(
  (x, w) => {
    const {
      autoFocus: d,
      autoSelect: s,
      displayedValue: a,
      dontUseTabForIndent: y,
      maxLength: h,
      noborder: A,
      onChange: l,
      onEnter: n,
      onEscape: u,
      onInput: c,
      placeholder: N,
      scrollbar: S,
      selfClear: m,
      value: i,
      ...E
    } = x, { className: K, fluid: k, nowrap: D, ...R } = E, t = C(null), [V, j] = H(0);
    function B(r) {
      if (r.key === g.Enter) {
        if (r.shiftKey) {
          r.currentTarget.focus();
          return;
        }
        n == null || n(r, r.currentTarget.value), m && (r.currentTarget.value = ""), r.currentTarget.blur();
        return;
      }
      if (P(r.key)) {
        u == null || u(r), m ? r.currentTarget.value = "" : (r.currentTarget.value = T(i), r.currentTarget.blur());
        return;
      }
      if (!y && r.key === g.Tab) {
        r.preventDefault();
        const { value: o, selectionStart: b, selectionEnd: F } = r.currentTarget;
        r.currentTarget.value = o.substring(0, b) + "	" + o.substring(F), r.currentTarget.selectionEnd = b + 1;
      }
    }
    return L(
      w,
      () => t.current
    ), _(() => {
      if (!d && !s) return;
      const r = t.current;
      r && (d || s) && setTimeout(() => {
        r.focus(), s && r.select();
      }, 1);
    }, []), _(() => {
      const r = t.current;
      if (!r) return;
      const o = T(i);
      r.value !== o && (r.value = o);
    }, [i]), /* @__PURE__ */ I(
      U,
      {
        className: p([
          e.textArea,
          k && e.fluid,
          A && e.noborder,
          K
        ]),
        ...R,
        children: [
          !!a && /* @__PURE__ */ f("div", { className: e.wrapper, children: /* @__PURE__ */ f(
            "div",
            {
              className: p([e.inner, e.custom]),
              style: {
                transform: `translateY(-${V}px)`
              },
              children: a
            }
          ) }),
          /* @__PURE__ */ f(
            "textarea",
            {
              className: p([
                e.inner,
                S && e.scrollable,
                D && e.nowrap
              ]),
              maxLength: h,
              onBlur: (r) => l == null ? void 0 : l(r, r.target.value),
              onChange: (r) => c == null ? void 0 : c(r, r.target.value),
              onKeyDown: B,
              onScroll: () => {
                a && t.current && j(t.current.scrollTop);
              },
              placeholder: N,
              ref: t,
              style: {
                color: a ? "rgba(0, 0, 0, 0)" : "inherit"
              }
            }
          )
        ]
      }
    );
  }
);
export {
  tr as TextArea
};
