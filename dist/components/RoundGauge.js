import { jsxs as k, jsx as _ } from "react/jsx-runtime";
import { scale as d, keyOfMatchingRange as M, clamp01 as N } from "../common/math.js";
import { classes as u } from "../common/react.js";
import { AnimatedNumber as A } from "./AnimatedNumber.js";
import { Box as B, computeBoxClassName as G, computeBoxProps as j } from "./Box.js";
import '../assets/RoundGauge.css';const F = "_roundGauge_gktag_17", L = "_ringTrack_gktag_25", T = "_ringFill_gktag_33", V = "_needle_gktag_41", O = "_needleLine_gktag_46", R = "_needleMiddle_gktag_47", Z = "_alert_gktag_51", z = "_max_gktag_59", P = "_color__black_gktag_63", S = "_color__white_gktag_67", $ = "_color__red_gktag_71", D = "_color__orange_gktag_75", E = "_color__yellow_gktag_79", I = "_color__olive_gktag_83", q = "_color__green_gktag_87", H = "_color__teal_gktag_91", J = "_color__blue_gktag_95", K = "_color__violet_gktag_99", Q = "_color__purple_gktag_103", U = "_color__pink_gktag_107", W = "_color__brown_gktag_111", X = "_color__grey_gktag_115", Y = "_color__good_gktag_123", __ = "_color__average_gktag_127", e_ = "_color__bad_gktag_131", l_ = "_color__label_gktag_135", o_ = "_alert__black_gktag_139", r_ = "_alertAnim_gktag_1", t_ = "_alert__white_gktag_145", a_ = "_alert__red_gktag_151", c_ = "_alert__orange_gktag_157", g_ = "_alert__yellow_gktag_163", n_ = "_alert__olive_gktag_169", s_ = "_alert__green_gktag_175", i_ = "_alert__teal_gktag_181", k_ = "_alert__blue_gktag_187", d_ = "_alert__violet_gktag_193", u_ = "_alert__purple_gktag_199", m_ = "_alert__pink_gktag_205", p_ = "_alert__brown_gktag_211", b_ = "_alert__grey_gktag_217", y_ = "_alert__good_gktag_229", h_ = "_alert__average_gktag_235", f_ = "_alert__bad_gktag_241", v_ = "_alert__label_gktag_247", e = {
  roundGauge: F,
  ringTrack: L,
  ringFill: T,
  needle: V,
  needleLine: O,
  needleMiddle: R,
  alert: Z,
  max: z,
  color__black: P,
  color__white: S,
  color__red: $,
  color__orange: D,
  color__yellow: E,
  color__olive: I,
  color__green: q,
  color__teal: H,
  color__blue: J,
  color__violet: K,
  color__purple: Q,
  color__pink: U,
  color__brown: W,
  color__grey: X,
  "color__light-grey": "_color__light-grey_gktag_119",
  color__good: Y,
  color__average: __,
  color__bad: e_,
  color__label: l_,
  alert__black: o_,
  alertAnim: r_,
  alert__white: t_,
  alert__red: a_,
  alert__orange: c_,
  alert__yellow: g_,
  alert__olive: n_,
  alert__green: s_,
  alert__teal: i_,
  alert__blue: k_,
  alert__violet: d_,
  alert__purple: u_,
  alert__pink: m_,
  alert__brown: p_,
  alert__grey: b_,
  "alert__light-grey": "_alert__light-grey_gktag_223",
  alert__good: y_,
  alert__average: h_,
  alert__bad: f_,
  alert__label: v_
};
function A_(y) {
  const {
    alertAfter: o,
    alertBefore: r,
    className: h,
    format: f,
    maxValue: n = 1,
    minValue: s = 1,
    ranges: a,
    size: v = 1,
    style: w,
    value: l,
    ...m
  } = y, C = d(l, s, n), p = N(C), c = a ? {} : { primary: [0, 1] };
  a && Object.keys(a).forEach((t) => {
    const g = a[t];
    c[t] = [
      d(g[0], s, n),
      d(g[1], s, n)
    ];
  });
  function x() {
    return o && r && l > o && l < r || o && l > o ? !0 : !!(r && l < r);
  }
  const b = x() && M(p, c);
  return /* @__PURE__ */ k(B, { inline: !0, children: [
    /* @__PURE__ */ _(
      "div",
      {
        className: u([
          e.roundGauge,
          h,
          G(m)
        ]),
        ...j({
          style: {
            fontSize: v + "em",
            ...w
          },
          ...m
        }),
        children: /* @__PURE__ */ k("svg", { viewBox: "0 0 100 50", children: [
          (o || r) && /* @__PURE__ */ _(
            "g",
            {
              className: u([
                e.alert,
                b ? e["alert__" + b] : ""
              ]),
              children: /* @__PURE__ */ _("path", { d: "M48.211,14.578C48.55,13.9 49.242,13.472 50,13.472C50.758,13.472 51.45,13.9 51.789,14.578C54.793,20.587 60.795,32.589 63.553,38.106C63.863,38.726 63.83,39.462 63.465,40.051C63.101,40.641 62.457,41 61.764,41C55.996,41 44.004,41 38.236,41C37.543,41 36.899,40.641 36.535,40.051C36.17,39.462 36.137,38.726 36.447,38.106C39.205,32.589 45.207,20.587 48.211,14.578ZM50,34.417C51.426,34.417 52.583,35.574 52.583,37C52.583,38.426 51.426,39.583 50,39.583C48.574,39.583 47.417,38.426 47.417,37C47.417,35.574 48.574,34.417 50,34.417ZM50,32.75C50,32.75 53,31.805 53,22.25C53,20.594 51.656,19.25 50,19.25C48.344,19.25 47,20.594 47,22.25C47,31.805 50,32.75 50,32.75Z" })
            }
          ),
          /* @__PURE__ */ _("g", { children: /* @__PURE__ */ _("circle", { className: e.ringTrack, cx: "50", cy: "50", r: "45" }) }),
          /* @__PURE__ */ _("g", { children: Object.keys(c).map((t, g) => {
            const i = c[t];
            return /* @__PURE__ */ _(
              "circle",
              {
                className: u([e.ringFill, e["color__" + t]]),
                style: {
                  strokeDashoffset: Math.max(
                    (2 - (i[1] - i[0])) * Math.PI * 50,
                    0
                  )
                },
                transform: `rotate(${180 + 180 * i[0]} 50 50)`,
                cx: "50",
                cy: "50",
                r: "45"
              },
              g
            );
          }) }),
          /* @__PURE__ */ k(
            "g",
            {
              className: e.needle,
              transform: `rotate(${p * 180 - 90} 50 50)`,
              children: [
                /* @__PURE__ */ _("polygon", { className: e.needleLine, points: "46,50 50,0 54,50" }),
                /* @__PURE__ */ _("circle", { className: e.needleMiddle, cx: "50", cy: "50", r: "8" })
              ]
            }
          )
        ] })
      }
    ),
    /* @__PURE__ */ _(A, { value: l, format: f })
  ] });
}
export {
  A_ as RoundGauge
};
