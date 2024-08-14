import { jsx as s, jsxs as m } from "react/jsx-runtime";
import { keyOfMatchingRange as R, clamp01 as t, scale as f } from "../common/math.js";
import { classes as _ } from "../common/react.js";
import { p as e } from "../ProgressBar.module-Jzqlebbx.js";
import { computeBoxClassName as q, computeBoxProps as A } from "./Box.js";
import { DraggableControl as G } from "./DraggableControl.js";
import '../assets/Slider.css';const H = "_slider_1assx_9", I = "_cursorOffset_1assx_13", J = "_cursor_1assx_13", K = "_pointer_1assx_30", L = "_popupValue_1assx_41", a = {
  slider: H,
  cursorOffset: I,
  cursor: J,
  pointer: K,
  popupValue: L
};
function Z(h) {
  const {
    // Draggable props (passthrough)
    animated: g,
    format: v,
    maxValue: o,
    minValue: r,
    onChange: x,
    onDrag: V,
    step: y,
    stepPixelSize: N,
    suppressFlicker: C,
    unit: D,
    value: O,
    // Own props
    className: w,
    fillValue: l,
    color: M,
    ranges: S = {},
    children: i,
    ...c
  } = h, B = i !== void 0;
  return /* @__PURE__ */ s(
    G,
    {
      dragMatrix: [1, 0],
      animated: g,
      format: v,
      maxValue: o,
      minValue: r,
      onChange: x,
      onDrag: V,
      step: y,
      stepPixelSize: N,
      suppressFlicker: C,
      unit: D,
      value: O,
      children: (F) => {
        const {
          displayElement: n,
          displayValue: p,
          dragging: j,
          handleDragStart: k,
          inputElement: E,
          value: P
        } = F, b = l != null, u = f(
          l ?? p,
          r,
          o
        ), d = f(p, r, o), z = M || R(l ?? P, S) || "default";
        return /* @__PURE__ */ m(
          "div",
          {
            className: _([
              a.slider,
              e.progressBar,
              e["color__" + z],
              w,
              q(c)
            ]),
            ...A(c),
            onMouseDown: k,
            children: [
              /* @__PURE__ */ s(
                "div",
                {
                  className: _([
                    e.fill,
                    b && e.fill__animated
                  ]),
                  style: {
                    width: t(u) * 100 + "%",
                    opacity: 0.4
                  }
                }
              ),
              /* @__PURE__ */ s(
                "div",
                {
                  className: e.fill,
                  style: {
                    width: t(Math.min(u, d)) * 100 + "%"
                  }
                }
              ),
              /* @__PURE__ */ m(
                "div",
                {
                  className: a.cursorOffset,
                  style: {
                    width: t(d) * 100 + "%"
                  },
                  children: [
                    /* @__PURE__ */ s("div", { className: a.cursor }),
                    /* @__PURE__ */ s("div", { className: a.pointer }),
                    j && /* @__PURE__ */ s("div", { className: a.popupValue, children: n })
                  ]
                }
              ),
              /* @__PURE__ */ s("div", { className: e.content, children: B ? i : n }),
              E
            ]
          }
        );
      }
    }
  );
}
export {
  Z as Slider
};
