import { jsx as l, jsxs as E, Fragment as S } from "react/jsx-runtime";
import { useState as F, createRef as K, useEffect as M, useRef as V } from "react";
import { KEY as I } from "../common/keys.js";
import { classes as R } from "../common/react.js";
import { computeBoxClassName as j, computeBoxProps as q, Box as O } from "./Box.js";
import { Icon as D } from "./Icon.js";
import { Tooltip as P } from "./Tooltip.js";
import '../assets/Button.css';const T = "_button_433yx_17", L = "_fa_433yx_34", Y = "_fas_433yx_35", z = "_far_433yx_36", G = "_dropdown_433yx_43", H = "_ellipsis_433yx_49", J = "_fluid_433yx_54", Q = "_circular_433yx_60", U = "_compact_433yx_64", W = "_color__black_433yx_69", X = "_color__white_433yx_82", Z = "_color__red_433yx_95", $ = "_color__orange_433yx_108", oo = "_color__yellow_433yx_121", to = "_color__olive_433yx_134", _o = "_color__green_433yx_147", no = "_color__teal_433yx_160", eo = "_color__blue_433yx_173", lo = "_color__violet_433yx_186", co = "_color__purple_433yx_199", ro = "_color__pink_433yx_212", io = "_color__brown_433yx_225", so = "_color__grey_433yx_238", ao = "_color__good_433yx_264", uo = "_color__average_433yx_277", fo = "_color__bad_433yx_290", po = "_color__label_433yx_303", yo = "_color__default_433yx_316", xo = "_color__caution_433yx_329", mo = "_color__danger_433yx_342", go = "_color__transparent_433yx_355", bo = "_disabled_433yx_370", ho = "_selected_433yx_374", Co = "_flex_433yx_387", ko = "_flex__fluid_433yx_392", vo = "_verticalAlignContent__top_433yx_396", wo = "_verticalAlignContent__middle_433yx_400", Ao = "_verticalAlignContent__bottom_433yx_404", Bo = "_content_433yx_408", Io = "_textMargin_433yx_413", _ = {
  button: T,
  fa: L,
  fas: Y,
  far: z,
  dropdown: G,
  ellipsis: H,
  fluid: J,
  circular: Q,
  compact: U,
  color__black: W,
  color__white: X,
  color__red: Z,
  color__orange: $,
  color__yellow: oo,
  color__olive: to,
  color__green: _o,
  color__teal: no,
  color__blue: eo,
  color__violet: lo,
  color__purple: co,
  color__pink: ro,
  color__brown: io,
  color__grey: so,
  "color__light-grey": "_color__light-grey_433yx_251",
  color__good: ao,
  color__average: uo,
  color__bad: fo,
  color__label: po,
  color__default: yo,
  color__caution: xo,
  color__danger: mo,
  color__transparent: go,
  disabled: bo,
  selected: ho,
  flex: Co,
  flex__fluid: ko,
  verticalAlignContent__top: vo,
  verticalAlignContent__middle: wo,
  verticalAlignContent__bottom: Ao,
  content: Bo,
  textMargin: Io
};
function g(u) {
  const {
    captureKeys: s = !0,
    children: a,
    circular: y,
    className: f,
    color: i,
    compact: b,
    content: x,
    disabled: o,
    ellipsis: c,
    fluid: n,
    icon: e,
    iconColor: d,
    iconPosition: v,
    iconRotation: w,
    iconSpin: N,
    onClick: h,
    selected: C,
    tooltip: m,
    tooltipPosition: A,
    verticalAlignContent: k,
    ...B
  } = u, p = x || a;
  let t = /* @__PURE__ */ l(
    "div",
    {
      className: R([
        _.button,
        n && _.fluid,
        o && _.disabled,
        C && _.selected,
        y && _.circular,
        b && _.compact,
        k && _.flex,
        k && n && _.flex__fluid,
        k && _["verticalAlignContent__" + k],
        i && typeof i == "string" ? _["color__" + i] : _.color__default,
        f,
        j(B)
      ]),
      tabIndex: o ? void 0 : 0,
      onClick: (r) => {
        !o && h && h(r);
      },
      onKeyDown: (r) => {
        if (s) {
          if (r.key === I.Space || r.key === I.Enter) {
            r.preventDefault(), !o && h && h(r);
            return;
          }
          r.key === I.Escape && r.preventDefault();
        }
      },
      ...q(B),
      children: /* @__PURE__ */ E("div", { className: _.content, children: [
        e && v !== "right" && /* @__PURE__ */ l(
          D,
          {
            mr: p ? 1 : 0,
            name: e,
            color: d,
            rotation: w,
            spin: N
          }
        ),
        c ? /* @__PURE__ */ l(
          "span",
          {
            className: R([_.ellipsis, e && _.textMargin]),
            children: p
          }
        ) : p,
        e && v === "right" && /* @__PURE__ */ l(
          D,
          {
            ml: p ? 1 : 0,
            name: e,
            color: d,
            rotation: w,
            spin: N
          }
        )
      ] })
    }
  );
  return m && (t = /* @__PURE__ */ l(P, { content: m, position: A, children: t })), t;
}
function No(u) {
  const { checked: s, ...a } = u;
  return /* @__PURE__ */ l(
    g,
    {
      color: "transparent",
      icon: s ? "check-square-o" : "square-o",
      selected: s,
      ...a
    }
  );
}
g.Checkbox = No;
function Ro(u) {
  const {
    children: s,
    color: a,
    confirmColor: y = "bad",
    confirmContent: f = "Confirm?",
    confirmIcon: i,
    ellipsis: b = !0,
    icon: x,
    onClick: o,
    ...c
  } = u, [n, e] = F(!1);
  function d(v) {
    if (!n) {
      e(!0);
      return;
    }
    o == null || o(v), e(!1);
  }
  return /* @__PURE__ */ l(
    g,
    {
      icon: n ? i : x,
      color: n ? y : a,
      onClick: d,
      ...c,
      children: n ? f : s
    }
  );
}
g.Confirm = Ro;
function Do(u) {
  const {
    children: s,
    color: a = "default",
    content: y,
    currentValue: f,
    defaultValue: i,
    disabled: b,
    fluid: x,
    icon: o,
    iconRotation: c,
    iconSpin: n,
    maxLength: e,
    onCommit: d = () => null,
    placeholder: v,
    tooltip: w,
    tooltipPosition: N,
    ...h
  } = u, [C, m] = F(!1), A = K(), k = y || s;
  function B(t) {
    const r = A.current;
    if (!r) return;
    r.value !== "" ? d(t, r.value) : i && d(t, i);
  }
  M(() => {
    const t = A.current;
    if (t && C) {
      t.value = f || "";
      try {
        t.focus(), t.select();
      } catch {
      }
    }
  }, [C, f]);
  let p = /* @__PURE__ */ E(
    O,
    {
      className: R([
        _.button,
        x && _.fluid,
        _["color__" + a]
      ]),
      ...h,
      onClick: () => m(!0),
      children: [
        o && /* @__PURE__ */ l(D, { name: o, rotation: c, spin: n }),
        /* @__PURE__ */ l("div", { children: k }),
        /* @__PURE__ */ l(
          "input",
          {
            disabled: !!b,
            ref: A,
            className: "NumberInput__input",
            style: {
              display: C ? "" : "none",
              textAlign: "left"
            },
            onBlur: (t) => {
              C && (m(!1), B(t));
            },
            onKeyDown: (t) => {
              if (t.key === I.Enter) {
                m(!1), B(t);
                return;
              }
              t.key === I.Escape && m(!1);
            }
          }
        )
      ]
    }
  );
  return w && (p = /* @__PURE__ */ l(P, { content: w, position: N, children: p })), p;
}
g.Input = Do;
function Eo(u) {
  const { accept: s, multiple: a, onSelectFiles: y, ...f } = u, i = V(null);
  async function b(o) {
    const c = Array.from(o).map((n) => {
      const e = new FileReader();
      return new Promise((d) => {
        e.onload = () => d(e.result), e.readAsText(n);
      });
    });
    return await Promise.all(c);
  }
  async function x(o) {
    const c = o.target.files;
    if (c != null && c.length) {
      const n = await b(c);
      y(a ? n : n[0]);
    }
  }
  return /* @__PURE__ */ E(S, { children: [
    /* @__PURE__ */ l(g, { onClick: () => {
      var o;
      return (o = i.current) == null ? void 0 : o.click();
    }, ...f }),
    /* @__PURE__ */ l(
      "input",
      {
        hidden: !0,
        type: "file",
        ref: i,
        accept: s,
        multiple: a,
        onChange: x
      }
    )
  ] });
}
g.File = Eo;
export {
  g as Button,
  No as ButtonCheckbox
};
