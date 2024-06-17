import { jsx as l, jsxs as E, Fragment as S } from "react/jsx-runtime";
import { KEY as I } from "../common/keys.js";
import { classes as R } from "../common/react.js";
import { useState as F, createRef as K, useEffect as M, useRef as V } from "react";
import { computeBoxClassName as j, computeBoxProps as q, Box as O } from "./Box.js";
import { Icon as D } from "./Icon.js";
import { Tooltip as P } from "./Tooltip.js";
import '../assets/Button.css';const T = "_button_433yx_17", L = "_fa_433yx_34", Y = "_fas_433yx_35", z = "_far_433yx_36", G = "_dropdown_433yx_43", H = "_ellipsis_433yx_49", J = "_fluid_433yx_54", Q = "_circular_433yx_60", U = "_compact_433yx_64", W = "_color__black_433yx_69", X = "_color__white_433yx_82", Z = "_color__red_433yx_95", $ = "_color__orange_433yx_108", oo = "_color__yellow_433yx_121", to = "_color__olive_433yx_134", _o = "_color__green_433yx_147", eo = "_color__teal_433yx_160", no = "_color__blue_433yx_173", lo = "_color__violet_433yx_186", co = "_color__purple_433yx_199", ro = "_color__pink_433yx_212", io = "_color__brown_433yx_225", so = "_color__grey_433yx_238", ao = "_color__good_433yx_264", uo = "_color__average_433yx_277", fo = "_color__bad_433yx_290", po = "_color__label_433yx_303", yo = "_color__default_433yx_316", xo = "_color__caution_433yx_329", mo = "_color__danger_433yx_342", go = "_color__transparent_433yx_355", bo = "_disabled_433yx_370", ho = "_selected_433yx_374", Co = "_flex_433yx_387", ko = "_flex__fluid_433yx_392", vo = "_verticalAlignContent__top_433yx_396", wo = "_verticalAlignContent__middle_433yx_400", Ao = "_verticalAlignContent__bottom_433yx_404", Bo = "_content_433yx_408", Io = "_textMargin_433yx_413", _ = {
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
  color__teal: eo,
  color__blue: no,
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
}, m = (u) => {
  const {
    captureKeys: s = !0,
    children: a,
    circular: p,
    className: d,
    color: i,
    compact: g,
    content: y,
    disabled: o,
    ellipsis: c,
    fluid: e,
    icon: n,
    iconColor: f,
    iconPosition: v,
    iconRotation: w,
    iconSpin: N,
    onClick: b,
    selected: h,
    tooltip: x,
    tooltipPosition: A,
    verticalAlignContent: C,
    ...B
  } = u, k = y || a;
  let t = /* @__PURE__ */ l(
    "div",
    {
      className: R([
        _.button,
        e && _.fluid,
        o && _.disabled,
        h && _.selected,
        p && _.circular,
        g && _.compact,
        C && _.flex,
        C && e && _.flex__fluid,
        C && _["verticalAlignContent__" + C],
        i && typeof i == "string" ? _["color__" + i] : _.color__default,
        d,
        j(B)
      ]),
      tabIndex: o ? void 0 : 0,
      onClick: (r) => {
        !o && b && b(r);
      },
      onKeyDown: (r) => {
        if (s) {
          if (r.key === I.Space || r.key === I.Enter) {
            r.preventDefault(), !o && b && b(r);
            return;
          }
          r.key === I.Escape && r.preventDefault();
        }
      },
      ...q(B),
      children: /* @__PURE__ */ E("div", { className: _.content, children: [
        n && v !== "right" && /* @__PURE__ */ l(
          D,
          {
            mr: 1,
            name: n,
            color: f,
            rotation: w,
            spin: N
          }
        ),
        c ? /* @__PURE__ */ l(
          "span",
          {
            className: R([_.ellipsis, n && _.textMargin]),
            children: k
          }
        ) : k,
        n && v === "right" && /* @__PURE__ */ l(
          D,
          {
            ml: 1,
            name: n,
            color: f,
            rotation: w,
            spin: N
          }
        )
      ] })
    }
  );
  return x && (t = /* @__PURE__ */ l(P, { content: x, position: A, children: t })), t;
}, No = (u) => {
  const { checked: s, ...a } = u;
  return /* @__PURE__ */ l(
    m,
    {
      color: "transparent",
      icon: s ? "check-square-o" : "square-o",
      selected: s,
      ...a
    }
  );
};
m.Checkbox = No;
const Ro = (u) => {
  const {
    children: s,
    color: a,
    confirmColor: p = "bad",
    confirmContent: d = "Confirm?",
    confirmIcon: i,
    ellipsis: g = !0,
    icon: y,
    onClick: o,
    ...c
  } = u, [e, n] = F(!1);
  return /* @__PURE__ */ l(
    m,
    {
      icon: e ? i : y,
      color: e ? p : a,
      onClick: (v) => {
        if (!e) {
          n(!0);
          return;
        }
        o == null || o(v), n(!1);
      },
      ...c,
      children: e ? d : s
    }
  );
};
m.Confirm = Ro;
const Do = (u) => {
  const {
    children: s,
    color: a = "default",
    content: p,
    currentValue: d,
    defaultValue: i,
    disabled: g,
    fluid: y,
    icon: o,
    iconRotation: c,
    iconSpin: e,
    maxLength: n,
    onCommit: f = () => null,
    placeholder: v,
    tooltip: w,
    tooltipPosition: N,
    ...b
  } = u, [h, x] = F(!1), A = K(), C = p || s, B = (t) => {
    const r = A.current;
    if (!r)
      return;
    r.value !== "" ? f(t, r.value) : i && f(t, i);
  };
  M(() => {
    const t = A.current;
    if (t && h) {
      t.value = d || "";
      try {
        t.focus(), t.select();
      } catch {
      }
    }
  }, [h, d]);
  let k = /* @__PURE__ */ E(
    O,
    {
      className: R([
        _.button,
        y && _.fluid,
        _["color__" + a]
      ]),
      ...b,
      onClick: () => x(!0),
      children: [
        o && /* @__PURE__ */ l(D, { name: o, rotation: c, spin: e }),
        /* @__PURE__ */ l("div", { children: C }),
        /* @__PURE__ */ l(
          "input",
          {
            disabled: !!g,
            ref: A,
            className: "NumberInput__input",
            style: {
              display: h ? "" : "none",
              textAlign: "left"
            },
            onBlur: (t) => {
              h && (x(!1), B(t));
            },
            onKeyDown: (t) => {
              if (t.key === I.Enter) {
                x(!1), B(t);
                return;
              }
              t.key === I.Escape && x(!1);
            }
          }
        )
      ]
    }
  );
  return w && (k = /* @__PURE__ */ l(P, { content: w, position: N, children: k })), k;
};
m.Input = Do;
function Eo(u) {
  const { accept: s, multiple: a, onSelectFiles: p, ...d } = u, i = V(null);
  async function g(o) {
    const c = Array.from(o).map((e) => {
      const n = new FileReader();
      return new Promise((f) => {
        n.onload = () => f(n.result), n.readAsText(e);
      });
    });
    return await Promise.all(c);
  }
  async function y(o) {
    const c = o.target.files;
    if (c != null && c.length) {
      const e = await g(c);
      p(a ? e : e[0]);
    }
  }
  return /* @__PURE__ */ E(S, { children: [
    /* @__PURE__ */ l(m, { onClick: () => {
      var o;
      return (o = i.current) == null ? void 0 : o.click();
    }, ...d }),
    /* @__PURE__ */ l(
      "input",
      {
        hidden: !0,
        type: "file",
        ref: i,
        accept: s,
        multiple: a,
        onChange: y
      }
    )
  ] });
}
m.File = Eo;
export {
  m as Button,
  No as ButtonCheckbox
};
