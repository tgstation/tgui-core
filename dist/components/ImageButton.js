import { jsxs as d, jsx as t } from "react/jsx-runtime";
import { classes as e } from "../common/react.js";
import { computeBoxProps as D } from "./Box.js";
import { DmIcon as F } from "./DmIcon.js";
import { Icon as E } from "./Icon.js";
import { Image as j } from "./Image.js";
import { Stack as I } from "./Stack.js";
import { Tooltip as z } from "./Tooltip.js";
import '../assets/ImageButton.css';const P = "_color__black_1ws3c_18", q = "_contentColor__black_1ws3c_29", M = "_buttonsContainerColor__black_1ws3c_37", R = "_color__white_1ws3c_45", T = "_contentColor__white_1ws3c_56", G = "_buttonsContainerColor__white_1ws3c_64", H = "_color__red_1ws3c_72", J = "_contentColor__red_1ws3c_83", K = "_buttonsContainerColor__red_1ws3c_91", L = "_color__orange_1ws3c_99", O = "_contentColor__orange_1ws3c_110", Q = "_buttonsContainerColor__orange_1ws3c_118", U = "_color__yellow_1ws3c_126", V = "_contentColor__yellow_1ws3c_137", W = "_buttonsContainerColor__yellow_1ws3c_145", X = "_color__olive_1ws3c_153", Y = "_contentColor__olive_1ws3c_164", Z = "_buttonsContainerColor__olive_1ws3c_172", oo = "_color__green_1ws3c_180", to = "_contentColor__green_1ws3c_191", _o = "_buttonsContainerColor__green_1ws3c_199", no = "_color__teal_1ws3c_207", eo = "_contentColor__teal_1ws3c_218", ro = "_buttonsContainerColor__teal_1ws3c_226", lo = "_color__blue_1ws3c_234", co = "_contentColor__blue_1ws3c_245", so = "_buttonsContainerColor__blue_1ws3c_253", ao = "_color__violet_1ws3c_261", io = "_contentColor__violet_1ws3c_272", Co = "_buttonsContainerColor__violet_1ws3c_280", bo = "_color__purple_1ws3c_288", uo = "_contentColor__purple_1ws3c_299", wo = "_buttonsContainerColor__purple_1ws3c_307", go = "_color__pink_1ws3c_315", po = "_contentColor__pink_1ws3c_326", mo = "_buttonsContainerColor__pink_1ws3c_334", fo = "_color__brown_1ws3c_342", ho = "_contentColor__brown_1ws3c_353", vo = "_buttonsContainerColor__brown_1ws3c_361", yo = "_color__grey_1ws3c_369", ko = "_contentColor__grey_1ws3c_380", xo = "_buttonsContainerColor__grey_1ws3c_388", Io = "_color__good_1ws3c_423", $o = "_contentColor__good_1ws3c_434", Ao = "_buttonsContainerColor__good_1ws3c_442", Bo = "_color__average_1ws3c_450", No = "_contentColor__average_1ws3c_461", So = "_buttonsContainerColor__average_1ws3c_469", Do = "_color__bad_1ws3c_477", Fo = "_contentColor__bad_1ws3c_488", Eo = "_buttonsContainerColor__bad_1ws3c_496", jo = "_color__label_1ws3c_504", zo = "_contentColor__label_1ws3c_515", Po = "_buttonsContainerColor__label_1ws3c_523", qo = "_color__default_1ws3c_531", Mo = "_disabled_1ws3c_542", Ro = "_selected_1ws3c_547", To = "_contentColor__default_1ws3c_558", Go = "_contentDisabled_1ws3c_566", Ho = "_contentSelected_1ws3c_571", Jo = "_buttonsContainerColor__default_1ws3c_579", Ko = "_ImageButton_1ws3c_587", Lo = "_noAction_1ws3c_593", Oo = "_container_1ws3c_596", Qo = "_image_1ws3c_601", Uo = "_buttonsContainer_1ws3c_37", Vo = "_buttonsAltContainer_1ws3c_615", Wo = "_buttonsEmpty_1ws3c_622", Xo = "_content_1ws3c_29", Yo = "_fluid_1ws3c_642", Zo = "_info_1ws3c_652", ot = "_title_1ws3c_661", tt = "_divider_1ws3c_665", _t = "_contentFluid_1ws3c_668", nt = "_hasButtons_1ws3c_678", o = {
  color__black: P,
  contentColor__black: q,
  buttonsContainerColor__black: M,
  color__white: R,
  contentColor__white: T,
  buttonsContainerColor__white: G,
  color__red: H,
  contentColor__red: J,
  buttonsContainerColor__red: K,
  color__orange: L,
  contentColor__orange: O,
  buttonsContainerColor__orange: Q,
  color__yellow: U,
  contentColor__yellow: V,
  buttonsContainerColor__yellow: W,
  color__olive: X,
  contentColor__olive: Y,
  buttonsContainerColor__olive: Z,
  color__green: oo,
  contentColor__green: to,
  buttonsContainerColor__green: _o,
  color__teal: no,
  contentColor__teal: eo,
  buttonsContainerColor__teal: ro,
  color__blue: lo,
  contentColor__blue: co,
  buttonsContainerColor__blue: so,
  color__violet: ao,
  contentColor__violet: io,
  buttonsContainerColor__violet: Co,
  color__purple: bo,
  contentColor__purple: uo,
  buttonsContainerColor__purple: wo,
  color__pink: go,
  contentColor__pink: po,
  buttonsContainerColor__pink: mo,
  color__brown: fo,
  contentColor__brown: ho,
  buttonsContainerColor__brown: vo,
  color__grey: yo,
  contentColor__grey: ko,
  buttonsContainerColor__grey: xo,
  "color__light-grey": "_color__light-grey_1ws3c_396",
  "contentColor__light-grey": "_contentColor__light-grey_1ws3c_407",
  "buttonsContainerColor__light-grey": "_buttonsContainerColor__light-grey_1ws3c_415",
  color__good: Io,
  contentColor__good: $o,
  buttonsContainerColor__good: Ao,
  color__average: Bo,
  contentColor__average: No,
  buttonsContainerColor__average: So,
  color__bad: Do,
  contentColor__bad: Fo,
  buttonsContainerColor__bad: Eo,
  color__label: jo,
  contentColor__label: zo,
  buttonsContainerColor__label: Po,
  color__default: qo,
  disabled: Mo,
  selected: Ro,
  contentColor__default: To,
  contentDisabled: Go,
  contentSelected: Ho,
  buttonsContainerColor__default: Jo,
  ImageButton: Ko,
  noAction: Lo,
  container: Oo,
  image: Qo,
  buttonsContainer: Uo,
  buttonsAltContainer: Vo,
  buttonsEmpty: Wo,
  content: Xo,
  fluid: Yo,
  info: Zo,
  title: ot,
  divider: tt,
  contentFluid: _t,
  hasButtons: nt
};
function bt($) {
  const {
    asset: g,
    base64: a,
    buttons: i,
    buttonsAlt: p,
    children: r,
    className: A,
    color: _,
    disabled: c,
    dmFallback: m,
    dmIcon: f,
    dmIconState: h,
    fluid: s,
    imageSize: n = 64,
    imageSrc: C,
    onClick: b,
    onRightClick: u,
    selected: v,
    title: y,
    tooltip: k,
    tooltipPosition: B,
    ...N
  } = $;
  function x(l, S) {
    return /* @__PURE__ */ t(I, { height: `${n}px`, width: `${n}px`, children: /* @__PURE__ */ t(I.Item, { grow: !0, textAlign: "center", align: "center", children: /* @__PURE__ */ t(
      E,
      {
        spin: S,
        name: l,
        color: "gray",
        style: { fontSize: `calc(${n}px * 0.75)` }
      }
    ) }) });
  }
  let w = /* @__PURE__ */ d(
    "div",
    {
      className: e([
        o.container,
        i && o.hasButtons,
        !b && !u && o.noAction,
        v && o.selected,
        c && o.disabled,
        _ && typeof _ == "string" ? o["color__" + _] : o.color__default
      ]),
      tabIndex: c ? void 0 : 0,
      onClick: (l) => {
        !c && b && b(l);
      },
      onContextMenu: (l) => {
        l.preventDefault(), !c && u && u(l);
      },
      style: { width: s ? "auto" : `calc(${n}px + 0.5em + 2px)` },
      children: [
        /* @__PURE__ */ t("div", { className: e([o.image]), children: a || g || C ? /* @__PURE__ */ t(
          j,
          {
            className: e([!a && !C && g]),
            src: a ? `data:image/jpeg;base64,${a}` : C,
            height: `${n}px`,
            width: `${n}px`
          }
        ) : f && h ? /* @__PURE__ */ t(
          F,
          {
            icon: f,
            icon_state: h,
            fallback: m || x("spinner", !0),
            height: `${n}px`,
            width: `${n}px`
          }
        ) : x("question", !1) }),
        s ? /* @__PURE__ */ d("div", { className: e([o.info]), children: [
          y && /* @__PURE__ */ t(
            "span",
            {
              className: e([o.title, r && o.divider]),
              children: y
            }
          ),
          r && /* @__PURE__ */ t("span", { className: e([o.contentFluid]), children: r })
        ] }) : r && /* @__PURE__ */ t(
          "span",
          {
            className: e([
              o.content,
              v && o.contentSelected,
              c && o.contentDisabled,
              _ && typeof _ == "string" ? o["contentColor__" + _] : o.contentColor__default
            ]),
            children: r
          }
        )
      ]
    }
  );
  return k && (w = /* @__PURE__ */ t(z, { content: k, position: B, children: w })), /* @__PURE__ */ d(
    "div",
    {
      className: e([
        o.ImageButton,
        s && o.fluid,
        A
      ]),
      ...D(N),
      children: [
        w,
        i && /* @__PURE__ */ t(
          "div",
          {
            className: e([
              o.buttonsContainer,
              p && o.buttonsAltContainer,
              !r && o.buttonsEmpty,
              s && _ && typeof _ == "string" ? o["buttonsContainerColor__" + _] : s && o.buttonsContainerColor__default
            ]),
            style: {
              width: p ? `calc(${n}px + 0.5em)` : "auto"
            },
            children: i
          }
        )
      ]
    }
  );
}
export {
  bt as ImageButton
};
