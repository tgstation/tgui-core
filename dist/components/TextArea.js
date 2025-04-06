import { jsxs as F, jsx as p } from "react/jsx-runtime";
import { forwardRef as I, useRef as M, useState as Y, useImperativeHandle as H, useEffect as y } from "react";
import { KEY as A, isEscape as L } from "../common/keys.js";
import { classes as x } from "../common/react.js";
import { Box as U } from "./Box.js";
import { toInputValue as _ } from "./Input.js";
function q(u, o, l, t) {
  return `${u.substring(0, l)}${o}${u.substring(l, t)}${o}${u.substring(t)}`;
}
const X = I(
  (u, o) => {
    const {
      autoFocus: l,
      autoSelect: t,
      displayedValue: s,
      dontUseTabForIndent: k,
      maxLength: w,
      noborder: S,
      onChange: i,
      onEnter: f,
      onEscape: g,
      onInput: d,
      placeholder: $,
      scrollbar: E,
      selfClear: b,
      userMarkup: m,
      value: T,
      ...K
    } = u, { className: D, fluid: N, nowrap: C, ...R } = K, a = M(null), [V, j] = Y(0);
    function B(r) {
      if (r.key === A.Enter) {
        if (r.shiftKey) {
          r.currentTarget.focus();
          return;
        }
        f == null || f(r, r.currentTarget.value), b && (r.currentTarget.value = ""), r.currentTarget.blur();
        return;
      }
      if (L(r.key)) {
        g == null || g(r), b ? r.currentTarget.value = "" : (r.currentTarget.value = _(T), r.currentTarget.blur());
        return;
      }
      if (!k && r.key === A.Tab) {
        r.preventDefault();
        const { value: e, selectionStart: c, selectionEnd: n } = r.currentTarget;
        r.currentTarget.value = `${e.substring(0, c)}	${e.substring(n)}`, r.currentTarget.selectionEnd = c + 1;
      }
      if (m && (r.ctrlKey || r.metaKey) && m[r.key]) {
        r.preventDefault();
        const { value: e, selectionStart: c, selectionEnd: n } = r.currentTarget, h = m[r.key];
        r.currentTarget.value = q(
          e,
          h,
          c,
          n
        ), r.currentTarget.selectionEnd = n + h.length * 2;
      }
    }
    return H(
      o,
      () => a.current
    ), y(() => {
      if (!l && !t) return;
      const r = a.current;
      r && (l || t) && setTimeout(() => {
        r.focus(), t && r.select();
      }, 1);
    }, []), y(() => {
      const r = a.current;
      if (!r) return;
      const e = _(T);
      r.value !== e && (r.value = e);
    }, [T]), /* @__PURE__ */ F(
      U,
      {
        className: x([
          "TextArea",
          N && "TextArea--fluid",
          S && "TextArea--noborder",
          D
        ]),
        ...R,
        children: [
          !!s && /* @__PURE__ */ p(
            "div",
            {
              style: {
                height: "100%",
                overflow: "hidden",
                position: "absolute",
                width: "100%"
              },
              children: /* @__PURE__ */ p(
                "div",
                {
                  className: x([
                    "TextArea__textarea",
                    "TextArea__textarea_custom"
                  ]),
                  style: {
                    transform: `translateY(-${V}px)`
                  },
                  children: s
                }
              )
            }
          ),
          /* @__PURE__ */ p(
            "textarea",
            {
              autoComplete: "off",
              className: x([
                "TextArea__textarea",
                E && "TextArea__textarea--scrollable",
                C && "TextArea__nowrap"
              ]),
              maxLength: w,
              onBlur: (r) => i == null ? void 0 : i(r, r.target.value),
              onChange: (r) => d == null ? void 0 : d(r, r.target.value),
              onKeyDown: B,
              onScroll: () => {
                s && a.current && j(a.current.scrollTop);
              },
              placeholder: $,
              ref: a,
              spellCheck: !1,
              style: {
                color: s ? "rgba(0, 0, 0, 0)" : "inherit"
              }
            }
          )
        ]
      }
    );
  }
);
export {
  X as TextArea
};
