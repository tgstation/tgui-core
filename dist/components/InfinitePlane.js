import { jsxs as d, jsx as o } from "react/jsx-runtime";
import { useState as i, useEffect as z } from "react";
import { computeBoxProps as A } from "../common/ui.js";
import { Button as O } from "./Button.js";
import { ProgressBar as N } from "./ProgressBar.js";
import { Stack as c } from "./Stack.js";
const f = 0.5, p = 1.5, S = 0.1;
function F(l) {
  const {
    backgroundImage: t,
    children: r,
    imageWidth: $,
    initialLeft: h = 0,
    initialTop: w = 0,
    onBackgroundMoved: a,
    onZoomChange: u,
    ...M
  } = l, [E, T] = i(0), [y, C] = i(0), [g, D] = i(0), [_, v] = i(!1), [x, P] = i(0), [n, V] = i(1);
  function L(e) {
    T(e.clientX - g), C(e.clientY - x), v(!0);
  }
  function b(e) {
    if (!_) return;
    const m = e.clientX - E, s = e.clientY - y;
    a == null || a(m + h, s + w), D(m), P(s);
  }
  function k() {
    v(!1);
  }
  function X(e) {
    if (e === "increase" && n >= p || e === "decrease" && n <= f) return;
    const s = Math.round((n + (e === "increase" ? S : -0.1)) * 10) / 10;
    V(s), u == null || u(s);
  }
  z(() => (window.addEventListener("mouseup", k), () => {
    window.removeEventListener("mouseup", k);
  }), []);
  const I = h + g, Z = w + x;
  return /* @__PURE__ */ d(
    "div",
    {
      ...A({
        ...M,
        style: {
          ...M.style,
          height: "100%",
          overflow: "hidden",
          position: "relative",
          width: "100%"
        }
      }),
      children: [
        /* @__PURE__ */ o(
          "div",
          {
            onMouseDown: L,
            onMouseMove: b,
            style: {
              backgroundImage: `url("${t}")`,
              backgroundPosition: `${I}px ${Z}px`,
              backgroundRepeat: "repeat",
              backgroundSize: `${n * $}px`,
              height: "100%",
              inset: 0,
              position: "absolute",
              width: "100%"
            }
          }
        ),
        /* @__PURE__ */ o(
          "div",
          {
            onMouseDown: L,
            onMouseMove: b,
            style: {
              height: "100%",
              inset: 0,
              pointerEvents: "none",
              position: "absolute",
              transform: `translate(${I}px, ${Z}px) scale(${n})`,
              transformOrigin: "top left",
              width: "100%"
            },
            children: r
          }
        ),
        /* @__PURE__ */ o(Y, { zoom: n, onZoomClick: X })
      ]
    }
  );
}
function Y(l) {
  const { zoom: t, onZoomClick: r } = l;
  return /* @__PURE__ */ o("div", { style: { position: "absolute", top: 5, left: 5, right: 5 }, children: /* @__PURE__ */ d(c, { children: [
    /* @__PURE__ */ o(c.Item, { children: /* @__PURE__ */ o(
      O,
      {
        icon: "minus",
        disabled: t <= f,
        onClick: () => r(
          "decrease"
          /* Decrease */
        )
      }
    ) }),
    /* @__PURE__ */ o(c.Item, { grow: !0, children: /* @__PURE__ */ d(
      N,
      {
        minValue: f,
        value: t,
        maxValue: p,
        children: [
          t,
          "x"
        ]
      }
    ) }),
    /* @__PURE__ */ o(c.Item, { children: /* @__PURE__ */ o(
      O,
      {
        icon: "plus",
        disabled: t >= p,
        onClick: () => r(
          "increase"
          /* Increase */
        )
      }
    ) })
  ] }) });
}
export {
  F as InfinitePlane
};
