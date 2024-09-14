import { jsxs as d, jsx as t } from "react/jsx-runtime";
import { classes as e } from "../common/react.js";
import { computeBoxProps as D } from "./Box.js";
import { DmIcon as F } from "./DmIcon.js";
import { Icon as E } from "./Icon.js";
import { Image as j } from "./Image.js";
import { Stack as I } from "./Stack.js";
import { Tooltip as z } from "./Tooltip.js";
import '../assets/ImageButton.css';const P = "_color__black_7gau9_18", q = "_contentColor__black_7gau9_29", M = "_buttonsContainerColor__black_7gau9_37", R = "_color__white_7gau9_45", T = "_contentColor__white_7gau9_56", G = "_buttonsContainerColor__white_7gau9_64", H = "_color__red_7gau9_72", J = "_contentColor__red_7gau9_83", K = "_buttonsContainerColor__red_7gau9_91", L = "_color__orange_7gau9_99", O = "_contentColor__orange_7gau9_110", Q = "_buttonsContainerColor__orange_7gau9_118", U = "_color__yellow_7gau9_126", V = "_contentColor__yellow_7gau9_137", W = "_buttonsContainerColor__yellow_7gau9_145", X = "_color__olive_7gau9_153", Y = "_contentColor__olive_7gau9_164", Z = "_buttonsContainerColor__olive_7gau9_172", oo = "_color__green_7gau9_180", to = "_contentColor__green_7gau9_191", _o = "_buttonsContainerColor__green_7gau9_199", no = "_color__teal_7gau9_207", eo = "_contentColor__teal_7gau9_218", ro = "_buttonsContainerColor__teal_7gau9_226", lo = "_color__blue_7gau9_234", ao = "_contentColor__blue_7gau9_245", co = "_buttonsContainerColor__blue_7gau9_253", so = "_color__violet_7gau9_261", io = "_contentColor__violet_7gau9_272", uo = "_buttonsContainerColor__violet_7gau9_280", Co = "_color__purple_7gau9_288", go = "_contentColor__purple_7gau9_299", bo = "_buttonsContainerColor__purple_7gau9_307", po = "_color__pink_7gau9_315", mo = "_contentColor__pink_7gau9_326", fo = "_buttonsContainerColor__pink_7gau9_334", ho = "_color__brown_7gau9_342", vo = "_contentColor__brown_7gau9_353", yo = "_buttonsContainerColor__brown_7gau9_361", wo = "_color__grey_7gau9_369", ko = "_contentColor__grey_7gau9_380", xo = "_buttonsContainerColor__grey_7gau9_388", Io = "_color__good_7gau9_423", $o = "_contentColor__good_7gau9_434", Ao = "_buttonsContainerColor__good_7gau9_442", Bo = "_color__average_7gau9_450", No = "_contentColor__average_7gau9_461", So = "_buttonsContainerColor__average_7gau9_469", Do = "_color__bad_7gau9_477", Fo = "_contentColor__bad_7gau9_488", Eo = "_buttonsContainerColor__bad_7gau9_496", jo = "_color__label_7gau9_504", zo = "_contentColor__label_7gau9_515", Po = "_buttonsContainerColor__label_7gau9_523", qo = "_color__default_7gau9_531", Mo = "_disabled_7gau9_542", Ro = "_selected_7gau9_547", To = "_contentColor__default_7gau9_558", Go = "_contentDisabled_7gau9_566", Ho = "_contentSelected_7gau9_571", Jo = "_buttonsContainerColor__default_7gau9_579", Ko = "_ImageButton_7gau9_587", Lo = "_noAction_7gau9_595", Oo = "_container_7gau9_598", Qo = "_image_7gau9_603", Uo = "_buttonsContainer_7gau9_37", Vo = "_buttonsAltContainer_7gau9_621", Wo = "_buttonsEmpty_7gau9_628", Xo = "_content_7gau9_29", Yo = "_fluid_7gau9_649", Zo = "_info_7gau9_661", ot = "_title_7gau9_667", tt = "_divider_7gau9_671", _t = "_contentFluid_7gau9_675", nt = "_hasButtons_7gau9_683", o = {
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
  contentColor__blue: ao,
  buttonsContainerColor__blue: co,
  color__violet: so,
  contentColor__violet: io,
  buttonsContainerColor__violet: uo,
  color__purple: Co,
  contentColor__purple: go,
  buttonsContainerColor__purple: bo,
  color__pink: po,
  contentColor__pink: mo,
  buttonsContainerColor__pink: fo,
  color__brown: ho,
  contentColor__brown: vo,
  buttonsContainerColor__brown: yo,
  color__grey: wo,
  contentColor__grey: ko,
  buttonsContainerColor__grey: xo,
  "color__light-grey": "_color__light-grey_7gau9_396",
  "contentColor__light-grey": "_contentColor__light-grey_7gau9_407",
  "buttonsContainerColor__light-grey": "_buttonsContainerColor__light-grey_7gau9_415",
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
function Ct($) {
  const {
    asset: p,
    base64: s,
    buttons: i,
    buttonsAlt: m,
    children: r,
    className: A,
    color: _,
    disabled: a,
    dmFallback: f,
    dmIcon: h,
    dmIconState: v,
    fluid: c,
    imageSize: n = 64,
    imageSrc: u,
    onClick: C,
    onRightClick: g,
    selected: y,
    title: w,
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
  let b = /* @__PURE__ */ d(
    "div",
    {
      className: e([
        o.container,
        i && o.hasButtons,
        !C && !g && o.noAction,
        y && o.selected,
        a && o.disabled,
        _ && typeof _ == "string" ? o["color__" + _] : o.color__default
      ]),
      tabIndex: a ? void 0 : 0,
      onClick: (l) => {
        !a && C && C(l);
      },
      onContextMenu: (l) => {
        l.preventDefault(), !a && g && g(l);
      },
      style: { width: c ? "auto" : `calc(${n}px + 0.5em + 2px)` },
      children: [
        /* @__PURE__ */ t("div", { className: e([o.image]), children: s || p || u ? /* @__PURE__ */ t(
          j,
          {
            className: e(!s && !u && p || []),
            src: s ? `data:image/png;base64,${s}` : u,
            height: `${n}px`,
            width: `${n}px`
          }
        ) : h && v ? /* @__PURE__ */ t(
          F,
          {
            icon: h,
            icon_state: v,
            fallback: f || x("spinner", !0),
            height: `${n}px`,
            width: `${n}px`
          }
        ) : x("question", !1) }),
        c ? /* @__PURE__ */ d("div", { className: e([o.info]), children: [
          w && /* @__PURE__ */ t(
            "span",
            {
              className: e([o.title, r && o.divider]),
              children: w
            }
          ),
          r && /* @__PURE__ */ t("span", { className: e([o.contentFluid]), children: r })
        ] }) : r && /* @__PURE__ */ t(
          "span",
          {
            className: e([
              o.content,
              y && o.contentSelected,
              a && o.contentDisabled,
              _ && typeof _ == "string" ? o["contentColor__" + _] : o.contentColor__default
            ]),
            children: r
          }
        )
      ]
    }
  );
  return k && (b = /* @__PURE__ */ t(z, { content: k, position: B, children: b })), /* @__PURE__ */ d(
    "div",
    {
      className: e([
        o.ImageButton,
        c && o.fluid,
        A
      ]),
      ...D(N),
      children: [
        b,
        i && /* @__PURE__ */ t(
          "div",
          {
            className: e([
              o.buttonsContainer,
              m && o.buttonsAltContainer,
              !r && o.buttonsEmpty,
              c && _ && typeof _ == "string" ? o["buttonsContainerColor__" + _] : c && o.buttonsContainerColor__default
            ]),
            style: {
              width: m ? `calc(${n}px + 0.5em)` : "auto"
            },
            children: i
          }
        )
      ]
    }
  );
}
export {
  Ct as ImageButton
};
