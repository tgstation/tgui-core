import { jsx as i, jsxs as _, Fragment as K } from "react/jsx-runtime";
import { useState as A, createRef as V, useEffect as $, useRef as z } from "react";
import { KEY as D, isEscape as E } from "../common/keys.js";
import { classes as F } from "../common/react.js";
import { computeBoxClassName as j, computeBoxProps as q } from "../common/ui.js";
import { Box as O } from "./Box.js";
import { Icon as S } from "./Icon.js";
import { Tooltip as v } from "./Tooltip.js";
function x(u) {
  const {
    captureKeys: l = !0,
    children: s,
    circular: m,
    className: d,
    color: c,
    compact: h,
    content: B,
    disabled: t,
    ellipsis: r,
    fluid: o,
    icon: e,
    iconColor: a,
    iconPosition: C,
    iconRotation: N,
    iconSize: R,
    iconSpin: P,
    onClick: f,
    selected: g,
    tooltip: b,
    tooltipPosition: w,
    verticalAlignContent: y,
    ...I
  } = u, n = B || s;
  let k = /* @__PURE__ */ i(
    "div",
    {
      className: F([
        "Button",
        o && "Button--fluid",
        t && "Button--disabled",
        g && "Button--selected",
        m && "Button--circular",
        h && "Button--compact",
        C && `Button--iconPosition--${C}`,
        y && "Button--flex",
        y && o && "Button--flex--fluid",
        y && `Button--verticalAlignContent--${y}`,
        c && typeof c == "string" ? `Button--color--${c}` : "Button--color--default",
        d,
        j(I)
      ]),
      tabIndex: t ? void 0 : 0,
      onClick: (p) => {
        !t && f && f(p);
      },
      onKeyDown: (p) => {
        if (l) {
          if (p.key === D.Space || p.key === D.Enter) {
            p.preventDefault(), !t && f && f(p);
            return;
          }
          E(p.key) && p.preventDefault();
        }
      },
      ...q(I),
      children: /* @__PURE__ */ _("div", { className: "Button__content", children: [
        e && C !== "right" && /* @__PURE__ */ i(
          S,
          {
            mr: n ? 0.5 : 0,
            name: e,
            color: a,
            rotation: N,
            size: R,
            spin: P
          }
        ),
        r ? /* @__PURE__ */ i(
          "span",
          {
            className: F([
              "Button--ellipsis",
              e && "Button__textMargin"
            ]),
            children: n
          }
        ) : n,
        e && C === "right" && /* @__PURE__ */ i(
          S,
          {
            ml: n ? 0.5 : 0,
            name: e,
            color: a,
            rotation: N,
            size: R,
            spin: P
          }
        )
      ] })
    }
  );
  return b && (k = /* @__PURE__ */ i(v, { content: b, position: w, children: k })), k;
}
function T(u) {
  const { checked: l, ...s } = u;
  return /* @__PURE__ */ i(
    x,
    {
      color: "transparent",
      icon: l ? "check-square-o" : "square-o",
      selected: l,
      ...s
    }
  );
}
x.Checkbox = T;
function L(u) {
  const {
    children: l,
    color: s,
    confirmColor: m = "bad",
    confirmContent: d = "Confirm?",
    confirmIcon: c,
    ellipsis: h = !0,
    icon: B,
    onClick: t,
    ...r
  } = u, [o, e] = A(!1);
  function a(C) {
    if (!o) {
      e(!0);
      return;
    }
    t == null || t(C), e(!1);
  }
  return /* @__PURE__ */ i(
    x,
    {
      icon: o ? c : B,
      color: o ? m : s,
      onClick: a,
      ...r,
      children: o ? d : l
    }
  );
}
x.Confirm = L;
function M(u) {
  const {
    children: l,
    color: s = "default",
    content: m,
    currentValue: d,
    defaultValue: c,
    disabled: h,
    fluid: B,
    icon: t,
    iconRotation: r,
    iconSpin: o,
    maxLength: e,
    onCommit: a = () => null,
    placeholder: C,
    tooltip: N,
    tooltipPosition: R,
    ...P
  } = u, [f, g] = A(!1), b = V(), w = m || l;
  function y(n) {
    const k = b.current;
    if (!k) return;
    k.value !== "" ? a(n, k.value) : c && a(n, c);
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
  let I = /* @__PURE__ */ _(
    O,
    {
      className: F([
        "Button",
        B && "Button--fluid",
        h && "Button--disabled",
        `Button--color--${s}`
      ]),
      ...P,
      onClick: () => g(!0),
      children: [
        t && /* @__PURE__ */ i(S, { name: t, rotation: r, spin: o }),
        /* @__PURE__ */ i("div", { children: w }),
        /* @__PURE__ */ i(
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
              f && (g(!1), y(n));
            },
            onKeyDown: (n) => {
              if (n.key === D.Enter) {
                g(!1), y(n);
                return;
              }
              E(n.key) && g(!1);
            }
          }
        )
      ]
    }
  );
  return N && (I = /* @__PURE__ */ i(v, { content: N, position: R, children: I })), I;
}
x.Input = M;
function Y(u) {
  const { accept: l, multiple: s, onSelectFiles: m, ...d } = u, c = z(null);
  async function h(t) {
    const r = Array.from(t).map((o) => {
      const e = new FileReader();
      return new Promise((a) => {
        e.onload = () => a(e.result), e.readAsText(o);
      });
    });
    return await Promise.all(r);
  }
  async function B(t) {
    const r = t.target.files;
    if (r != null && r.length) {
      const o = await h(r);
      m(s ? o : o[0]);
    }
  }
  return /* @__PURE__ */ _(K, { children: [
    /* @__PURE__ */ i(x, { onClick: () => {
      var t;
      return (t = c.current) == null ? void 0 : t.click();
    }, ...d }),
    /* @__PURE__ */ i(
      "input",
      {
        hidden: !0,
        type: "file",
        ref: c,
        accept: l,
        multiple: s,
        onChange: B
      }
    )
  ] });
}
x.File = Y;
export {
  x as Button,
  T as ButtonCheckbox
};
