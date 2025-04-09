import { jsxs as M, jsx as d } from "react/jsx-runtime";
import { useRef as R, useState as Y, useEffect as y } from "react";
import { KEY as A, isEscape as I } from "../common/keys.js";
import { classes as p } from "../common/react.js";
import { Box as L } from "./Box.js";
import { toInputValue as h } from "./Input.js";
function U(a, s, l, e) {
  return `${a.substring(0, l)}${s}${a.substring(l, e)}${s}${a.substring(e)}`;
}
function Q(a) {
  const {
    autoFocus: s,
    autoSelect: l,
    displayedValue: e,
    dontUseTabForIndent: k,
    maxLength: S,
    noborder: $,
    onChange: n,
    onEnter: i,
    onEscape: f,
    onInput: g,
    placeholder: E,
    ref: m,
    scrollbar: K,
    selfClear: b,
    userMarkup: T,
    value: x,
    ...w
  } = a, { className: N, fluid: D, nowrap: C, ...V } = w, u = R((m == null ? void 0 : m.current) ?? null), [j, B] = Y(0);
  function F(r) {
    if (r.key === A.Enter) {
      if (r.shiftKey) {
        r.currentTarget.focus();
        return;
      }
      i == null || i(r, r.currentTarget.value), b && (r.currentTarget.value = ""), r.currentTarget.blur();
      return;
    }
    if (I(r.key)) {
      f == null || f(r), b ? r.currentTarget.value = "" : (r.currentTarget.value = h(x), r.currentTarget.blur());
      return;
    }
    if (!k && r.key === A.Tab) {
      r.preventDefault();
      const { value: t, selectionStart: o, selectionEnd: c } = r.currentTarget;
      r.currentTarget.value = `${t.substring(0, o)}	${t.substring(c)}`, r.currentTarget.selectionEnd = o + 1;
    }
    if (T && (r.ctrlKey || r.metaKey) && T[r.key]) {
      r.preventDefault();
      const { value: t, selectionStart: o, selectionEnd: c } = r.currentTarget, _ = T[r.key];
      r.currentTarget.value = U(
        t,
        _,
        o,
        c
      ), r.currentTarget.selectionEnd = c + _.length * 2;
    }
  }
  return y(() => {
    if (s || l) {
      const r = u.current;
      r && setTimeout(() => {
        r.focus(), l && r.select();
      }, 1);
    }
  }, []), y(() => {
    const r = u.current;
    if (r) {
      const t = h(x);
      r.value !== t && (r.value = t);
    }
  }, [x]), /* @__PURE__ */ M(
    L,
    {
      className: p([
        "TextArea",
        D && "TextArea--fluid",
        $ && "TextArea--noborder",
        N
      ]),
      ...V,
      children: [
        !!e && /* @__PURE__ */ d("div", { className: "TextArea__value-container", children: /* @__PURE__ */ d(
          "div",
          {
            className: p([
              "TextArea__textarea",
              "TextArea__textarea_custom"
            ]),
            style: {
              transform: `translateY(-${j}px)`
            },
            children: e
          }
        ) }),
        /* @__PURE__ */ d(
          "textarea",
          {
            autoComplete: "off",
            className: p([
              "TextArea__textarea",
              K && "TextArea__textarea--scrollable",
              C && "TextArea__nowrap"
            ]),
            maxLength: S,
            onBlur: (r) => n == null ? void 0 : n(r, r.target.value),
            onChange: (r) => g == null ? void 0 : g(r, r.target.value),
            onKeyDown: F,
            onScroll: () => {
              e && u.current && B(u.current.scrollTop);
            },
            placeholder: E,
            ref: u,
            spellCheck: !1,
            style: {
              color: e ? "rgba(0, 0, 0, 0)" : "inherit"
            }
          }
        )
      ]
    }
  );
}
export {
  Q as TextArea
};
