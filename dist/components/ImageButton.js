import { jsxs as g, jsx as t } from "react/jsx-runtime";
import { classes as l } from "../common/react.js";
import { computeBoxProps as A } from "../common/ui.js";
import { DmIcon as D } from "./DmIcon.js";
import { Icon as F } from "./Icon.js";
import { Image as j } from "./Image.js";
import { Stack as y } from "./Stack.js";
import { Tooltip as z } from "./Tooltip.js";
function H(N) {
  const {
    asset: f,
    base64: r,
    buttons: m,
    buttonsAlt: h,
    children: i,
    className: k,
    color: e,
    disabled: a,
    dmFallback: I,
    dmIcon: b,
    dmIconState: x,
    fluid: c,
    imageSize: o = 64,
    imageSrc: d,
    onClick: s,
    onRightClick: u,
    selected: B,
    title: C,
    tooltip: _,
    tooltipPosition: w,
    ...v
  } = N;
  function $(n, S) {
    return /* @__PURE__ */ t(y, { height: `${o}px`, width: `${o}px`, children: /* @__PURE__ */ t(y.Item, { grow: !0, textAlign: "center", align: "center", children: /* @__PURE__ */ t(
      F,
      {
        spin: S,
        name: n,
        color: "gray",
        style: { fontSize: `calc(${o}px * 0.75)` }
      }
    ) }) });
  }
  let p = /* @__PURE__ */ g(
    "div",
    {
      className: l([
        "container",
        m && "hasButtons",
        !s && !u && "noAction",
        B && "ImageButton--selected",
        a && "ImageButton--disabled",
        e && typeof e == "string" ? `ImageButton--color__${e}` : "ImageButton--color__default"
      ]),
      tabIndex: a ? void 0 : 0,
      onClick: (n) => {
        !a && s && s(n);
      },
      onKeyDown: (n) => {
        n.key === "Enter" && !a && s && s(n);
      },
      onContextMenu: (n) => {
        n.preventDefault(), !a && u && u(n);
      },
      style: { width: c ? "auto" : `calc(${o}px + 0.5em + 2px)` },
      children: [
        /* @__PURE__ */ t("div", { className: "image", children: r || f || d ? /* @__PURE__ */ t(
          j,
          {
            className: l(!r && !d && f || []),
            src: r ? `data:image/png;base64,${r}` : d,
            height: `${o}px`,
            width: `${o}px`
          }
        ) : b && x ? /* @__PURE__ */ t(
          D,
          {
            icon: b,
            icon_state: x,
            fallback: I || $("spinner", !0),
            height: `${o}px`,
            width: `${o}px`
          }
        ) : $("question", !1) }),
        c ? /* @__PURE__ */ g("div", { className: "info", children: [
          C && /* @__PURE__ */ t("span", { className: l(["title", i && "divider"]), children: C }),
          i && /* @__PURE__ */ t("span", { className: "contentFluid", children: i })
        ] }) : i && /* @__PURE__ */ t(
          "span",
          {
            className: l([
              "content",
              B && "ImageButton--contentSelected",
              a && "ImageButton--contentDisabled",
              e && typeof e == "string" ? `ImageButton--contentColor__${e}` : "ImageButton--contentColor__default"
            ]),
            children: i
          }
        )
      ]
    }
  );
  return _ && (p = /* @__PURE__ */ t(z, { content: _, position: w, children: p })), /* @__PURE__ */ g(
    "div",
    {
      className: l([
        "ImageButton",
        c && "ImageButton--fluid",
        k
      ]),
      ...A(v),
      children: [
        p,
        m && /* @__PURE__ */ t(
          "div",
          {
            className: l([
              "buttonsContainer",
              h && "buttonsAltContainer",
              !i && "buttonsEmpty",
              c && e && typeof e == "string" ? `ImageButton--buttonsContainerColor__${e}` : c && "ImageButton--buttonsContainerColor__default"
            ]),
            style: {
              width: h ? `calc(${o}px + 0.5em)` : "auto"
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
