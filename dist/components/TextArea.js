import { jsxs as B, jsx as i } from "react/jsx-runtime";
import { forwardRef as F, useRef as I, useState as Y, useImperativeHandle as C, useEffect as x } from "react";
import { KEY as p, isEscape as H } from "../common/keys.js";
import { classes as f } from "../common/react.js";
import { Box as L } from "./Box.js";
import { toInputValue as g } from "./Input.js";
const M = F(
  (b, h) => {
    const {
      autoFocus: d,
      autoSelect: o,
      displayedValue: a,
      dontUseTabForIndent: A,
      maxLength: _,
      noborder: y,
      onChange: l,
      onEnter: u,
      onEscape: s,
      onInput: c,
      placeholder: w,
      scrollbar: S,
      selfClear: m,
      value: n,
      ...E
    } = b, { className: K, fluid: N, nowrap: k, ...D } = E, e = I(null), [R, V] = Y(0);
    function $(r) {
      if (r.key === p.Enter) {
        if (r.shiftKey) {
          r.currentTarget.focus();
          return;
        }
        u == null || u(r, r.currentTarget.value), m && (r.currentTarget.value = ""), r.currentTarget.blur();
        return;
      }
      if (H(r.key)) {
        s == null || s(r), m ? r.currentTarget.value = "" : (r.currentTarget.value = g(n), r.currentTarget.blur());
        return;
      }
      if (!A && r.key === p.Tab) {
        r.preventDefault();
        const { value: t, selectionStart: T, selectionEnd: j } = r.currentTarget;
        r.currentTarget.value = `${t.substring(0, T)}	${t.substring(j)}`, r.currentTarget.selectionEnd = T + 1;
      }
    }
    return C(
      h,
      () => e.current
    ), x(() => {
      if (!d && !o) return;
      const r = e.current;
      r && (d || o) && setTimeout(() => {
        r.focus(), o && r.select();
      }, 1);
    }, []), x(() => {
      const r = e.current;
      if (!r) return;
      const t = g(n);
      r.value !== t && (r.value = t);
    }, [n]), /* @__PURE__ */ B(
      L,
      {
        className: f([
          "TextArea",
          N && "TextArea--fluid",
          y && "TextArea--noborder",
          K
        ]),
        ...D,
        children: [
          !!a && /* @__PURE__ */ i(
            "div",
            {
              style: {
                height: "100%",
                overflow: "hidden",
                position: "absolute",
                width: "100%"
              },
              children: /* @__PURE__ */ i(
                "div",
                {
                  className: f([
                    "TextArea__textarea",
                    "TextArea__textarea_custom"
                  ]),
                  style: {
                    transform: `translateY(-${R}px)`
                  },
                  children: a
                }
              )
            }
          ),
          /* @__PURE__ */ i(
            "textarea",
            {
              className: f([
                "TextArea__textarea",
                S && "TextArea__textarea--scrollable",
                k && "TextArea__nowrap"
              ]),
              maxLength: _,
              onBlur: (r) => l == null ? void 0 : l(r, r.target.value),
              onChange: (r) => c == null ? void 0 : c(r, r.target.value),
              onKeyDown: $,
              onScroll: () => {
                a && e.current && V(e.current.scrollTop);
              },
              placeholder: w,
              ref: e,
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
  M as TextArea
};
