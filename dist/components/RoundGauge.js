import { jsxs as m, jsx as e } from "react/jsx-runtime";
import { scale as d, keyOfMatchingRange as M, clamp01 as k } from "../common/math.js";
import { classes as p } from "../common/react.js";
import { computeBoxClassName as v, computeBoxProps as B } from "../common/ui.js";
import { AnimatedNumber as $ } from "./AnimatedNumber.js";
import { Box as j } from "./Box.js";
function z(h) {
  const {
    alertAfter: a,
    alertBefore: t,
    className: _,
    format: R,
    maxValue: c = 1,
    minValue: i = 1,
    ranges: n,
    size: y = 1,
    style: x,
    value: r,
    ...g
  } = h, G = d(r, i, c), f = k(G), l = n ? {} : { primary: [0, 1] };
  n && Object.keys(n).forEach((o) => {
    const s = n[o];
    l[o] = [
      d(s[0], i, c),
      d(s[1], i, c)
    ];
  });
  function N() {
    return !!(a && t && r > a && r < t || a && r > a || t && r < t);
  }
  const C = N() && M(f, l);
  return /* @__PURE__ */ m(j, { inline: !0, children: [
    /* @__PURE__ */ e(
      "div",
      {
        className: p([
          "RoundGauge",
          _,
          v(g)
        ]),
        ...B({
          style: {
            fontSize: `${y}em`,
            ...x
          },
          ...g
        }),
        children: /* @__PURE__ */ m("svg", { viewBox: "0 0 100 50", children: [
          (a || t) && /* @__PURE__ */ e(
            "g",
            {
              className: p([
                "RoundGauge__alert",
                C ? `active RoundGauge__alert--${C}` : ""
              ]),
              children: /* @__PURE__ */ e("path", { d: "M48.211,14.578C48.55,13.9 49.242,13.472 50,13.472C50.758,13.472 51.45,13.9 51.789,14.578C54.793,20.587 60.795,32.589 63.553,38.106C63.863,38.726 63.83,39.462 63.465,40.051C63.101,40.641 62.457,41 61.764,41C55.996,41 44.004,41 38.236,41C37.543,41 36.899,40.641 36.535,40.051C36.17,39.462 36.137,38.726 36.447,38.106C39.205,32.589 45.207,20.587 48.211,14.578ZM50,34.417C51.426,34.417 52.583,35.574 52.583,37C52.583,38.426 51.426,39.583 50,39.583C48.574,39.583 47.417,38.426 47.417,37C47.417,35.574 48.574,34.417 50,34.417ZM50,32.75C50,32.75 53,31.805 53,22.25C53,20.594 51.656,19.25 50,19.25C48.344,19.25 47,20.594 47,22.25C47,31.805 50,32.75 50,32.75Z" })
            }
          ),
          /* @__PURE__ */ e("g", { children: /* @__PURE__ */ e("circle", { className: "RoundGauge__ringTrack", cx: "50", cy: "50", r: "45" }) }),
          /* @__PURE__ */ e("g", { children: Object.keys(l).map((o, s) => {
            const u = l[o];
            return /* @__PURE__ */ e(
              "circle",
              {
                className: `RoundGauge__ringFill RoundGauge--color--${o}`,
                style: {
                  strokeDashoffset: Math.max(
                    (2 - (u[1] - u[0])) * Math.PI * 50,
                    0
                  )
                },
                transform: `rotate(${180 + 180 * u[0]} 50 50)`,
                cx: "50",
                cy: "50",
                r: "45"
              },
              s
            );
          }) }),
          /* @__PURE__ */ m(
            "g",
            {
              className: "RoundGauge__needle",
              transform: `rotate(${f * 180 - 90} 50 50)`,
              children: [
                /* @__PURE__ */ e(
                  "polygon",
                  {
                    className: "RoundGauge__needleLine",
                    points: "46,50 50,0 54,50"
                  }
                ),
                /* @__PURE__ */ e(
                  "circle",
                  {
                    className: "RoundGauge__needleMiddle",
                    cx: "50",
                    cy: "50",
                    r: "8"
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ e("title", { children: "alert" })
        ] })
      }
    ),
    /* @__PURE__ */ e($, { value: r, format: R })
  ] });
}
export {
  z as RoundGauge
};
