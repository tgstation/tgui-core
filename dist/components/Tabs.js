import { jsx as o, jsxs as u } from "react/jsx-runtime";
import { classes as g, canRender as d } from "../common/react.js";
import { computeBoxClassName as f, computeBoxProps as m } from "./Box.js";
import { Icon as k } from "./Icon.js";
import '../assets/Tabs.css';const w = "_tabs_9h380_13", x = "_fill_9h380_20", y = "_vertical_9h380_35", N = "_horizontal_9h380_40", z = "_tabs__tab_9h380_48", C = "_fluid_9h380_52", S = "_tab_9h380_13", T = "_selected_9h380_66", j = "_tab__text_9h380_75", B = "_tab__left_9h380_80", I = "_tab__right_9h380_86", P = "_color__black_9h380_113", R = "_color__white_9h380_125", q = "_color__red_9h380_137", A = "_color__orange_9h380_149", D = "_color__yellow_9h380_161", E = "_color__olive_9h380_173", F = "_color__green_9h380_185", G = "_color__teal_9h380_197", H = "_color__blue_9h380_209", J = "_color__violet_9h380_221", K = "_color__purple_9h380_233", L = "_color__pink_9h380_245", M = "_color__brown_9h380_257", O = "_color__grey_9h380_269", Q = "_color__good_9h380_293", U = "_color__average_9h380_305", V = "_color__bad_9h380_317", W = "_color__label_9h380_329", _ = {
  tabs: w,
  fill: x,
  vertical: y,
  horizontal: N,
  tabs__tab: z,
  fluid: C,
  tab: S,
  selected: T,
  tab__text: j,
  tab__left: B,
  tab__right: I,
  color__black: P,
  color__white: R,
  color__red: q,
  color__orange: A,
  color__yellow: D,
  color__olive: E,
  color__green: F,
  color__teal: G,
  color__blue: H,
  color__violet: J,
  color__purple: K,
  color__pink: L,
  color__brown: M,
  color__grey: O,
  "color__light-grey": "_color__light-grey_9h380_281",
  color__good: Q,
  color__average: U,
  color__bad: V,
  color__label: W
};
function X(t) {
  const { className: r, vertical: e, fill: a, fluid: c, children: s, ...l } = t;
  return /* @__PURE__ */ o(
    "div",
    {
      className: g([
        _.tabs,
        e ? _.vertical : _.horizontal,
        a && _.fill,
        c && _.fluid,
        r,
        f(l)
      ]),
      ...m(l),
      children: s
    }
  );
}
function Y(t) {
  const {
    className: r,
    selected: e,
    color: a,
    icon: c,
    iconSpin: s,
    leftSlot: l,
    rightSlot: n,
    children: v,
    onClick: i,
    ...h
  } = t, p = (b) => {
    i && (i(b), b.target.blur());
  };
  return /* @__PURE__ */ u(
    "div",
    {
      className: g([
        _.tab,
        _.tabs__tab,
        _["color__" + a],
        e && _.selected,
        r,
        f(h)
      ]),
      onClick: p,
      ...m(h),
      children: [
        d(l) && /* @__PURE__ */ o("div", { className: _.tab__left, children: l }) || !!c && /* @__PURE__ */ o("div", { className: _.tab__left, children: /* @__PURE__ */ o(k, { name: c, spin: s }) }),
        /* @__PURE__ */ o("div", { className: _.tab__text, children: v }),
        d(n) && /* @__PURE__ */ o("div", { className: _.tab__right, children: n })
      ]
    }
  );
}
X.Tab = Y;
export {
  X as Tabs
};
