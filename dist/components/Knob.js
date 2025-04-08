import { jsx as e, jsxs as l } from "react/jsx-runtime";
import { keyOfMatchingRange as F, scale as c } from "../common/math.js";
import { classes as S } from "../common/react.js";
import { computeBoxProps as $, computeBoxClassName as j } from "../common/ui.js";
import { DraggableControl as E } from "./DraggableControl.js";
function A(m) {
  const {
    // Draggable props (passthrough)
    animated: d,
    format: g,
    maxValue: a,
    minValue: o,
    onChange: p,
    onDrag: u,
    step: _,
    stepPixelSize: b,
    unclamped: f,
    unit: h,
    value: r,
    // Own props
    bipolar: n,
    className: x,
    color: K,
    fillValue: i,
    ranges: v = {},
    size: N = 1,
    style: y,
    ...s
  } = m;
  return /* @__PURE__ */ e(
    E,
    {
      dragMatrix: [0, -1],
      animated: d,
      format: g,
      maxValue: a,
      minValue: o,
      onChange: p,
      onDrag: u,
      step: _,
      stepPixelSize: b,
      unclamped: f,
      unit: h,
      value: r,
      children: (V) => {
        const {
          displayElement: D,
          displayValue: t,
          dragging: M,
          handleDragStart: k,
          inputElement: B
        } = V, P = c(
          i ?? t,
          o,
          a
        ), C = c(t, o, a), w = K || F(i ?? r, v) || "default", z = Math.min((C - 0.5) * 270, 225);
        return /* @__PURE__ */ l(
          "div",
          {
            className: S([
              "Knob",
              `Knob--color--${w}`,
              n && "Knob--bipolar",
              x,
              j(s)
            ]),
            ...$({
              style: {
                fontSize: `${N}em`,
                ...y
              },
              ...s
            }),
            onMouseDown: k,
            children: [
              /* @__PURE__ */ e("div", { className: "Knob__circle", children: /* @__PURE__ */ e(
                "div",
                {
                  className: "Knob__cursorBox",
                  style: {
                    transform: `rotate(${z}deg)`
                  },
                  children: /* @__PURE__ */ e("div", { className: "Knob__cursor" })
                }
              ) }),
              M && /* @__PURE__ */ e("div", { className: "Knob__popupValue", children: D }),
              /* @__PURE__ */ l(
                "svg",
                {
                  className: "Knob__ring Knob__ringTrackPivot",
                  viewBox: "0 0 100 100",
                  children: [
                    /* @__PURE__ */ e("circle", { className: "Knob__ringTrack", cx: "50", cy: "50", r: "50" }),
                    /* @__PURE__ */ e("title", { children: "track" })
                  ]
                }
              ),
              /* @__PURE__ */ l(
                "svg",
                {
                  className: "Knob__ring Knob__ringFillPivot",
                  viewBox: "0 0 100 100",
                  children: [
                    /* @__PURE__ */ e("title", { children: "fill" }),
                    /* @__PURE__ */ e(
                      "circle",
                      {
                        className: "Knob__ringFill",
                        style: {
                          strokeDashoffset: Math.max(
                            ((n ? 2.75 : 2) - P * 1.5) * Math.PI * 50,
                            0
                          )
                        },
                        cx: "50",
                        cy: "50",
                        r: "50"
                      }
                    )
                  ]
                }
              ),
              B
            ]
          }
        );
      }
    }
  );
}
export {
  A as Knob
};
