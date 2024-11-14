import { jsxs as f, jsx as t } from "react/jsx-runtime";
import { classes as l } from "../common/react.js";
import { computeBoxProps as B } from "./Box.js";
import { DmIcon as D } from "./DmIcon.js";
import { Icon as F } from "./Icon.js";
import { Image as j } from "./Image.js";
import { Stack as I } from "./Stack.js";
import { Tooltip as z } from "./Tooltip.js";
function H(k) {
  const {
    asset: h,
    base64: r,
    buttons: m,
    buttonsAlt: g,
    children: i,
    className: w,
    color: e,
    disabled: a,
    dmFallback: b,
    dmIcon: x,
    dmIconState: C,
    fluid: c,
    imageSize: o = 64,
    imageSrc: d,
    onClick: s,
    onRightClick: p,
    selected: _,
    title: $,
    tooltip: y,
    tooltipPosition: v,
    ...S
  } = k;
  function N(n, A) {
    return /* @__PURE__ */ t(I, { height: `${o}px`, width: `${o}px`, children: /* @__PURE__ */ t(I.Item, { grow: !0, textAlign: "center", align: "center", children: /* @__PURE__ */ t(
      F,
      {
        spin: A,
        name: n,
        color: "gray",
        style: { fontSize: `calc(${o}px * 0.75)` }
      }
    ) }) });
  }
  let u = /* @__PURE__ */ f(
    "div",
    {
      className: l([
        "container",
        m && "hasButtons",
        !s && !p && "noAction",
        _ && "selected",
        a && "disabled",
        e && typeof e == "string" ? `color__${e}` : "color__default"
      ]),
      tabIndex: a ? void 0 : 0,
      onClick: (n) => {
        !a && s && s(n);
      },
      onKeyDown: (n) => {
        n.key === "Enter" && !a && s && s(n);
      },
      onContextMenu: (n) => {
        n.preventDefault(), !a && p && p(n);
      },
      style: { width: c ? "auto" : `calc(${o}px + 0.5em + 2px)` },
      children: [
        /* @__PURE__ */ t("div", { className: "image", children: r || h || d ? /* @__PURE__ */ t(
          j,
          {
            className: l(!r && !d && h || []),
            src: r ? `data:image/png;base64,${r}` : d,
            height: `${o}px`,
            width: `${o}px`
          }
        ) : x && C ? /* @__PURE__ */ t(
          D,
          {
            icon: x,
            icon_state: C,
            fallback: b || N("spinner", !0),
            height: `${o}px`,
            width: `${o}px`
          }
        ) : N("question", !1) }),
        c ? /* @__PURE__ */ f("div", { className: "info", children: [
          $ && /* @__PURE__ */ t("span", { className: l(["title", i && "divider"]), children: $ }),
          i && /* @__PURE__ */ t("span", { className: "contentFluid", children: i })
        ] }) : i && /* @__PURE__ */ t(
          "span",
          {
            className: l([
              "content",
              _ && "contentSelected",
              a && "contentDisabled",
              e && typeof e == "string" ? `contentColor__${e}` : "contentColor__default"
            ]),
            children: i
          }
        )
      ]
    }
  );
  return y && (u = /* @__PURE__ */ t(z, { content: y, position: v, children: u })), /* @__PURE__ */ f(
    "div",
    {
      className: l(["ImageButton", c && "fluid", w]),
      ...B(S),
      children: [
        u,
        m && /* @__PURE__ */ t(
          "div",
          {
            className: l([
              "buttonsContainer",
              g && "buttonsAltContainer",
              !i && "buttonsEmpty",
              c && e && typeof e == "string" ? `buttonsContainerColor__${e}` : c && "buttonsContainerColor__default"
            ]),
            style: {
              width: g ? `calc(${o}px + 0.5em)` : "auto"
            },
            children: m
          }
        )
      ]
    }
  );
}
export {
  H as ImageButton
};
