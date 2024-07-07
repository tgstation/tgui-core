import { jsx as r, jsxs as m, Fragment as L } from "react/jsx-runtime";
import { useState as R, useRef as q, useEffect as z } from "react";
import { classes as N } from "../common/react.js";
import { unit as A } from "./Box.js";
import { Button as b } from "./Button.js";
import { Icon as D } from "./Icon.js";
import { Popper as E } from "./Popper.js";
const G = -1;
function f(d) {
  return typeof d == "string" ? d : d.value;
}
function Y(d) {
  const {
    autoScroll: x = !0,
    buttons: k,
    className: B,
    clipSelectedText: C = !0,
    color: O = "default",
    disabled: a,
    displayText: j,
    icon: w,
    iconRotation: I,
    iconSpin: P,
    menuWidth: S = "15rem",
    noChevron: T,
    onClick: p,
    onSelected: i,
    options: o = [],
    over: g,
    placeholder: V = "Select...",
    selected: u,
    width: W = "15rem"
  } = d, [s, h] = R(!1), F = g ? !s : s, v = q(null), l = o.findIndex((e) => f(e) === u) || 0;
  function _(e) {
    var c;
    let t = e;
    e < l ? t = e < 2 ? 0 : e - 2 : t = e > o.length - 3 ? o.length - 1 : e - 2;
    const n = (c = v.current) == null ? void 0 : c.children[t];
    n == null || n.scrollIntoView({ block: "nearest" });
  }
  function y(e) {
    if (o.length < 1 || a)
      return;
    const t = 0, n = o.length - 1;
    let c;
    l < 0 ? c = e === "next" ? n : t : e === "next" ? c = l === n ? t : l + 1 : c = l === t ? n : l - 1, s && x && _(c), i == null || i(f(o[c]));
  }
  return z(() => {
    var e;
    s && (x && l !== G && _(l), (e = v.current) == null || e.focus());
  }, [s]), /* @__PURE__ */ r(
    E,
    {
      isOpen: s,
      onClickOutside: () => h(!1),
      placement: g ? "top-start" : "bottom-start",
      content: /* @__PURE__ */ m(
        "div",
        {
          className: "Layout Dropdown__menu",
          style: { minWidth: S },
          ref: v,
          children: [
            o.length === 0 && /* @__PURE__ */ r("div", { className: "Dropdown__menuentry", children: "No options" }),
            o.map((e, t) => {
              const n = f(e);
              return /* @__PURE__ */ r(
                "div",
                {
                  className: N([
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
      children: /* @__PURE__ */ m("div", { className: "Dropdown", style: { width: A(W) }, children: [
        /* @__PURE__ */ m(
          "div",
          {
            className: N([
              "Dropdown__control",
              "Button",
              "Button--dropdown",
              "Button--color--" + O,
              a && "Button--disabled",
              B
            ]),
            onClick: (e) => {
              a && !s || (h(!s), p == null || p(e));
            },
            children: [
              w && /* @__PURE__ */ r(D, { mr: 1, name: w, rotation: I, spin: P }),
              /* @__PURE__ */ r(
                "span",
                {
                  className: "Dropdown__selected-text",
                  style: {
                    overflow: C ? "hidden" : "visible"
                  },
                  children: j || u && f(u) || V
                }
              ),
              !T && /* @__PURE__ */ r("span", { className: "Dropdown__arrow-button", children: /* @__PURE__ */ r(D, { name: F ? "chevron-up" : "chevron-down" }) })
            ]
          }
        ),
        k && /* @__PURE__ */ m(L, { children: [
          /* @__PURE__ */ r(
            b,
            {
              disabled: a,
              height: 1.8,
              icon: "chevron-left",
              onClick: () => {
                y(
                  "previous"
                  /* Previous */
                );
              }
            }
          ),
          /* @__PURE__ */ r(
            b,
            {
              disabled: a,
              height: 1.8,
              icon: "chevron-right",
              onClick: () => {
                y(
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
