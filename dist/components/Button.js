import { jsx as r, jsxs as _, Fragment as K } from "react/jsx-runtime";
import { useState as A, createRef as V, useEffect as $, useRef as z } from "react";
import { KEY as F, isEscape as E } from "../common/keys.js";
import { classes as P } from "../common/react.js";
import { computeBoxProps as j, computeBoxClassName as q } from "../common/ui.js";
import { Box as O } from "./Box.js";
import { Icon as S } from "./Icon.js";
import { Tooltip as v } from "./Tooltip.js";
function R(e) {
  const {
    captureKeys: u = !0,
    children: a,
    circular: h,
    className: d,
    color: c,
    compact: B,
    content: C,
    disabled: t,
    ellipsis: o,
    fluid: l,
    icon: i,
    iconColor: s,
    iconPosition: y,
    iconRotation: k,
    iconSize: m,
    iconSpin: w,
    onClick: f,
    selected: g,
    tooltip: I,
    tooltipPosition: D,
    verticalAlignContent: x,
    ...N
  } = e, n = C || a;
  let b = /* @__PURE__ */ r(
    "div",
    {
      className: P([
        "Button",
        l && "Button--fluid",
        t && "Button--disabled",
        g && "Button--selected",
        h && "Button--circular",
        B && "Button--compact",
        !n && "Button--empty",
        y && `Button--icon-${y}`,
        x && "Button--flex",
        x && l && "Button--flex--fluid",
        x && `Button--verticalAlignContent--${x}`,
        c && typeof c == "string" ? `Button--color--${c}` : "Button--color--default",
        d,
        q(N)
      ]),
      tabIndex: t ? void 0 : 0,
      onClick: (p) => {
        !t && f && f(p);
      },
      onKeyDown: (p) => {
        if (u) {
          if (p.key === F.Space || p.key === F.Enter) {
            p.preventDefault(), !t && f && f(p);
            return;
          }
          E(p.key) && p.preventDefault();
        }
      },
      ...j(N),
      children: /* @__PURE__ */ _(
        "div",
        {
          className: P([
            "Button__content",
            o && "Button__content--ellipsis"
          ]),
          children: [
            i && y !== "right" && /* @__PURE__ */ r(
              S,
              {
                name: i,
                color: s,
                rotation: k,
                size: m,
                spin: w
              }
            ),
            o ? /* @__PURE__ */ r("span", { className: "Button--ellipsis", children: n }) : n,
            i && y === "right" && /* @__PURE__ */ r(
              S,
              {
                name: i,
                color: s,
                rotation: k,
                size: m,
                spin: w
              }
            )
          ]
        }
      )
    }
  );
  return I && (b = /* @__PURE__ */ r(v, { content: I, position: D, children: b })), b;
}
function T(e) {
  const { checked: u, ...a } = e;
  return /* @__PURE__ */ r(
    R,
    {
      color: "transparent",
      icon: u ? "check-square-o" : "square-o",
      selected: u,
      ...a
    }
  );
}
function L(e) {
  const {
    children: u,
    color: a,
    confirmColor: h = "bad",
    confirmContent: d = "Confirm?",
    confirmIcon: c,
    ellipsis: B = !0,
    icon: C,
    onBlur: t,
    onClick: o,
    ...l
  } = e, [i, s] = A(!1);
  function y(m) {
    s(!1), t == null || t(m);
  }
  function k(m) {
    if (!i) {
      s(!0);
      return;
    }
    o == null || o(m), s(!1);
  }
  return /* @__PURE__ */ r(
    R,
    {
      icon: i ? c : C,
      color: i ? h : a,
      onBlur: y,
      onClick: k,
      ...l,
      children: i ? d : u
    }
  );
}
function Y(e) {
  const {
    children: u,
    color: a = "default",
    content: h,
    currentValue: d,
    defaultValue: c,
    disabled: B,
    fluid: C,
    icon: t,
    iconRotation: o,
    iconSpin: l,
    maxLength: i,
    onCommit: s = () => null,
    placeholder: y,
    tooltip: k,
    tooltipPosition: m,
    ...w
  } = e, [f, g] = A(!1), I = V(), D = h || u;
  function x(n) {
    const b = I.current;
    if (!b) return;
    b.value !== "" ? s(n, b.value) : c && s(n, c);
  }
  $(() => {
    const n = I.current;
    if (n && f) {
      n.value = d || "";
      try {
        n.focus(), n.select();
      } catch {
      }
    }
  }, [f, d]);
  let N = /* @__PURE__ */ _(
    O,
    {
      className: P([
        "Button",
        C && "Button--fluid",
        B && "Button--disabled",
        `Button--color--${a}`
      ]),
      ...w,
      onClick: () => g(!0),
      children: [
        t && /* @__PURE__ */ r(S, { name: t, rotation: o, spin: l }),
        /* @__PURE__ */ r("div", { children: D }),
        /* @__PURE__ */ r(
          "input",
          {
            disabled: !!B,
            ref: I,
            className: "NumberInput__input",
            style: {
              display: f ? "" : "none",
              textAlign: "left"
            },
            onBlur: (n) => {
              f && (g(!1), x(n));
            },
            onKeyDown: (n) => {
              if (n.key === F.Enter) {
                g(!1), x(n);
                return;
              }
              E(n.key) && g(!1);
            }
          }
        )
      ]
    }
  );
  return k && (N = /* @__PURE__ */ r(v, { content: k, position: m, children: N })), N;
}
function G(e) {
  const { accept: u, multiple: a, onSelectFiles: h, ...d } = e, c = z(null);
  async function B(t) {
    const o = Array.from(t).map((l) => {
      const i = new FileReader();
      return new Promise((s) => {
        i.onload = () => s(i.result), i.readAsText(l);
      });
    });
    return await Promise.all(o);
  }
  async function C(t) {
    const o = t.target.files;
    if (o != null && o.length) {
      const l = await B(o);
      h(a ? l : l[0]);
    }
  }
  return /* @__PURE__ */ _(K, { children: [
    /* @__PURE__ */ r(R, { onClick: () => {
      var t;
      return (t = c.current) == null ? void 0 : t.click();
    }, ...d }),
    /* @__PURE__ */ r(
      "input",
      {
        hidden: !0,
        type: "file",
        ref: c,
        accept: u,
        multiple: a,
        onChange: C
      }
    )
  ] });
}
((e) => {
  e.Checkbox = T, e.Confirm = L, e.Input = Y, e.File = G;
})(R || (R = {}));
export {
  R as Button
};
