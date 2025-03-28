import { jsxs as I, jsx as x } from "react/jsx-runtime";
import { forwardRef as M, useRef as Y, useState as C, useImperativeHandle as H, useEffect as y } from "react";
import { KEY as A, isEscape as L } from "../common/keys.js";
import { classes as p } from "../common/react.js";
import { Box as U } from "./Box.js";
import { toInputValue as _ } from "./Input.js";
function q(u, s, l, t) {
  return `${u.substring(0, l)}${s}${u.substring(l, t)}${s}${u.substring(t)}`;
}
const X = M(
  (u, s) => {
    const {
      autoFocus: l,
      autoSelect: t,
      displayedValue: o,
      dontUseTabForIndent: w,
      maxLength: S,
      noborder: $,
      onChange: i,
      onEnter: f,
      onEscape: g,
      onInput: d,
      placeholder: k,
      scrollbar: E,
      selfClear: b,
      userMarkup: m,
      value: T,
      ...K
    } = u, { className: D, fluid: N, nowrap: R, ...V } = K, a = Y(null), [j, B] = C(0);
    function F(r) {
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
      if (!w && r.key === A.Tab) {
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
      s,
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
    }, [T]), /* @__PURE__ */ I(
      U,
      {
        className: p([
          "TextArea",
          N && "TextArea--fluid",
          $ && "TextArea--noborder",
          D
        ]),
        ...V,
        children: [
          !!o && /* @__PURE__ */ x(
            "div",
            {
              style: {
                height: "100%",
                overflow: "hidden",
                position: "absolute",
                width: "100%"
              },
              children: /* @__PURE__ */ x(
                "div",
                {
                  className: p([
                    "TextArea__textarea",
                    "TextArea__textarea_custom"
                  ]),
                  style: {
                    transform: `translateY(-${j}px)`
                  },
                  children: o
                }
              )
            }
          ),
          /* @__PURE__ */ x(
            "textarea",
            {
              className: p([
                "TextArea__textarea",
                E && "TextArea__textarea--scrollable",
                R && "TextArea__nowrap"
              ]),
              maxLength: S,
              onBlur: (r) => i == null ? void 0 : i(r, r.target.value),
              onChange: (r) => d == null ? void 0 : d(r, r.target.value),
              onKeyDown: F,
              onScroll: () => {
                o && a.current && B(a.current.scrollTop);
              },
              placeholder: k,
              ref: a,
              style: {
                color: o ? "rgba(0, 0, 0, 0)" : "inherit"
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
