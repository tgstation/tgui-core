import { jsxs as I, jsx as t } from "react/jsx-runtime";
import { classes as c } from "../common/react.js";
import { computeBoxProps as A } from "../common/ui.js";
import { DmIcon as D } from "./DmIcon.js";
import { Icon as E } from "./Icon.js";
import { Image as y } from "./Image.js";
import { Stack as N } from "./Stack.js";
import { Tooltip as F } from "./Tooltip.js";
function W(d) {
  const {
    asset: m,
    assetSize: u = 32,
    base64: a,
    buttons: p,
    buttonsAlt: g,
    children: s,
    className: k,
    color: e,
    disabled: i,
    dmFallback: v,
    dmIcon: b,
    dmIconState: x,
    fluid: o,
    imageSize: n = 64,
    imageSrc: B,
    onClick: r,
    onRightClick: f,
    selected: $,
    title: C,
    tooltip: _,
    tooltipPosition: S,
    ...z
  } = d;
  let h = /* @__PURE__ */ I(
    "div",
    {
      className: c([
        "container",
        o && (!!p || !!g) && "hasButtons",
        !r && !f && "noAction",
        $ && "ImageButton--selected",
        i && "ImageButton--disabled",
        e && typeof e == "string" ? `ImageButton--color__${e}` : "ImageButton--color__default"
      ]),
      tabIndex: i ? void 0 : 0,
      onClick: (l) => {
        !i && r && r(l);
      },
      onKeyDown: (l) => {
        l.key === "Enter" && !i && r && r(l);
      },
      onContextMenu: (l) => {
        l.preventDefault(), !i && f && f(l);
      },
      style: { width: o ? "auto" : `calc(${n}px + 0.5em + 2px)` },
      children: [
        /* @__PURE__ */ t("div", { className: "image", children: a || B ? /* @__PURE__ */ t(
          y,
          {
            src: a ? `data:image/png;base64,${a}` : B,
            height: `${n}px`,
            width: `${n}px`
          }
        ) : b && x ? /* @__PURE__ */ t(
          D,
          {
            icon: b,
            icon_state: x,
            fallback: v || /* @__PURE__ */ t(w, { icon: "spinner", spin: !0, size: n }),
            height: `${n}px`,
            width: `${n}px`
          }
        ) : m ? /* @__PURE__ */ t(
          y,
          {
            className: c(m || []),
            height: `${n}px`,
            width: `${n}px`,
            style: {
              transform: `scale(${n / u})`,
              transformOrigin: "top left"
            }
          }
        ) : /* @__PURE__ */ t(w, { icon: "question", size: n }) }),
        o ? /* @__PURE__ */ I("div", { className: "info", children: [
          C && /* @__PURE__ */ t("span", { className: c(["title", s && "divider"]), children: C }),
          s && /* @__PURE__ */ t("span", { className: "contentFluid", children: s })
        ] }) : s && /* @__PURE__ */ t(
          "span",
          {
            className: c([
              "content",
              $ && "ImageButton--contentSelected",
              i && "ImageButton--contentDisabled",
              e && typeof e == "string" ? `ImageButton--contentColor__${e}` : "ImageButton--contentColor__default"
            ]),
            children: s
          }
        )
      ]
    }
  );
  return _ && (h = /* @__PURE__ */ t(F, { content: _, position: S, children: h })), /* @__PURE__ */ I(
    "div",
    {
      className: c([
        "ImageButton",
        o && "ImageButton--fluid",
        k
      ]),
      ...A(z),
      children: [
        h,
        p && /* @__PURE__ */ t(
          "div",
          {
            className: c([
              "buttonsContainer",
              !s && "buttonsEmpty",
              o && i && "ImageButton--disabled",
              o && e && typeof e == "string" ? `ImageButton--buttonsContainerColor__${e}` : o && "ImageButton--buttonsContainerColor__default"
            ]),
            style: {
              width: "auto"
            },
            children: p
          }
        ),
        g && /* @__PURE__ */ t(
          "div",
          {
            className: c([
              "buttonsContainer",
              "buttonsAltContainer",
              !s && "buttonsEmpty",
              o && i && "ImageButton--disabled",
              o && e && typeof e == "string" ? `ImageButton--buttonsContainerColor__${e}` : o && "ImageButton--buttonsContainerColor__default"
            ]),
            style: {
              width: `calc(${n}px + ${o ? 0 : 0.5}em)`,
              maxWidth: o ? "auto" : `calc(${n}px +  0.5em)`
            },
            children: g
          }
        )
      ]
    }
  );
}
function w(d) {
  const { icon: m, spin: u = !1, size: a = 64 } = d;
  return /* @__PURE__ */ t(N, { height: `${a}px`, width: `${a}px`, children: /* @__PURE__ */ t(N.Item, { grow: !0, textAlign: "center", align: "center", children: /* @__PURE__ */ t(
    E,
    {
      spin: u,
      name: m,
      color: "gray",
      style: { fontSize: `calc(${a}px * 0.75)` }
    }
  ) }) });
}
export {
  W as ImageButton
};
