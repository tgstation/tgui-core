import { jsx as _, jsxs as j } from "react/jsx-runtime";
import { keyOfMatchingRange as E, scale as s } from "../common/math.js";
import { classes as e } from "../common/react.js";
import { computeBoxClassName as K, computeBoxProps as I } from "./Box.js";
import { DraggableControl as O } from "./DraggableControl.js";
import '../assets/Knob.css';const R = "_knob_69dqe_17", $ = "_circle_69dqe_32", A = "_cursorBox_69dqe_45", G = "_cursor_69dqe_45", H = "_popupValue_69dqe_62", J = "_ring_69dqe_75", L = "_ringTrackPivot_69dqe_84", Q = "_ringTrack_69dqe_84", U = "_ringFillPivot_69dqe_96", W = "_bipolar_69dqe_100", X = "_ringFill_69dqe_96", Y = "_color__black_69dqe_113", Z = "_color__white_69dqe_117", oo = "_color__red_69dqe_121", _o = "_color__orange_69dqe_125", ro = "_color__yellow_69dqe_129", lo = "_color__olive_69dqe_133", eo = "_color__green_69dqe_137", co = "_color__teal_69dqe_141", no = "_color__blue_69dqe_145", ao = "_color__violet_69dqe_149", io = "_color__purple_69dqe_153", so = "_color__pink_69dqe_157", to = "_color__brown_69dqe_161", go = "_color__grey_69dqe_165", po = "_color__good_69dqe_173", uo = "_color__average_69dqe_177", mo = "_color__bad_69dqe_181", qo = "_color__label_69dqe_185", o = {
  knob: R,
  circle: $,
  cursorBox: A,
  cursor: G,
  popupValue: H,
  ring: J,
  ringTrackPivot: L,
  ringTrack: Q,
  ringFillPivot: U,
  bipolar: W,
  ringFill: X,
  color__black: Y,
  color__white: Z,
  color__red: oo,
  color__orange: _o,
  color__yellow: ro,
  color__olive: lo,
  color__green: eo,
  color__teal: co,
  color__blue: no,
  color__violet: ao,
  color__purple: io,
  color__pink: so,
  color__brown: to,
  color__grey: go,
  "color__light-grey": "_color__light-grey_69dqe_169",
  color__good: po,
  color__average: uo,
  color__bad: mo,
  color__label: qo
};
function fo(t) {
  const {
    // Draggable props (passthrough)
    animated: d,
    format: g,
    maxValue: r,
    minValue: l,
    onChange: p,
    onDrag: u,
    step: m,
    stepPixelSize: q,
    suppressFlicker: v,
    unclamped: b,
    unit: k,
    value: h,
    // Own props
    bipolar: c,
    children: vo,
    className: y,
    color: x,
    fillValue: n,
    ranges: f = {},
    size: w = 1,
    style: N,
    ...a
  } = t;
  return /* @__PURE__ */ _(
    O,
    {
      dragMatrix: [0, -1],
      animated: d,
      format: g,
      maxValue: r,
      minValue: l,
      onChange: p,
      onDrag: u,
      step: m,
      stepPixelSize: q,
      suppressFlicker: v,
      unclamped: b,
      unit: k,
      value: h,
      children: (P) => {
        const {
          displayElement: F,
          displayValue: i,
          dragging: V,
          handleDragStart: B,
          inputElement: T,
          value: D
        } = P, M = s(
          n ?? i,
          l,
          r
        ), C = s(i, l, r), z = x || E(n ?? D, f) || "default", S = Math.min((C - 0.5) * 270, 225);
        return /* @__PURE__ */ j(
          "div",
          {
            className: e([
              o.knob,
              o["color__" + z],
              c && o.bipolar,
              y,
              K(a)
            ]),
            ...I({
              style: {
                fontSize: w + "em",
                ...N
              },
              ...a
            }),
            onMouseDown: B,
            children: [
              /* @__PURE__ */ _("div", { className: o.circle, children: /* @__PURE__ */ _(
                "div",
                {
                  className: o.cursorBox,
                  style: {
                    transform: `rotate(${S}deg)`
                  },
                  children: /* @__PURE__ */ _("div", { className: o.cursor })
                }
              ) }),
              V && /* @__PURE__ */ _("div", { className: o.popupValue, children: F }),
              /* @__PURE__ */ _(
                "svg",
                {
                  className: e([o.ring, o.ringTrackPivot]),
                  viewBox: "0 0 100 100",
                  children: /* @__PURE__ */ _("circle", { className: "Knob__ringTrack", cx: "50", cy: "50", r: "50" })
                }
              ),
              /* @__PURE__ */ _(
                "svg",
                {
                  className: e([o.ring, o.ringFillPivot]),
                  viewBox: "0 0 100 100",
                  children: /* @__PURE__ */ _(
                    "circle",
                    {
                      className: o.ringFill,
                      style: {
                        strokeDashoffset: Math.max(
                          ((c ? 2.75 : 2) - M * 1.5) * Math.PI * 50,
                          0
                        )
                      },
                      cx: "50",
                      cy: "50",
                      r: "50"
                    }
                  )
                }
              ),
              T
            ]
          }
        );
      }
    }
  );
}
export {
  fo as Knob
};
