import { jsx as a } from "react/jsx-runtime";
import { classes as i } from "../common/react.js";
import { Box as y } from "./Box.js";
import '../assets/NoticeBox.css';const m = "_noticeBox_56yom_17", g = "_color__black_56yom_28", b = "_color__white_56yom_33", d = "_color__red_56yom_38", w = "_color__orange_56yom_43", p = "_color__yellow_56yom_48", u = "_color__olive_56yom_53", f = "_color__green_56yom_58", v = "_color__teal_56yom_63", x = "_color__blue_56yom_68", k = "_color__violet_56yom_73", B = "_color__purple_56yom_78", h = "_color__pink_56yom_83", N = "_color__brown_56yom_88", j = "_color__grey_56yom_93", q = "_color__good_56yom_103", z = "_color__average_56yom_108", A = "_color__bad_56yom_113", C = "_color__label_56yom_118", D = "_info_56yom_123", E = "_success_56yom_128", F = "_warning_56yom_133", G = "_danger_56yom_138", o = {
  noticeBox: m,
  color__black: g,
  color__white: b,
  color__red: d,
  color__orange: w,
  color__yellow: p,
  color__olive: u,
  color__green: f,
  color__teal: v,
  color__blue: x,
  color__violet: k,
  color__purple: B,
  color__pink: h,
  color__brown: N,
  color__grey: j,
  "color__light-grey": "_color__light-grey_56yom_98",
  color__good: q,
  color__average: z,
  color__bad: A,
  color__label: C,
  info: D,
  success: E,
  warning: F,
  danger: G
};
function K(c) {
  const { className: r, color: _, info: l, success: e, warning: n, danger: s, ...t } = c;
  return /* @__PURE__ */ a(
    y,
    {
      className: i([
        o.noticeBox,
        _ && o["color__" + _],
        l && o.info,
        e && o.success,
        n && o.warning,
        s && o.danger,
        r
      ]),
      ...t
    }
  );
}
export {
  K as NoticeBox
};
