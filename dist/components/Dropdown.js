import { jsx as o, jsxs as m, Fragment as W } from "react/jsx-runtime";
import { classes as y } from "../common/react.js";
import { useState as F, useRef as L, useEffect as q } from "react";
import { unit as z } from "./Box.js";
import { Button as D } from "./Button.js";
import { Icon as b } from "./Icon.js";
import { Popper as A } from "./Popper.js";
const G = -1;
function f(d) {
  return typeof d == "string" ? d : d.value;
}
function Y(d) {
  const {
    autoScroll: w = !0,
    buttons: I,
    className: O,
    clipSelectedText: k = !0,
    color: B = "default",
    disabled: a,
    displayText: C,
    icon: x,
    iconRotation: T,
    iconSpin: j,
    menuWidth: R = "15rem",
    noChevron: S,
    onClick: p,
    onSelected: i,
    options: r = [],
    over: g,
    placeholder: E = "Select...",
    selected: u,
    width: P = "15rem"
  } = d, [l, h] = F(!1), V = g ? !l : l, v = L(null), s = r.findIndex((e) => f(e) === u) || 0;
  function _(e) {
    var c;
    let t = e;
    e < s ? t = e < 2 ? 0 : e - 2 : t = e > r.length - 3 ? r.length - 1 : e - 2;
    const n = (c = v.current) == null ? void 0 : c.children[t];
    n == null || n.scrollIntoView({ block: "nearest" });
  }
  function N(e) {
    if (r.length < 1 || a)
      return;
    const t = 0, n = r.length - 1;
    let c;
    s < 0 ? c = e === "next" ? n : t : e === "next" ? c = s === n ? t : s + 1 : c = s === t ? n : s - 1, l && w && _(c), i == null || i(f(r[c]));
  }
  return q(() => {
    var e;
    l && (w && s !== G && _(s), (e = v.current) == null || e.focus());
  }, [l]), /* @__PURE__ */ o(
    A,
    {
      isOpen: l,
      onClickOutside: () => h(!1),
      placement: g ? "top-start" : "bottom-start",
      content: /* @__PURE__ */ m(
        "div",
        {
          className: "Layout Dropdown__menu",
          style: { minWidth: R },
          ref: v,
          children: [
            r.length === 0 && /* @__PURE__ */ o("div", { className: "Dropdown__menuentry", children: "No options" }),
            r.map((e, t) => {
              const n = f(e);
              return /* @__PURE__ */ o(
                "div",
                {
                  className: y([
                    "Dropdown__menuentry",
                    u === n && "selected"
                  ]),
                  onClick: () => {
                    h(!1), i == null || i(n);
                  },
                  children: typeof e == "string" ? e : e.displayText
                },
                t
              );
            })
          ]
        }
      ),
      children: /* @__PURE__ */ m("div", { className: "Dropdown", style: { width: z(P) }, children: [
        /* @__PURE__ */ m(
          "div",
          {
            className: y([
              "Dropdown__control",
              "Button",
              "Button--dropdown",
              "Button--color--" + B,
              a && "Button--disabled",
              O
            ]),
            onClick: (e) => {
              a && !l || (h(!l), p == null || p(e));
            },
            children: [
              x && /* @__PURE__ */ o(b, { mr: 1, name: x, rotation: T, spin: j }),
              /* @__PURE__ */ o(
                "span",
                {
                  className: "Dropdown__selected-text",
                  style: {
                    overflow: k ? "hidden" : "visible"
                  },
                  children: C || u && f(u) || E
                }
              ),
              !S && /* @__PURE__ */ o("span", { className: "Dropdown__arrow-button", children: /* @__PURE__ */ o(b, { name: V ? "chevron-up" : "chevron-down" }) })
            ]
          }
        ),
        I && /* @__PURE__ */ m(W, { children: [
          /* @__PURE__ */ o(
            D,
            {
              disabled: a,
              height: 1.8,
              icon: "chevron-left",
              onClick: () => {
                N(
                  "previous"
                  /* Previous */
                );
              }
            }
          ),
          /* @__PURE__ */ o(
            D,
            {
              disabled: a,
              height: 1.8,
              icon: "chevron-right",
              onClick: () => {
                N(
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
