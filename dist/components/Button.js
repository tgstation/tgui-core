import { jsx as r, jsxs as _, Fragment as K } from "react/jsx-runtime";
import { useState as A, createRef as V, useEffect as $, useRef as z } from "react";
import { KEY as D, isEscape as E } from "../common/keys.js";
import { classes as F } from "../common/react.js";
import { computeBoxClassName as j, computeBoxProps as q } from "../common/ui.js";
import { Box as O } from "./Box.js";
import { Icon as S } from "./Icon.js";
import { Tooltip as v } from "./Tooltip.js";
function N(o) {
  const {
    captureKeys: s = !0,
    children: u,
    circular: m,
    className: d,
    color: l,
    compact: h,
    content: B,
    disabled: t,
    ellipsis: i,
    fluid: e,
    icon: c,
    iconColor: a,
    iconPosition: C,
    iconRotation: I,
    iconSize: R,
    iconSpin: P,
    onClick: f,
    selected: x,
    tooltip: b,
    tooltipPosition: w,
    verticalAlignContent: y,
    ...g
  } = o, n = B || u;
  let k = /* @__PURE__ */ r(
    "div",
    {
      className: F([
        "Button",
        e && "Button--fluid",
        t && "Button--disabled",
        x && "Button--selected",
        m && "Button--circular",
        h && "Button--compact",
        C && `Button--iconPosition--${C}`,
        y && "Button--flex",
        y && e && "Button--flex--fluid",
        y && `Button--verticalAlignContent--${y}`,
        l && typeof l == "string" ? `Button--color--${l}` : "Button--color--default",
        d,
        j(g)
      ]),
      tabIndex: t ? void 0 : 0,
      onClick: (p) => {
        !t && f && f(p);
      },
      onKeyDown: (p) => {
        if (s) {
          if (p.key === D.Space || p.key === D.Enter) {
            p.preventDefault(), !t && f && f(p);
            return;
          }
          E(p.key) && p.preventDefault();
        }
      },
      ...q(g),
      children: /* @__PURE__ */ _(
        "div",
        {
          className: F([
            "Button__content",
            i && "Button__content--ellipsis"
          ]),
          children: [
            c && C !== "right" && /* @__PURE__ */ r(
              S,
              {
                mr: n && 0.5,
                name: c,
                color: a,
                rotation: I,
                size: R,
                spin: P
              }
            ),
            i ? /* @__PURE__ */ r("span", { className: "Button--ellipsis", children: n }) : n,
            c && C === "right" && /* @__PURE__ */ r(
              S,
              {
                ml: n && 0.5,
                name: c,
                color: a,
                rotation: I,
                size: R,
                spin: P
              }
            )
          ]
        }
      )
    }
  );
  return b && (k = /* @__PURE__ */ r(v, { content: b, position: w, children: k })), k;
}
function T(o) {
  const { checked: s, ...u } = o;
  return /* @__PURE__ */ r(
    N,
    {
      color: "transparent",
      icon: s ? "check-square-o" : "square-o",
      selected: s,
      ...u
    }
  );
}
function L(o) {
  const {
    children: s,
    color: u,
    confirmColor: m = "bad",
    confirmContent: d = "Confirm?",
    confirmIcon: l,
    ellipsis: h = !0,
    icon: B,
    onClick: t,
    ...i
  } = o, [e, c] = A(!1);
  function a(C) {
    if (!e) {
      c(!0);
      return;
    }
    t == null || t(C), c(!1);
  }
  return /* @__PURE__ */ r(
    N,
    {
      icon: e ? l : B,
      color: e ? m : u,
      onClick: a,
      ...i,
      children: e ? d : s
    }
  );
}
function Y(o) {
  const {
    children: s,
    color: u = "default",
    content: m,
    currentValue: d,
    defaultValue: l,
    disabled: h,
    fluid: B,
    icon: t,
    iconRotation: i,
    iconSpin: e,
    maxLength: c,
    onCommit: a = () => null,
    placeholder: C,
    tooltip: I,
    tooltipPosition: R,
    ...P
  } = o, [f, x] = A(!1), b = V(), w = m || s;
  function y(n) {
    const k = b.current;
    if (!k) return;
    k.value !== "" ? a(n, k.value) : l && a(n, l);
  }
  $(() => {
    const n = b.current;
    if (n && f) {
      n.value = d || "";
      try {
        n.focus(), n.select();
      } catch {
      }
    }
  }, [f, d]);
  let g = /* @__PURE__ */ _(
    O,
    {
      className: F([
        "Button",
        B && "Button--fluid",
        h && "Button--disabled",
        `Button--color--${u}`
      ]),
      ...P,
      onClick: () => x(!0),
      children: [
        t && /* @__PURE__ */ r(S, { name: t, rotation: i, spin: e }),
        /* @__PURE__ */ r("div", { children: w }),
        /* @__PURE__ */ r(
          "input",
          {
            disabled: !!h,
            ref: b,
            className: "NumberInput__input",
            style: {
              display: f ? "" : "none",
              textAlign: "left"
            },
            onBlur: (n) => {
              f && (x(!1), y(n));
            },
            onKeyDown: (n) => {
              if (n.key === D.Enter) {
                x(!1), y(n);
                return;
              }
              E(n.key) && x(!1);
            }
          }
        )
      ]
    }
  );
  return I && (g = /* @__PURE__ */ r(v, { content: I, position: R, children: g })), g;
}
function G(o) {
  const { accept: s, multiple: u, onSelectFiles: m, ...d } = o, l = z(null);
  async function h(t) {
    const i = Array.from(t).map((e) => {
      const c = new FileReader();
      return new Promise((a) => {
        c.onload = () => a(c.result), c.readAsText(e);
      });
    });
    return await Promise.all(i);
  }
  async function B(t) {
    const i = t.target.files;
    if (i != null && i.length) {
      const e = await h(i);
      m(u ? e : e[0]);
    }
  }
  return /* @__PURE__ */ _(K, { children: [
    /* @__PURE__ */ r(N, { onClick: () => {
      var t;
      return (t = l.current) == null ? void 0 : t.click();
    }, ...d }),
    /* @__PURE__ */ r(
      "input",
      {
        hidden: !0,
        type: "file",
        ref: l,
        accept: s,
        multiple: u,
        onChange: B
      }
    )
  ] });
}
((o) => {
  o.Checkbox = T, o.Confirm = L, o.Input = Y, o.File = G;
})(N || (N = {}));
export {
  N as Button
};
