import { jsxs as f, jsx as r, Fragment as F } from "react/jsx-runtime";
import { useState as P, useRef as S } from "react";
import { KEY as g } from "../common/keys.js";
import { classes as h } from "../common/react.js";
import { unit as y } from "../common/ui.js";
import { Button as b } from "./Button.js";
import { Floating as V } from "./Floating.js";
import { Icon as I } from "./Icon.js";
const Y = -1;
function p(d) {
  return typeof d == "string" ? d : d.value;
}
function Q(d) {
  const {
    autoScroll: _ = !0,
    buttons: C,
    className: E,
    color: O = "default",
    disabled: a,
    displayText: T,
    icon: w,
    iconRotation: k,
    iconSpin: B,
    menuWidth: K,
    noChevron: R,
    onClick: i,
    onSelected: t,
    options: s = [],
    over: D,
    placeholder: W = "Select...",
    selected: m,
    width: j = 15
  } = d, [u, A] = P(!1), x = S(null), l = s.findIndex((e) => p(e) === m) || 0;
  function N(e) {
    let n = e;
    e < l ? n = e < 2 ? 0 : e - 2 : n = e > s.length - 3 ? s.length - 1 : e - 2;
    const o = x.current, c = o == null ? void 0 : o.children[n];
    o && c && (o.scrollTop = c.offsetTop);
  }
  function v(e) {
    if (s.length < 1 || a)
      return;
    const n = 0, o = s.length - 1;
    let c;
    l < 0 ? c = e === "next" ? o : n : e === "next" ? c = l === o ? n : l + 1 : c = l === n ? o : l - 1, u && _ && N(c), t == null || t(p(s[c]));
  }
  return /* @__PURE__ */ f("div", { className: "Dropdown", children: [
    /* @__PURE__ */ r(
      V,
      {
        contentAutoWidth: !0,
        closeAfterInteract: !0,
        placement: D ? "top" : "bottom",
        allowedOutsideClasses: ".Dropdown__button",
        contentClasses: "Dropdown__menu--wrapper",
        contentStyles: { maxWidth: y(K) },
        disabled: a,
        onOpenChange: A,
        content: /* @__PURE__ */ r("div", { ref: x, className: "Dropdown__menu", children: s.length === 0 ? /* @__PURE__ */ r("div", { className: "Dropdown__menu--entry", children: "No options" }) : s.map((e) => {
          const n = p(e);
          return /* @__PURE__ */ r(
            "div",
            {
              className: h([
                "Dropdown__menu--entry",
                m === n && "selected"
              ]),
              onClick: () => {
                t == null || t(n);
              },
              onKeyDown: (o) => {
                o.key === g.Enter && (t == null || t(n));
              },
              children: typeof e == "string" ? e : e.displayText
            },
            n
          );
        }) }),
        onMounted: () => {
          u && _ && l !== Y && N(l);
        },
        children: /* @__PURE__ */ f(
          "div",
          {
            className: h([
              "Dropdown__control",
              `Button--color--${O}`,
              a && "Button--disabled",
              E
            ]),
            style: { width: y(j) },
            onClick: (e) => {
              a && !u || i == null || i(e);
            },
            onKeyDown: (e) => {
              e.key === g.Enter && !a && (i == null || i(e));
            },
            children: [
              w && /* @__PURE__ */ r(
                I,
                {
                  className: "Dropdown__icon",
                  name: w,
                  rotation: k,
                  spin: B
                }
              ),
              /* @__PURE__ */ r("span", { className: "Dropdown__selected-text", children: T || m && p(m) || W }),
              !R && /* @__PURE__ */ r(
                I,
                {
                  className: h([
                    "Dropdown__icon",
                    "Dropdown__icon--arrow",
                    D && "over",
                    u && "open"
                  ]),
                  name: "chevron-down"
                }
              )
            ]
          }
        )
      }
    ),
    C && /* @__PURE__ */ f(F, { children: [
      /* @__PURE__ */ r(
        b,
        {
          className: "Dropdown__button",
          disabled: a,
          icon: "chevron-left",
          onClick: () => {
            v(
              "previous"
              /* Previous */
            );
          }
        }
      ),
      /* @__PURE__ */ r(
        b,
        {
          className: "Dropdown__button",
          disabled: a,
          icon: "chevron-right",
          onClick: () => {
            v(
              "next"
              /* Next */
            );
          }
        }
      )
    ] })
  ] });
}
export {
  Q as Dropdown
};
