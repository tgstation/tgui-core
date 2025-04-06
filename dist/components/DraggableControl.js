import { jsxs as W, Fragment as Z, jsx as P } from "react/jsx-runtime";
import { useState as y, useRef as c, useEffect as C } from "react";
import { KEY as Y } from "../common/keys.js";
import { clamp as F } from "../common/math.js";
import { AnimatedNumber as ee } from "./AnimatedNumber.js";
const te = 400;
function K(r, p) {
  return r.screenX * p[0] + r.screenY * p[1];
}
function se(r) {
  const {
    // Our props
    animated: p,
    children: M,
    dragMatrix: V = [1, 0],
    format: E,
    maxValue: g = Number.POSITIVE_INFINITY,
    minValue: l = Number.NEGATIVE_INFINITY,
    onChange: s,
    onDrag: a,
    step: o = 1,
    stepPixelSize: O = 1,
    suppressFlicker: S = 50,
    unclamped: j,
    unit: h,
    updateRate: w = te,
    // Box props
    fontSize: z,
    height: B,
    lineHeight: U
  } = r, [G, T] = y(r.value), [v, f] = y(!1), [k, D] = y(!1), i = c(!1), n = c(0), m = c(0), R = c(null), N = c(null), I = c(null), b = c(null);
  C(() => {
    T(r.value);
  }, [r.value]);
  function _(e) {
    if (document.body.style["pointer-events"] = "auto", b.current && clearTimeout(b.current), I.current && clearInterval(I.current), i.current = !1, f(!1), m.current = 0, document.removeEventListener("mousemove", x), document.removeEventListener("mouseup", _), L(), s == null || s(e, n.current), a == null || a(e, n.current), N.current) {
      const t = N.current;
      t.value = n.toString(), setTimeout(() => {
        t.focus(), t.select();
      }, 10);
    }
  }
  function x(e) {
    if (!m.current) return;
    const t = K(e, V), u = t - m.current;
    if (!i.current) {
      Math.abs(u) > 4 && (i.current = !0);
      return;
    }
    const Q = Number.isFinite(l) ? l % o : 0;
    n.current = F(
      n.current + u * o / O,
      l - o,
      g + o
    ), T(
      F(
        n.current - n.current % o + Q,
        l,
        g
      )
    ), m.current = t;
  }
  function H(e) {
    if (v) return;
    const t = e.nativeEvent;
    document.body.style["pointer-events"] = "none", m.current = K(t, V), n.current = r.value, b.current = setTimeout(() => {
      i.current = !0;
    }, 250), I.current = setInterval(() => {
      i && (a == null || a(t, r.value));
    }, w), document.addEventListener("mousemove", x), document.addEventListener("mouseup", _);
  }
  function X(e) {
    if (e.key === Y.Enter) {
      e.preventDefault(), e.stopPropagation(), A(e.nativeEvent, e.currentTarget.value);
      return;
    }
    if (e.key === Y.Escape) {
      f(!1);
      return;
    }
  }
  function A(e, t) {
    let u = Number.parseFloat(t);
    if (j || (u = F(u, l, g)), Number.isNaN(u)) {
      f(!1);
      return;
    }
    f(!1), T(u), n.current = u, L(), s == null || s(e, u);
  }
  function L() {
    if (S <= 0) return;
    const e = R.current;
    if (e)
      return D(!0), clearTimeout(e), R.current = setTimeout(() => {
        D(!1);
      }, S), () => clearTimeout(e);
  }
  function $(e) {
    v && f(!1), A(e.nativeEvent, e.currentTarget.value);
  }
  let d = r.value;
  (i.current || k) && (d = G);
  const q = /* @__PURE__ */ W(Z, { children: [
    p && !i.current && !k ? /* @__PURE__ */ P(ee, { value: d, format: E }) : E ? E(d) : d,
    h ? ` ${h}` : ""
  ] }), J = /* @__PURE__ */ P(
    "input",
    {
      ref: N,
      className: "NumberInput__input",
      style: {
        display: v ? void 0 : "none",
        height: B,
        lineHeight: U,
        fontSize: z
      },
      onBlur: $,
      onKeyDown: X
    }
  );
  return M({
    displayElement: q,
    displayValue: d,
    dragging: i.current,
    editing: v,
    handleDragStart: H,
    inputElement: J
  });
}
export {
  se as DraggableControl
};
