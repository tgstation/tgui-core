import { jsx as t } from "react/jsx-runtime";
import { classes as a } from "../common/react.js";
import { Box as y } from "./Box.js";
import '../assets/NoticeBox.css';const m = "_noticeBox_56yom_17", i = "_color__black_56yom_28", g = "_color__white_56yom_33", b = "_color__red_56yom_38", d = "_color__orange_56yom_43", p = "_color__yellow_56yom_48", u = "_color__olive_56yom_53", w = "_color__green_56yom_58", f = "_color__teal_56yom_63", v = "_color__blue_56yom_68", x = "_color__violet_56yom_73", k = "_color__purple_56yom_78", B = "_color__pink_56yom_83", h = "_color__brown_56yom_88", N = "_color__grey_56yom_93", j = "_color__good_56yom_103", q = "_color__average_56yom_108", z = "_color__bad_56yom_113", A = "_color__label_56yom_118", C = "_info_56yom_123", D = "_success_56yom_128", E = "_warning_56yom_133", F = "_danger_56yom_138", o = {
  noticeBox: m,
  color__black: i,
  color__white: g,
  color__red: b,
  color__orange: d,
  color__yellow: p,
  color__olive: u,
  color__green: w,
  color__teal: f,
  color__blue: v,
  color__violet: x,
  color__purple: k,
  color__pink: B,
  color__brown: h,
  color__grey: N,
  "color__light-grey": "_color__light-grey_56yom_98",
  color__good: j,
  color__average: q,
  color__bad: z,
  color__label: A,
  info: C,
  success: D,
  warning: E,
  danger: F
};
function J(c) {
  const { className: r, color: _, info: l, success: e, danger: n, ...s } = c;
  return /* @__PURE__ */ t(
    y,
    {
      className: a([
        o.noticeBox,
        _ && o["color__" + _],
        l && o.info,
        e && o.success,
        n && o.danger,
        r
      ]),
      ...s
    }
  );
}
export {
  J as NoticeBox
};
