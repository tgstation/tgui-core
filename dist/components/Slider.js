import { jsx as e, jsxs as m } from "react/jsx-runtime";
import { keyOfMatchingRange as O, clamp01 as r, scale as u } from "../common/math.js";
import { classes as p } from "../common/react.js";
import { computeBoxClassName as b, computeBoxProps as z } from "../common/ui.js";
import { DraggableControl as R } from "./DraggableControl.js";
function J(g) {
  const {
    // Draggable props (passthrough)
    animated: f,
    format: _,
    maxValue: l,
    minValue: s,
    onChange: h,
    onDrag: v,
    step: N,
    stepPixelSize: x,
    suppressFlicker: y,
    unit: B,
    value: P,
    // Own props
    className: S,
    fillValue: a,
    color: V,
    ranges: C = {},
    children: i,
    ...o
  } = g, D = i !== void 0;
  return /* @__PURE__ */ e(
    R,
    {
      dragMatrix: [1, 0],
      animated: f,
      format: _,
      maxValue: l,
      minValue: s,
      onChange: h,
      onDrag: v,
      step: N,
      stepPixelSize: x,
      suppressFlicker: y,
      unit: B,
      value: P,
      children: (w) => {
        const {
          displayElement: t,
          displayValue: n,
          dragging: M,
          handleDragStart: $,
          inputElement: F,
          value: j
        } = w, k = a != null, c = u(
          a ?? n,
          s,
          l
        ), d = u(n, s, l), E = V || O(a ?? j, C) || "default";
        return /* @__PURE__ */ m(
          "div",
          {
            className: p([
              "Slider",
              "ProgressBar",
              `ProgressBar--color--${E}`,
              S,
              b(o)
            ]),
            ...z(o),
            onMouseDown: $,
            children: [
              /* @__PURE__ */ e(
                "div",
                {
                  className: p([
                    "ProgressBar__fill",
                    k && "ProgressBar__fill--animated"
                  ]),
                  style: {
                    width: `${r(c) * 100}%`,
                    opacity: 0.4
                  }
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  className: "ProgressBar__fill",
                  style: {
                    width: `${r(Math.min(c, d)) * 100}%`
                  }
                }
              ),
              /* @__PURE__ */ m(
                "div",
                {
                  className: "Slider__cursorOffset",
                  style: {
                    width: `${r(d) * 100}%`
                  },
                  children: [
                    /* @__PURE__ */ e("div", { className: "Slider__cursor" }),
                    /* @__PURE__ */ e("div", { className: "Slider__pointer" }),
                    M && /* @__PURE__ */ e("div", { className: "Slider__popupValue", children: t })
                  ]
                }
              ),
              /* @__PURE__ */ e("div", { className: "ProgressBar__content", children: D ? i : t }),
              F
            ]
          }
        );
      }
    }
  );
}
export {
  J as Slider
};
