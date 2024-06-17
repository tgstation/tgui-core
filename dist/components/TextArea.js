import { jsxs as I, jsx as f } from "react/jsx-runtime";
import { KEY as p } from "../common/keys.js";
import { classes as d } from "../common/react.js";
import { forwardRef as Y, useRef as C, useState as H, useImperativeHandle as L, useEffect as g } from "react";
import { Box as P } from "./Box.js";
import { toInputValue as T } from "./Input.js";
import '../assets/TextArea.css';const U = "_textArea_1bert_20", $ = "_fluid_1bert_33", q = "_noborder_1bert_39", z = "_inner_1bert_43", G = "_scrollable_1bert_43", J = "_custom_1bert_78", M = "_nowrap_1bert_83", O = "_wrapper_1bert_89", e = {
  textArea: U,
  fluid: $,
  noborder: q,
  inner: z,
  scrollable: G,
  custom: J,
  nowrap: M,
  wrapper: O
}, er = Y(
  (x, w) => {
    const {
      autoFocus: m,
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
      selfClear: b,
      value: i,
      ...E
    } = x, { className: K, fluid: k, nowrap: D, ...R } = E, t = C(null), [V, j] = H(0), B = (r) => {
      if (r.key === p.Enter) {
        if (r.shiftKey) {
          r.currentTarget.focus();
          return;
        }
        n == null || n(r, r.currentTarget.value), b && (r.currentTarget.value = ""), r.currentTarget.blur();
        return;
      }
      if (r.key === p.Escape) {
        u == null || u(r), b ? r.currentTarget.value = "" : (r.currentTarget.value = T(i), r.currentTarget.blur());
        return;
      }
      if (!y && r.key === p.Tab) {
        r.preventDefault();
        const { value: o, selectionStart: _, selectionEnd: F } = r.currentTarget;
        r.currentTarget.value = o.substring(0, _) + "	" + o.substring(F), r.currentTarget.selectionEnd = _ + 1;
      }
    };
    return L(
      w,
      () => t.current
    ), g(() => {
      if (!m && !s)
        return;
      const r = t.current;
      r && (m || s) && setTimeout(() => {
        r.focus(), s && r.select();
      }, 1);
    }, []), g(() => {
      const r = t.current;
      if (!r)
        return;
      const o = T(i);
      r.value !== o && (r.value = o);
    }, [i]), /* @__PURE__ */ I(
      P,
      {
        className: d([
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
              className: d([e.inner, e.custom]),
              style: {
                transform: `translateY(-${V}px)`
              },
              children: a
            }
          ) }),
          /* @__PURE__ */ f(
            "textarea",
            {
              className: d([
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
  er as TextArea
};
