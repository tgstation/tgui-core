import { jsxs as I, jsx as t } from "react/jsx-runtime";
import { classes as l } from "../common/react.js";
import { computeBoxProps as S } from "../common/ui.js";
import { DmIcon as z } from "./DmIcon.js";
import { Icon as A } from "./Icon.js";
import { Image as D } from "./Image.js";
import { Stack as $ } from "./Stack.js";
import { Tooltip as E } from "./Tooltip.js";
function W(d) {
  const {
    asset: u,
    base64: c,
    buttons: i,
    buttonsAlt: p,
    children: a,
    className: N,
    color: o,
    disabled: r,
    dmFallback: k,
    dmIcon: b,
    dmIconState: x,
    fluid: e,
    imageSize: n = 64,
    imageSrc: g,
    onClick: m,
    onRightClick: f,
    selected: C,
    title: B,
    tooltip: _,
    tooltipPosition: w,
    ...v
  } = d;
  let h = /* @__PURE__ */ I(
    "div",
    {
      className: l([
        "container",
        i || e && p && "hasButtons",
        !m && !f && "noAction",
        C && "ImageButton--selected",
        r && "ImageButton--disabled",
        o && typeof o == "string" ? `ImageButton--color__${o}` : "ImageButton--color__default"
      ]),
      tabIndex: r ? void 0 : 0,
      onClick: (s) => {
        !r && m && m(s);
      },
      onKeyDown: (s) => {
        s.key === "Enter" && !r && m && m(s);
      },
      onContextMenu: (s) => {
        s.preventDefault(), !r && f && f(s);
      },
      style: { width: e ? "auto" : `calc(${n}px + 0.5em + 2px)` },
      children: [
        /* @__PURE__ */ t("div", { className: "image", children: c || u || g ? /* @__PURE__ */ t(
          D,
          {
            className: l(!c && !g && u || []),
            src: c ? `data:image/png;base64,${c}` : g,
            height: `${n}px`,
            width: `${n}px`
          }
        ) : b && x ? /* @__PURE__ */ t(
          z,
          {
            icon: b,
            icon_state: x,
            fallback: k || /* @__PURE__ */ t(y, { icon: "spinner", spin: !0, size: n }),
            height: `${n}px`,
            width: `${n}px`
          }
        ) : /* @__PURE__ */ t(y, { icon: "question" }) }),
        e ? /* @__PURE__ */ I("div", { className: "info", children: [
          B && /* @__PURE__ */ t("span", { className: l(["title", a && "divider"]), children: B }),
          a && /* @__PURE__ */ t("span", { className: "contentFluid", children: a })
        ] }) : a && /* @__PURE__ */ t(
          "span",
          {
            className: l([
              "content",
              C && "ImageButton--contentSelected",
              r && "ImageButton--contentDisabled",
              o && typeof o == "string" ? `ImageButton--contentColor__${o}` : "ImageButton--contentColor__default"
            ]),
            children: a
          }
        )
      ]
    }
  );
  return _ && (h = /* @__PURE__ */ t(E, { content: _, position: w, children: h })), /* @__PURE__ */ I(
    "div",
    {
      className: l([
        "ImageButton",
        e && "ImageButton--fluid",
        N
      ]),
      ...S(v),
      children: [
        h,
        i && /* @__PURE__ */ t(
          "div",
          {
            className: l([
              "buttonsContainer",
              !a && "buttonsEmpty",
              e && o && typeof o == "string" ? `ImageButton--buttonsContainerColor__${o}` : e && "ImageButton--buttonsContainerColor__default"
            ]),
            style: {
              width: "auto"
            },
            children: i
          }
        ),
        p && /* @__PURE__ */ t(
          "div",
          {
            className: l([
              "buttonsContainer",
              "buttonsAltContainer",
              !a && "buttonsEmpty",
              e && o && typeof o == "string" ? `ImageButton--buttonsContainerColor__${o}` : e && "ImageButton--buttonsContainerColor__default"
            ]),
            style: {
              width: `calc(${n}px + ${e ? 0 : 0.5}em)`,
              maxWidth: e ? "auto" : `calc(${n}px +  0.5em)`
            },
            children: p
          }
        )
      ]
    }
  );
}
function y(d) {
  const { icon: u, spin: c = !1, size: i = 64 } = d;
  return /* @__PURE__ */ t($, { height: `${i}px`, width: `${i}px`, children: /* @__PURE__ */ t($.Item, { grow: !0, textAlign: "center", align: "center", children: /* @__PURE__ */ t(
    A,
    {
      spin: c,
      name: u,
      color: "gray",
      style: { fontSize: `calc(${i}px * 0.75)` }
    }
  ) }) });
}
export {
  W as ImageButton
};
