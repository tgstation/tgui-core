import { jsx as c, jsxs as _, Fragment as V } from "react/jsx-runtime";
import { useState as A, createRef as $, useEffect as j, useRef as q } from "react";
import { KEY as P, isEscape as E } from "../common/keys.js";
import { classes as S } from "../common/react.js";
import { computeBoxProps as z, computeBoxClassName as O } from "../common/ui.js";
import { Box as T } from "./Box.js";
import { Icon as v } from "./Icon.js";
import { Tooltip as K } from "./Tooltip.js";
function R(e) {
  const {
    captureKeys: s = !0,
    children: u,
    circular: m,
    className: p,
    color: r,
    compact: h,
    content: B,
    disabled: t,
    ellipsis: o,
    fluid: l,
    icon: i,
    iconColor: a,
    iconPosition: C,
    iconRotation: x,
    iconSize: y,
    iconSpin: D,
    onClick: f,
    selected: b,
    tooltip: g,
    tooltipPosition: F,
    verticalAlignContent: k,
    ...I
  } = e, n = B || u, N = /* @__PURE__ */ c(
    v,
    {
      className: "Button--icon",
      name: i || "",
      color: a,
      rotation: x,
      size: y,
      spin: D
    }
  );
  let w = /* @__PURE__ */ c(
    "div",
    {
      className: S([
        "Button",
        l && "Button--fluid",
        t && "Button--disabled",
        b && "Button--selected",
        m && "Button--circular",
        h && "Button--compact",
        !n && "Button--empty",
        C && `Button--icon-${C}`,
        k && "Button--flex",
        k && l && "Button--flex--fluid",
        k && `Button--verticalAlignContent--${k}`,
        r && typeof r == "string" ? `Button--color--${r}` : "Button--color--default",
        p,
        O(I)
      ]),
      tabIndex: t ? void 0 : 0,
      onClick: (d) => {
        !t && f && f(d);
      },
      onKeyDown: (d) => {
        if (s) {
          if (d.key === P.Space || d.key === P.Enter) {
            d.preventDefault(), !t && f && f(d);
            return;
          }
          E(d.key) && d.preventDefault();
        }
      },
      ...z(I),
      children: /* @__PURE__ */ _(
        "div",
        {
          className: S([
            "Button__content",
            o && "Button__content--ellipsis"
          ]),
          children: [
            i && C !== "right" && N,
            o ? /* @__PURE__ */ c("span", { className: "Button--ellipsis", children: n }) : n,
            i && C === "right" && N
          ]
        }
      )
    }
  );
  return g && (w = /* @__PURE__ */ c(K, { content: g, position: F, children: w })), w;
}
function L(e) {
  const { checked: s, ...u } = e;
  return /* @__PURE__ */ c(
    R,
    {
      color: "transparent",
      icon: s ? "check-square-o" : "square-o",
      selected: s,
      ...u
    }
  );
}
function Y(e) {
  const {
    children: s,
    color: u,
    confirmColor: m = "bad",
    confirmContent: p = "Confirm?",
    confirmIcon: r,
    ellipsis: h = !0,
    icon: B,
    onBlur: t,
    onClick: o,
    ...l
  } = e, [i, a] = A(!1);
  function C(y) {
    a(!1), t == null || t(y);
  }
  function x(y) {
    if (!i) {
      a(!0);
      return;
    }
    o == null || o(y), a(!1);
  }
  return /* @__PURE__ */ c(
    R,
    {
      icon: i ? r : B,
      color: i ? m : u,
      onBlur: C,
      onClick: x,
      ...l,
      children: i ? p : s
    }
  );
}
function G(e) {
  const {
    children: s,
    color: u = "default",
    content: m,
    currentValue: p,
    defaultValue: r,
    disabled: h,
    fluid: B,
    icon: t,
    iconRotation: o,
    iconSpin: l,
    maxLength: i,
    onCommit: a = () => null,
    placeholder: C,
    tooltip: x,
    tooltipPosition: y,
    ...D
  } = e, [f, b] = A(!1), g = $(), F = m || s;
  function k(n) {
    const N = g.current;
    if (!N) return;
    N.value !== "" ? a(n, N.value) : r && a(n, r);
  }
  j(() => {
    const n = g.current;
    if (n && f) {
      n.value = p || "";
      try {
        n.focus(), n.select();
      } catch {
      }
    }
  }, [f, p]);
  let I = /* @__PURE__ */ _(
    T,
    {
      className: S([
        "Button",
        B && "Button--fluid",
        h && "Button--disabled",
        `Button--color--${u}`
      ]),
      ...D,
      onClick: () => b(!0),
      children: [
        t && /* @__PURE__ */ c(v, { name: t, rotation: o, spin: l }),
        /* @__PURE__ */ c("div", { children: F }),
        /* @__PURE__ */ c(
          "input",
          {
            disabled: !!h,
            ref: g,
            className: "NumberInput__input",
            style: {
              display: f ? "" : "none",
              textAlign: "left"
            },
            onBlur: (n) => {
              f && (b(!1), k(n));
            },
            onKeyDown: (n) => {
              if (n.key === P.Enter) {
                b(!1), k(n);
                return;
              }
              E(n.key) && b(!1);
            }
          }
        )
      ]
    }
  );
  return x && (I = /* @__PURE__ */ c(K, { content: x, position: y, children: I })), I;
}
function H(e) {
  const { accept: s, multiple: u, onSelectFiles: m, ...p } = e, r = q(null);
  async function h(t) {
    const o = Array.from(t).map((l) => {
      const i = new FileReader();
      return new Promise((a) => {
        i.onload = () => a(i.result), i.readAsText(l);
      });
    });
    return await Promise.all(o);
  }
  async function B(t) {
    const o = t.target.files;
    if (o != null && o.length) {
      const l = await h(o);
      m(u ? l : l[0]);
    }
  }
  return /* @__PURE__ */ _(V, { children: [
    /* @__PURE__ */ c(R, { onClick: () => {
      var t;
      return (t = r.current) == null ? void 0 : t.click();
    }, ...p }),
    /* @__PURE__ */ c(
      "input",
      {
        hidden: !0,
        type: "file",
        ref: r,
        accept: s,
        multiple: u,
        onChange: B
      }
    )
  ] });
}
((e) => {
  e.Checkbox = L, e.Confirm = Y, e.Input = G, e.File = H;
})(R || (R = {}));
export {
  R as Button
};
