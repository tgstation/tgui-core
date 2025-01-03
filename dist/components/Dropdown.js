import { jsx as l, jsxs as p, Fragment as F } from "react/jsx-runtime";
import { useState as L, useRef as S, useEffect as V } from "react";
import { classes as N } from "../common/react.js";
import { unit as $ } from "../common/ui.js";
import { Button as D } from "./Button.js";
import { Icon as b } from "./Icon.js";
import { Popper as q } from "./Popper.js";
const z = -1;
function h(u) {
  return typeof u == "string" ? u : u.value;
}
function Y(u) {
  const {
    autoScroll: v = !0,
    buttons: I,
    className: O,
    clipSelectedText: T = !0,
    color: B = "default",
    disabled: d,
    displayText: E,
    icon: x,
    iconRotation: k,
    iconSpin: j,
    menuWidth: C = "15rem",
    noChevron: R,
    onClick: a,
    onSelected: o,
    options: c = [],
    over: y,
    placeholder: K = "Select...",
    selected: m,
    width: P = "15rem"
  } = u, [r, f] = L(!1), W = y ? !r : r, w = S(null), i = c.findIndex((e) => h(e) === m) || 0;
  function g(e) {
    let s = e;
    e < i ? s = e < 2 ? 0 : e - 2 : s = e > c.length - 3 ? c.length - 1 : e - 2;
    const n = w.current, t = n == null ? void 0 : n.children[s];
    n && t && (n.scrollTop = t.offsetTop);
  }
  function _(e) {
    if (c.length < 1 || d)
      return;
    const s = 0, n = c.length - 1;
    let t;
    i < 0 ? t = e === "next" ? n : s : e === "next" ? t = i === n ? s : i + 1 : t = i === s ? n : i - 1, r && v && g(t), o == null || o(h(c[t]));
  }
  return V(() => {
    var e;
    r && (v && i !== z && g(i), (e = w.current) == null || e.focus());
  }, [r]), /* @__PURE__ */ l(
    q,
    {
      isOpen: r,
      onClickOutside: () => f(!1),
      placement: y ? "top-start" : "bottom-start",
      content: /* @__PURE__ */ p(
        "div",
        {
          className: "Layout Dropdown__menu",
          style: { minWidth: C },
          ref: w,
          children: [
            c.length === 0 && /* @__PURE__ */ l("div", { className: "Dropdown__menuentry", children: "No options" }),
            c.map((e, s) => {
              const n = h(e);
              return /* @__PURE__ */ l(
                "div",
                {
                  className: N([
                    "Dropdown__menuentry",
                    m === n && "selected"
                  ]),
                  onClick: () => {
                    f(!1), o == null || o(n);
                  },
                  onKeyDown: (t) => {
                    t.key === "Enter" && (f(!1), o == null || o(n));
                  },
                  children: typeof e == "string" ? e : e.displayText
                },
                s
              );
            })
          ]
        }
      ),
      children: /* @__PURE__ */ p("div", { className: "Dropdown", style: { width: $(P) }, children: [
        /* @__PURE__ */ p(
          "div",
          {
            className: N([
              "Dropdown__control",
              "Button",
              "Button--dropdown",
              `Button--color--${B}`,
              d && "Button--disabled",
              O
            ]),
            onClick: (e) => {
              d && !r || (f(!r), a == null || a(e));
            },
            onKeyDown: (e) => {
              e.key === "Enter" && !d && (f(!r), a == null || a(e));
            },
            children: [
              x && /* @__PURE__ */ l(b, { mr: 1, name: x, rotation: k, spin: j }),
              /* @__PURE__ */ l(
                "span",
                {
                  className: "Dropdown__selected-text",
                  style: {
                    overflow: T ? "hidden" : "visible"
                  },
                  children: E || m && h(m) || K
                }
              ),
              !R && /* @__PURE__ */ l("span", { className: "Dropdown__arrow-button", children: /* @__PURE__ */ l(b, { name: W ? "chevron-up" : "chevron-down" }) })
            ]
          }
        ),
        I && /* @__PURE__ */ p(F, { children: [
          /* @__PURE__ */ l(
            D,
            {
              disabled: d,
              height: 1.8,
              icon: "chevron-left",
              onClick: () => {
                _(
                  "previous"
                  /* Previous */
                );
              }
            }
          ),
          /* @__PURE__ */ l(
            D,
            {
              disabled: d,
              height: 1.8,
              icon: "chevron-right",
              onClick: () => {
                _(
                  "next"
                  /* Next */
                );
              }
            }
          )
        ] })
      ] })
    }
  );
}
export {
  Y as Dropdown
};
