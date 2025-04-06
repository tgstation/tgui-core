import { jsx as e, jsxs as p } from "react/jsx-runtime";
import { keyOfMatchingRange as E, clamp01 as r, scale as u } from "../common/math.js";
import { classes as g } from "../common/react.js";
import { computeBoxProps as O, computeBoxClassName as b } from "../common/ui.js";
import { DraggableControl as z } from "./DraggableControl.js";
function I(f) {
  const {
    // Draggable props (passthrough)
    animated: _,
    format: h,
    maxValue: a,
    minValue: l,
    onChange: v,
    onDrag: N,
    step: x,
    stepPixelSize: y,
    suppressFlicker: B,
    unit: P,
    value: i,
    // Own props
    className: S,
    fillValue: s,
    color: V,
    ranges: C = {},
    children: o,
    ...t
  } = f, D = o !== void 0;
  return /* @__PURE__ */ e(
    z,
    {
      dragMatrix: [1, 0],
      animated: _,
      format: h,
      maxValue: a,
      minValue: l,
      onChange: v,
      onDrag: N,
      step: x,
      stepPixelSize: y,
      suppressFlicker: B,
      unit: P,
      value: i,
      children: (w) => {
        const {
          displayElement: n,
          displayValue: c,
          dragging: M,
          handleDragStart: $,
          inputElement: F
        } = w, j = s != null, d = u(
          s ?? c,
          l,
          a
        ), m = u(c, l, a), k = V || E(s ?? i, C) || "default";
        return /* @__PURE__ */ p(
          "div",
          {
            className: g([
              "Slider",
              "ProgressBar",
              `ProgressBar--color--${k}`,
              S,
              b(t)
            ]),
            ...O(t),
            onMouseDown: $,
            children: [
              /* @__PURE__ */ e(
                "div",
                {
                  className: g([
                    "ProgressBar__fill",
                    j && "ProgressBar__fill--animated"
                  ]),
                  style: {
                    width: `${r(d) * 100}%`,
                    opacity: 0.4
                  }
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  className: "ProgressBar__fill",
                  style: {
                    width: `${r(Math.min(d, m)) * 100}%`
                  }
                }
              ),
              /* @__PURE__ */ p(
                "div",
                {
                  className: "Slider__cursorOffset",
                  style: {
                    width: `${r(m) * 100}%`
                  },
                  children: [
                    /* @__PURE__ */ e("div", { className: "Slider__cursor" }),
                    /* @__PURE__ */ e("div", { className: "Slider__pointer" }),
                    M && /* @__PURE__ */ e("div", { className: "Slider__popupValue", children: n })
                  ]
                }
              ),
              /* @__PURE__ */ e("div", { className: "ProgressBar__content", children: D ? o : n }),
              F
            ]
          }
        );
      }
    }
  );
}
export {
  I as Slider
};
