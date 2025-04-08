import { jsx as e, jsxs as u } from "react/jsx-runtime";
import { keyOfMatchingRange as F, clamp01 as s, scale as p } from "../common/math.js";
import { classes as g } from "../common/react.js";
import { computeBoxProps as O, computeBoxClassName as b } from "../common/ui.js";
import { DraggableControl as k } from "./DraggableControl.js";
function H(f) {
  const {
    // Draggable props (passthrough)
    animated: _,
    format: h,
    maxValue: l,
    minValue: r,
    onChange: v,
    onDrag: N,
    step: x,
    stepPixelSize: y,
    unit: B,
    value: i,
    // Own props
    className: P,
    fillValue: a,
    color: S,
    ranges: V = {},
    children: o,
    ...t
  } = f, C = o !== void 0;
  return /* @__PURE__ */ e(
    k,
    {
      dragMatrix: [1, 0],
      animated: _,
      format: h,
      maxValue: l,
      minValue: r,
      onChange: v,
      onDrag: N,
      step: x,
      stepPixelSize: y,
      unit: B,
      value: i,
      children: (D) => {
        const {
          displayElement: n,
          displayValue: c,
          dragging: w,
          handleDragStart: M,
          inputElement: $
        } = D, j = a != null, d = p(
          a ?? c,
          r,
          l
        ), m = p(c, r, l), E = S || F(a ?? i, V) || "default";
        return /* @__PURE__ */ u(
          "div",
          {
            className: g([
              "Slider",
              "ProgressBar",
              `ProgressBar--color--${E}`,
              P,
              b(t)
            ]),
            ...O(t),
            onMouseDown: M,
            children: [
              /* @__PURE__ */ e(
                "div",
                {
                  className: g([
                    "ProgressBar__fill",
                    j && "ProgressBar__fill--animated"
                  ]),
                  style: {
                    width: `${s(d) * 100}%`,
                    opacity: 0.4
                  }
                }
              ),
              /* @__PURE__ */ e(
                "div",
                {
                  className: "ProgressBar__fill",
                  style: {
                    width: `${s(Math.min(d, m)) * 100}%`
                  }
                }
              ),
              /* @__PURE__ */ u(
                "div",
                {
                  className: "Slider__cursorOffset",
                  style: {
                    width: `${s(m) * 100}%`
                  },
                  children: [
                    /* @__PURE__ */ e("div", { className: "Slider__cursor" }),
                    /* @__PURE__ */ e("div", { className: "Slider__pointer" }),
                    w && /* @__PURE__ */ e("div", { className: "Slider__popupValue", children: n })
                  ]
                }
              ),
              /* @__PURE__ */ e("div", { className: "ProgressBar__content", children: C ? o : n }),
              $
            ]
          }
        );
      }
    }
  );
}
export {
  H as Slider
};
