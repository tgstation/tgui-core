import { jsx as o, jsxs as f } from "react/jsx-runtime";
import { classes as h, canRender as i } from "../common/react.js";
import { computeBoxClassName as b, computeBoxProps as d } from "./Box.js";
import { Icon as m } from "./Icon.js";
import '../assets/Tabs.css';const v = "_tabs_9h380_13", p = "_fill_9h380_20", u = "_vertical_9h380_35", w = "_horizontal_9h380_40", x = "_tabs__tab_9h380_48", y = "_fluid_9h380_52", N = "_tab_9h380_13", k = "_selected_9h380_66", z = "_tab__text_9h380_75", T = "_tab__left_9h380_80", j = "_tab__right_9h380_86", B = "_color__black_9h380_113", S = "_color__white_9h380_125", C = "_color__red_9h380_137", I = "_color__orange_9h380_149", P = "_color__yellow_9h380_161", R = "_color__olive_9h380_173", q = "_color__green_9h380_185", A = "_color__teal_9h380_197", D = "_color__blue_9h380_209", E = "_color__violet_9h380_221", F = "_color__purple_9h380_233", G = "_color__pink_9h380_245", H = "_color__brown_9h380_257", J = "_color__grey_9h380_269", K = "_color__good_9h380_293", L = "_color__average_9h380_305", M = "_color__bad_9h380_317", O = "_color__label_9h380_329", _ = {
  tabs: v,
  fill: p,
  vertical: u,
  horizontal: w,
  tabs__tab: x,
  fluid: y,
  tab: N,
  selected: k,
  tab__text: z,
  tab__left: T,
  tab__right: j,
  color__black: B,
  color__white: S,
  color__red: C,
  color__orange: I,
  color__yellow: P,
  color__olive: R,
  color__green: q,
  color__teal: A,
  color__blue: D,
  color__violet: E,
  color__purple: F,
  color__pink: G,
  color__brown: H,
  color__grey: J,
  "color__light-grey": "_color__light-grey_9h380_281",
  color__good: K,
  color__average: L,
  color__bad: M,
  color__label: O
}, Q = (r) => {
  const { className: e, vertical: a, fill: s, fluid: c, children: t, ...l } = r;
  return /* @__PURE__ */ o(
    "div",
    {
      className: h([
        _.tabs,
        a ? _.vertical : _.horizontal,
        s && _.fill,
        c && _.fluid,
        e,
        b(l)
      ]),
      ...d(l),
      children: t
    }
  );
}, U = (r) => {
  const {
    className: e,
    selected: a,
    color: s,
    icon: c,
    leftSlot: t,
    rightSlot: l,
    children: g,
    ...n
  } = r;
  return /* @__PURE__ */ f(
    "div",
    {
      className: h([
        _.tab,
        _.tabs__tab,
        _["color__" + s],
        a && _.selected,
        e,
        b(n)
      ]),
      ...d(n),
      children: [
        i(t) && /* @__PURE__ */ o("div", { className: _.tab__left, children: t }) || !!c && /* @__PURE__ */ o("div", { className: _.tab__left, children: /* @__PURE__ */ o(m, { name: c }) }),
        /* @__PURE__ */ o("div", { className: _.tab__text, children: g }),
        i(l) && /* @__PURE__ */ o("div", { className: _.tab__right, children: l })
      ]
    }
  );
};
Q.Tab = U;
export {
  Q as Tabs
};
