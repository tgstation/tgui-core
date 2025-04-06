import { jsx as e, jsxs as o } from "react/jsx-runtime";
import { keyOfMatchingRange as S, scale as c } from "../common/math.js";
import { classes as $ } from "../common/react.js";
import { computeBoxProps as j, computeBoxClassName as E } from "../common/ui.js";
import { DraggableControl as T } from "./DraggableControl.js";
function G(m) {
  const {
    // Draggable props (passthrough)
    animated: d,
    format: p,
    maxValue: a,
    minValue: l,
    onChange: u,
    onDrag: g,
    step: _,
    stepPixelSize: b,
    suppressFlicker: f,
    unclamped: h,
    unit: x,
    value: r,
    // Own props
    bipolar: s,
    className: K,
    color: v,
    fillValue: n,
    ranges: N = {},
    size: y = 1,
    style: V,
    ...i
  } = m;
  return /* @__PURE__ */ e(
    T,
    {
      dragMatrix: [0, -1],
      animated: d,
      format: p,
      maxValue: a,
      minValue: l,
      onChange: u,
      onDrag: g,
      step: _,
      stepPixelSize: b,
      suppressFlicker: f,
      unclamped: h,
      unit: x,
      value: r,
      children: (k) => {
        const {
          displayElement: D,
          displayValue: t,
          dragging: M,
          handleDragStart: B,
          inputElement: P
        } = k, C = c(
          n ?? t,
          l,
          a
        ), F = c(t, l, a), w = v || S(n ?? r, N) || "default", z = Math.min((F - 0.5) * 270, 225);
        return /* @__PURE__ */ o(
          "div",
          {
            className: $([
              "Knob",
              `Knob--color--${w}`,
              s && "Knob--bipolar",
              K,
              E(i)
            ]),
            ...j({
              style: {
                fontSize: `${y}em`,
                ...V
              },
              ...i
            }),
            onMouseDown: B,
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
                            ((s ? 2.75 : 2) - C * 1.5) * Math.PI * 50,
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
  G as Knob
};
