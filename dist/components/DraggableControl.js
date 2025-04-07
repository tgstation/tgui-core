import { jsxs as $, Fragment as q, jsx as D } from "react/jsx-runtime";
import { useState as F, useRef as i, useEffect as J } from "react";
import { KEY as Q, isEscape as W } from "../common/keys.js";
import { clamp as b } from "../common/math.js";
import { AnimatedNumber as Z } from "./AnimatedNumber.js";
const C = 400, x = -1;
function A(n, m) {
  return n.screenX * m[0] + n.screenY * m[1];
}
function ie(n) {
  const {
    // Our props
    animated: m,
    children: L,
    dragMatrix: S = [1, 0],
    format: g,
    maxValue: N = Number.POSITIVE_INFINITY,
    minValue: o = Number.NEGATIVE_INFINITY,
    onChange: a,
    onDrag: l,
    step: s = 1,
    stepPixelSize: O = 1,
    unclamped: Y,
    unit: V,
    updateRate: k = C,
    // Box props
    fontSize: K,
    height: P,
    lineHeight: U
  } = n, [ee, I] = F(n.value), [d, v] = F(!1), r = i(!1), u = i(n.value), c = i(0), E = i(x), y = i(null), T = i(null), p = i(null);
  J(() => {
    n.value !== u.current && (u.current = n.value, I(n.value));
  }, [n.value]);
  function j(e) {
    d || (document.body.style["pointer-events"] = "none", E.current = A(e.nativeEvent, S), c.current = n.value, r.current = !0, document.addEventListener("mouseup", _), p.current = setTimeout(() => {
      w(e.nativeEvent);
    }, 100));
  }
  function w(e) {
    if (r.current)
      document.addEventListener("mousemove", h), T.current = setInterval(() => {
        r.current && (l == null || l(e, n.value));
      }, k);
    else if (v(!0), y.current) {
      const t = y.current;
      t.value = c.current.toString(), setTimeout(() => {
        t.focus(), t.select();
      }, 10);
    }
    p.current && clearTimeout(p.current);
  }
  function h(e) {
    const t = A(e, S), H = t - E.current, X = Number.isFinite(o) ? o % s : 0;
    c.current = b(
      c.current + H * s / O,
      o - s,
      N + s
    );
    const R = b(
      c.current - c.current % s + X,
      o,
      N
    );
    u.current = R, I(R), E.current = t;
  }
  function _(e) {
    document.body.style["pointer-events"] = "auto", T.current && clearInterval(T.current), E.current = x, document.removeEventListener("mousemove", h), document.removeEventListener("mouseup", _), r.current && (a == null || a(e, u.current), l == null || l(e, u.current), r.current = !1);
  }
  function z(e) {
    (e.key === Q.Enter || W(e.key)) && v(!1);
  }
  function B(e) {
    let t = Number.parseFloat(e.currentTarget.value);
    if (Y || (t = b(t, o, N)), Number.isNaN(t)) {
      v(!1);
      return;
    }
    c.current = t, u.current = t, I(t), a == null || a(e.nativeEvent, t), d && v(!1);
  }
  let f = n.value;
  r.current && (f = u.current);
  const G = /* @__PURE__ */ $(q, { children: [
    m && !r.current ? /* @__PURE__ */ D(Z, { value: f, format: g }) : g ? g(f) : f,
    V ? ` ${V}` : ""
  ] }), M = /* @__PURE__ */ D(
    "input",
    {
      ref: y,
      className: "NumberInput__input",
      style: {
        display: d ? void 0 : "none",
        height: P,
        lineHeight: U,
        fontSize: K
      },
      onBlur: B,
      onKeyDown: z
    }
  );
  return L({
    displayElement: G,
    displayValue: f,
    dragging: r.current,
    editing: d,
    handleDragStart: j,
    inputElement: M
  });
}
export {
  ie as DraggableControl
};
