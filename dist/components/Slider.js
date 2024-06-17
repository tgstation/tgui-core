import { jsx as s, jsxs as m } from "react/jsx-runtime";
import { s as e } from "../ProgressBar.module-BkAFfFy0.js";
import { keyOfMatchingRange as R, clamp01 as t, scale as f } from "../common/math.js";
import { classes as _ } from "../common/react.js";
import { computeBoxClassName as $, computeBoxProps as q } from "./Box.js";
import { DraggableControl as A } from "./DraggableControl.js";
import '../assets/Slider.css';const G = "_slider_1assx_9", H = "_cursorOffset_1assx_13", I = "_cursor_1assx_13", J = "_pointer_1assx_30", K = "_popupValue_1assx_41", a = {
  slider: G,
  cursorOffset: H,
  cursor: I,
  pointer: J,
  popupValue: K
};
function Y(h) {
  const {
    // Draggable props (passthrough)
    animated: v,
    format: g,
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
    ranges: B = {},
    children: i,
    ...c
  } = h, F = i !== void 0;
  return /* @__PURE__ */ s(
    A,
    {
      dragMatrix: [1, 0],
      animated: v,
      format: g,
      maxValue: o,
      minValue: r,
      onChange: x,
      onDrag: V,
      step: y,
      stepPixelSize: N,
      suppressFlicker: C,
      unit: D,
      value: O,
      children: (S) => {
        const {
          displayElement: n,
          displayValue: p,
          dragging: j,
          handleDragStart: k,
          inputElement: E,
          value: P
        } = S, b = l != null, u = f(
          l ?? p,
          r,
          o
        ), d = f(p, r, o), z = M || R(l ?? P, B) || "default";
        return /* @__PURE__ */ m(
          "div",
          {
            className: _([
              a.slider,
              e.progressBar,
              e["color__" + z],
              w,
              $(c)
            ]),
            ...q(c),
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
              /* @__PURE__ */ s("div", { className: e.content, children: F ? i : n }),
              E
            ]
          }
        );
      }
    }
  );
}
export {
  Y as Slider
};
