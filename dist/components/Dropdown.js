import { jsxs as u, jsx as r, Fragment as I } from "react/jsx-runtime";
import { useState as S, useRef as V } from "react";
import { KEY as O } from "../common/keys.js";
import { classes as D } from "../common/react.js";
import { unit as C } from "../common/ui.js";
import { Button as E } from "./Button.js";
import { Floating as Y } from "./Floating.js";
import { Icon as T } from "./Icon.js";
const q = -1;
function f(d) {
  return typeof d == "string" ? d : d.value;
}
function X(d) {
  const {
    autoScroll: v = !0,
    buttons: k,
    className: B,
    color: K = "default",
    disabled: i,
    displayText: R,
    icon: x,
    iconRotation: j,
    iconSpin: A,
    iconOnly: h,
    menuWidth: _,
    noChevron: F,
    onClick: a,
    onSelected: t,
    options: l = [],
    over: y,
    placeholder: W = "Select...",
    selected: m,
    width: $ = 15
  } = d, [p, P] = S(!1), N = V(null), s = l.findIndex((e) => f(e) === m) || 0;
  function g(e) {
    let n = e;
    e < s ? n = e < 2 ? 0 : e - 2 : n = e > l.length - 3 ? l.length - 1 : e - 2;
    const o = N.current, c = o == null ? void 0 : o.children[n];
    o && c && (o.scrollTop = c.offsetTop);
  }
  function b(e) {
    if (l.length < 1 || i)
      return;
    const n = 0, o = l.length - 1;
    let c;
    s < 0 ? c = e === "next" ? o : n : e === "next" ? c = s === o ? n : s + 1 : c = s === n ? o : s - 1, p && v && g(c), t == null || t(f(l[c]));
  }
  let w = y ? "top" : "bottom";
  return h && (w = `${w}-start`), /* @__PURE__ */ u("div", { className: "Dropdown", children: [
    /* @__PURE__ */ r(
      Y,
      {
        allowedOutsideClasses: ".Dropdown__button",
        closeAfterInteract: !0,
        contentAutoWidth: !_,
        contentClasses: "Dropdown__menu--wrapper",
        contentStyles: { width: _ ? C(_) : void 0 },
        disabled: i,
        onOpenChange: P,
        placement: w,
        content: /* @__PURE__ */ r("div", { ref: N, className: "Dropdown__menu", children: l.length === 0 ? /* @__PURE__ */ r("div", { className: "Dropdown__menu--entry", children: "No options" }) : l.map((e) => {
          const n = f(e);
          return /* @__PURE__ */ r(
            "div",
            {
              className: D([
                "Dropdown__menu--entry",
                m === n && "selected"
              ]),
              onClick: () => {
                t == null || t(n);
              },
              onKeyDown: (o) => {
                o.key === O.Enter && (t == null || t(n));
              },
              children: typeof e == "string" ? e : e.displayText
            },
            n
          );
        }) }),
        onMounted: () => {
          p && v && s !== q && g(s);
        },
        children: /* @__PURE__ */ u(
          "div",
          {
            className: D([
              "Dropdown__control",
              `Button--color--${K}`,
              i && "Button--disabled",
              h && "Dropdown__control--icon-only",
              B
            ]),
            style: { width: C($) },
            onClick: (e) => {
              i && !p || a == null || a(e);
            },
            onKeyDown: (e) => {
              e.key === O.Enter && !i && (a == null || a(e));
            },
            children: [
              x && /* @__PURE__ */ r(
                T,
                {
                  className: "Dropdown__icon",
                  name: x,
                  rotation: j,
                  spin: A
                }
              ),
              !h && /* @__PURE__ */ u(I, { children: [
                /* @__PURE__ */ r("span", { className: "Dropdown__selected-text", children: R || m && f(m) || W }),
                !F && /* @__PURE__ */ r(
                  T,
                  {
                    className: D([
                      "Dropdown__icon",
                      "Dropdown__icon--arrow",
                      y && "over",
                      p && "open"
                    ]),
                    name: "chevron-down"
                  }
                )
              ] })
            ]
          }
        )
      }
    ),
    k && /* @__PURE__ */ u(I, { children: [
      /* @__PURE__ */ r(
        E,
        {
          className: "Dropdown__button",
          disabled: i,
          icon: "chevron-left",
          onClick: () => {
            b(
              "previous"
              /* Previous */
            );
          }
        }
      ),
      /* @__PURE__ */ r(
        E,
        {
          className: "Dropdown__button",
          disabled: i,
          icon: "chevron-right",
          onClick: () => {
            b(
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
  X as Dropdown
};
