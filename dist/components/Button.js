import { jsx as l, jsxs as P, Fragment as M } from "react/jsx-runtime";
import { useState as S, createRef as V, useEffect as z, useRef as j } from "react";
import { KEY as R, isEscape as E } from "../common/keys.js";
import { classes as D } from "../common/react.js";
import { computeBoxClassName as q, computeBoxProps as O, Box as T } from "./Box.js";
import { Icon as F } from "./Icon.js";
import { Tooltip as K } from "./Tooltip.js";
import '../assets/Button.css';const L = "_button_433yx_17", Y = "_fa_433yx_34", G = "_fas_433yx_35", H = "_far_433yx_36", J = "_dropdown_433yx_43", Q = "_ellipsis_433yx_49", U = "_fluid_433yx_54", W = "_circular_433yx_60", X = "_compact_433yx_64", Z = "_color__black_433yx_69", $ = "_color__white_433yx_82", oo = "_color__red_433yx_95", to = "_color__orange_433yx_108", _o = "_color__yellow_433yx_121", no = "_color__olive_433yx_134", eo = "_color__green_433yx_147", lo = "_color__teal_433yx_160", co = "_color__blue_433yx_173", ro = "_color__violet_433yx_186", io = "_color__purple_433yx_199", so = "_color__pink_433yx_212", ao = "_color__brown_433yx_225", uo = "_color__grey_433yx_238", fo = "_color__good_433yx_264", po = "_color__average_433yx_277", yo = "_color__bad_433yx_290", xo = "_color__label_433yx_303", mo = "_color__default_433yx_316", go = "_color__caution_433yx_329", bo = "_color__danger_433yx_342", ho = "_color__transparent_433yx_355", Co = "_disabled_433yx_370", ko = "_selected_433yx_374", vo = "_flex_433yx_387", wo = "_flex__fluid_433yx_392", Ao = "_verticalAlignContent__top_433yx_396", Bo = "_verticalAlignContent__middle_433yx_400", Io = "_verticalAlignContent__bottom_433yx_404", No = "_content_433yx_408", Ro = "_textMargin_433yx_413", _ = {
  button: L,
  fa: Y,
  fas: G,
  far: H,
  dropdown: J,
  ellipsis: Q,
  fluid: U,
  circular: W,
  compact: X,
  color__black: Z,
  color__white: $,
  color__red: oo,
  color__orange: to,
  color__yellow: _o,
  color__olive: no,
  color__green: eo,
  color__teal: lo,
  color__blue: co,
  color__violet: ro,
  color__purple: io,
  color__pink: so,
  color__brown: ao,
  color__grey: uo,
  "color__light-grey": "_color__light-grey_433yx_251",
  color__good: fo,
  color__average: po,
  color__bad: yo,
  color__label: xo,
  color__default: mo,
  color__caution: go,
  color__danger: bo,
  color__transparent: ho,
  disabled: Co,
  selected: ko,
  flex: vo,
  flex__fluid: wo,
  verticalAlignContent__top: Ao,
  verticalAlignContent__middle: Bo,
  verticalAlignContent__bottom: Io,
  content: No,
  textMargin: Ro
};
function b(a) {
  const {
    captureKeys: i = !0,
    children: s,
    circular: y,
    className: p,
    color: r,
    compact: h,
    content: x,
    disabled: o,
    ellipsis: c,
    fluid: n,
    icon: e,
    iconColor: u,
    iconPosition: w,
    iconRotation: A,
    iconSize: B,
    iconSpin: I,
    onClick: d,
    selected: C,
    tooltip: k,
    tooltipPosition: N,
    verticalAlignContent: m,
    ...v
  } = a, t = x || s;
  let g = /* @__PURE__ */ l(
    "div",
    {
      className: D([
        _.button,
        n && _.fluid,
        o && _.disabled,
        C && _.selected,
        y && _.circular,
        h && _.compact,
        m && _.flex,
        m && n && _.flex__fluid,
        m && _["verticalAlignContent__" + m],
        r && typeof r == "string" ? _["color__" + r] : _.color__default,
        p,
        q(v)
      ]),
      tabIndex: o ? void 0 : 0,
      onClick: (f) => {
        !o && d && d(f);
      },
      onKeyDown: (f) => {
        if (i) {
          if (f.key === R.Space || f.key === R.Enter) {
            f.preventDefault(), !o && d && d(f);
            return;
          }
          E(f.key) && f.preventDefault();
        }
      },
      ...O(v),
      children: /* @__PURE__ */ P("div", { className: _.content, children: [
        e && w !== "right" && /* @__PURE__ */ l(
          F,
          {
            mr: t ? 1 : 0,
            name: e,
            color: u,
            rotation: A,
            size: B,
            spin: I
          }
        ),
        c ? /* @__PURE__ */ l(
          "span",
          {
            className: D([_.ellipsis, e && _.textMargin]),
            children: t
          }
        ) : t,
        e && w === "right" && /* @__PURE__ */ l(
          F,
          {
            ml: t ? 1 : 0,
            name: e,
            color: u,
            rotation: A,
            size: B,
            spin: I
          }
        )
      ] })
    }
  );
  return k && (g = /* @__PURE__ */ l(K, { content: k, position: N, children: g })), g;
}
function Do(a) {
  const { checked: i, ...s } = a;
  return /* @__PURE__ */ l(
    b,
    {
      color: "transparent",
      icon: i ? "check-square-o" : "square-o",
      selected: i,
      ...s
    }
  );
}
b.Checkbox = Do;
function Fo(a) {
  const {
    children: i,
    color: s,
    confirmColor: y = "bad",
    confirmContent: p = "Confirm?",
    confirmIcon: r,
    ellipsis: h = !0,
    icon: x,
    onClick: o,
    ...c
  } = a, [n, e] = S(!1);
  function u(w) {
    if (!n) {
      e(!0);
      return;
    }
    o == null || o(w), e(!1);
  }
  return /* @__PURE__ */ l(
    b,
    {
      icon: n ? r : x,
      color: n ? y : s,
      onClick: u,
      ...c,
      children: n ? p : i
    }
  );
}
b.Confirm = Fo;
function Po(a) {
  const {
    children: i,
    color: s = "default",
    content: y,
    currentValue: p,
    defaultValue: r,
    disabled: h,
    fluid: x,
    icon: o,
    iconRotation: c,
    iconSpin: n,
    maxLength: e,
    onCommit: u = () => null,
    placeholder: w,
    tooltip: A,
    tooltipPosition: B,
    ...I
  } = a, [d, C] = S(!1), k = V(), N = y || i;
  function m(t) {
    const g = k.current;
    if (!g) return;
    g.value !== "" ? u(t, g.value) : r && u(t, r);
  }
  z(() => {
    const t = k.current;
    if (t && d) {
      t.value = p || "";
      try {
        t.focus(), t.select();
      } catch {
      }
    }
  }, [d, p]);
  let v = /* @__PURE__ */ P(
    T,
    {
      className: D([
        _.button,
        x && _.fluid,
        _["color__" + s]
      ]),
      ...I,
      onClick: () => C(!0),
      children: [
        o && /* @__PURE__ */ l(F, { name: o, rotation: c, spin: n }),
        /* @__PURE__ */ l("div", { children: N }),
        /* @__PURE__ */ l(
          "input",
          {
            disabled: !!h,
            ref: k,
            className: "NumberInput__input",
            style: {
              display: d ? "" : "none",
              textAlign: "left"
            },
            onBlur: (t) => {
              d && (C(!1), m(t));
            },
            onKeyDown: (t) => {
              if (t.key === R.Enter) {
                C(!1), m(t);
                return;
              }
              E(t.key) && C(!1);
            }
          }
        )
      ]
    }
  );
  return A && (v = /* @__PURE__ */ l(K, { content: A, position: B, children: v })), v;
}
b.Input = Po;
function So(a) {
  const { accept: i, multiple: s, onSelectFiles: y, ...p } = a, r = j(null);
  async function h(o) {
    const c = Array.from(o).map((n) => {
      const e = new FileReader();
      return new Promise((u) => {
        e.onload = () => u(e.result), e.readAsText(n);
      });
    });
    return await Promise.all(c);
  }
  async function x(o) {
    const c = o.target.files;
    if (c != null && c.length) {
      const n = await h(c);
      y(s ? n : n[0]);
    }
  }
  return /* @__PURE__ */ P(M, { children: [
    /* @__PURE__ */ l(b, { onClick: () => {
      var o;
      return (o = r.current) == null ? void 0 : o.click();
    }, ...p }),
    /* @__PURE__ */ l(
      "input",
      {
        hidden: !0,
        type: "file",
        ref: r,
        accept: i,
        multiple: s,
        onChange: x
      }
    )
  ] });
}
b.File = So;
export {
  b as Button,
  Do as ButtonCheckbox
};
