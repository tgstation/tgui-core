import { jsx as e, jsxs as o } from "react/jsx-runtime";
import { keyOfMatchingRange as $, scale as t } from "../common/math.js";
import { classes as j } from "../common/react.js";
import { computeBoxClassName as E, computeBoxProps as T } from "./Box.js";
import { DraggableControl as I } from "./DraggableControl.js";
function H(c) {
  const {
    // Draggable props (passthrough)
    animated: m,
    format: d,
    maxValue: a,
    minValue: l,
    onChange: u,
    onDrag: p,
    step: g,
    stepPixelSize: _,
    suppressFlicker: b,
    unclamped: f,
    unit: h,
    value: v,
    // Own props
    bipolar: r,
    className: x,
    color: K,
    fillValue: s,
    ranges: N = {},
    size: y = 1,
    style: V,
    ...n
  } = c;
  return /* @__PURE__ */ e(
    I,
    {
      dragMatrix: [0, -1],
      animated: m,
      format: d,
      maxValue: a,
      minValue: l,
      onChange: u,
      onDrag: p,
      step: g,
      stepPixelSize: _,
      suppressFlicker: b,
      unclamped: f,
      unit: h,
      value: v,
      children: (k) => {
        const {
          displayElement: D,
          displayValue: i,
          dragging: M,
          handleDragStart: B,
          inputElement: P,
          value: C
        } = k, F = t(
          s ?? i,
          l,
          a
        ), w = t(i, l, a), z = K || $(s ?? C, N) || "default", S = Math.min((w - 0.5) * 270, 225);
        return /* @__PURE__ */ o(
          "div",
          {
            className: j([
              "Knob",
              `Knob--color--${z}`,
              r && "Knob--bipolar",
              x,
              E(n)
            ]),
            ...T({
              style: {
                fontSize: `${y}em`,
                ...V
              },
              ...n
            }),
            onMouseDown: B,
            children: [
              /* @__PURE__ */ e("div", { className: "Knob__circle", children: /* @__PURE__ */ e(
                "div",
                {
                  className: "Knob__cursorBox",
                  style: {
                    transform: `rotate(${S}deg)`
                  },
                  children: /* @__PURE__ */ e("div", { className: "Knob__cursor" })
                }
              ) }),
              M && /* @__PURE__ */ e("div", { className: "Knob__popupValue", children: D }),
              /* @__PURE__ */ o(
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
              /* @__PURE__ */ o(
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
                            ((r ? 2.75 : 2) - F * 1.5) * Math.PI * 50,
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
              P
            ]
          }
        );
      }
    }
  );
}
export {
  H as Knob
};
