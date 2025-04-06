import { jsxs as g, jsx as t } from "react/jsx-runtime";
import { classes as c } from "../common/react.js";
import { computeBoxProps as D } from "../common/ui.js";
import { DmIcon as j } from "./DmIcon.js";
import { Icon as A } from "./Icon.js";
import { Image as y } from "./Image.js";
import { Stack as N } from "./Stack.js";
import { Tooltip as F } from "./Tooltip.js";
function W(r) {
  const {
    asset: l,
    assetSize: u = 32,
    base64: o,
    buttons: _,
    buttonsAlt: h,
    children: n,
    className: k,
    color: d,
    disabled: a,
    dmFallback: v,
    dmIcon: I,
    dmIconState: f,
    fluid: s,
    imageSize: e = 64,
    imageSrc: x,
    onClick: m,
    onRightClick: B,
    selected: z,
    title: b,
    tooltip: $,
    tooltipPosition: S,
    ...C
  } = r;
  let p = /* @__PURE__ */ g(
    "div",
    {
      className: "ImageButton__container",
      tabIndex: a ? void 0 : 0,
      onClick: (i) => {
        !a && m && m(i);
      },
      onKeyDown: (i) => {
        i.key === "Enter" && !a && m && m(i);
      },
      onContextMenu: (i) => {
        i.preventDefault(), !a && B && B(i);
      },
      style: { width: s ? "auto" : `calc(${e}px + 0.5em + 2px)` },
      children: [
        /* @__PURE__ */ t("div", { className: "ImageButton__image", children: o || x ? /* @__PURE__ */ t(
          y,
          {
            src: o ? `data:image/png;base64,${o}` : x,
            height: `${e}px`,
            width: `${e}px`
          }
        ) : I && f ? /* @__PURE__ */ t(
          j,
          {
            icon: I,
            icon_state: f,
            fallback: v || /* @__PURE__ */ t(w, { icon: "spinner", spin: !0, size: e }),
            height: `${e}px`,
            width: `${e}px`
          }
        ) : l ? /* @__PURE__ */ t(
          y,
          {
            className: c(l || []),
            height: `${e}px`,
            width: `${e}px`,
            style: {
              transform: `scale(${e / u})`,
              transformOrigin: "top left"
            }
          }
        ) : /* @__PURE__ */ t(w, { icon: "question", size: e }) }),
        s ? /* @__PURE__ */ g("div", { className: "ImageButton__content", children: [
          b && /* @__PURE__ */ t(
            "span",
            {
              className: c([
                "ImageButton__content--title",
                !!n && "ImageButton__content--divider"
              ]),
              children: b
            }
          ),
          n && /* @__PURE__ */ t("span", { className: "ImageButton__content--text", children: n })
        ] }) : !!n && /* @__PURE__ */ t("span", { className: "ImageButton__content", children: n })
      ]
    }
  );
  return $ && (p = /* @__PURE__ */ t(F, { content: $, position: S, children: p })), /* @__PURE__ */ g(
    "div",
    {
      className: c([
        "ImageButton",
        s && "ImageButton--fluid",
        z && "ImageButton--selected",
        a && "ImageButton--disabled",
        d && typeof d == "string" ? `ImageButton__color--${d}` : "ImageButton__color--default",
        k
      ]),
      ...D(C),
      children: [
        p,
        _ && /* @__PURE__ */ t(
          "div",
          {
            className: c([
              "ImageButton__buttons",
              !n && "ImageButton__buttons--empty"
            ]),
            style: {
              width: "auto"
            },
            children: _
          }
        ),
        h && /* @__PURE__ */ t(
          "div",
          {
            className: c([
              "ImageButton__buttons",
              "ImageButton__buttons--alt",
              !n && "ImageButton__buttons--empty"
            ]),
            style: {
              width: `calc(${e}px + ${s ? 0 : 0.5}em)`,
              maxWidth: s ? "auto" : `calc(${e}px +  0.5em)`
            },
            children: h
          }
        )
      ]
    }
  );
}
function w(r) {
  const { icon: l, spin: u = !1, size: o = 64 } = r;
  return /* @__PURE__ */ t(N, { height: `${o}px`, width: `${o}px`, children: /* @__PURE__ */ t(N.Item, { grow: !0, textAlign: "center", align: "center", children: /* @__PURE__ */ t(
    A,
    {
      spin: u,
      name: l,
      color: "gray",
      style: { fontSize: `calc(${o}px * 0.75)` }
    }
  ) }) });
}
export {
  W as ImageButton
};
