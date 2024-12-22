import { jsxs as i, jsx as t } from "react/jsx-runtime";
import { forwardRef as C, useRef as P, useEffect as g } from "react";
import { addScrollableNode as j, removeScrollableNode as w } from "../common/events.js";
import { classes as s, canRender as a } from "../common/react.js";
import { computeBoxClassName as z, computeBoxProps as B } from "../common/ui.js";
const q = C(
  (d, m) => {
    const {
      buttons: o,
      children: f,
      className: S,
      container_id: _ = "",
      fill: u,
      fitted: p,
      flexGrow: N,
      noTopPadding: h,
      onScroll: b,
      scrollable: n,
      scrollableHorizontal: c,
      stretchContents: x,
      title: r,
      ...l
    } = d, v = P(null), e = m || v, T = a(r) || a(o);
    return g(() => (e != null && e.current && (n || c) && j(e.current), () => {
      e != null && e.current && w(e.current);
    }), []), /* @__PURE__ */ i(
      "div",
      {
        id: _,
        className: s([
          "Section",
          u && "Section--fill",
          p && "Section--fitted",
          n && "Section--scrollable",
          c && "Section--scrollableHorizontal",
          N && "Section--flex",
          S,
          z(l)
        ]),
        ...B(l),
        children: [
          T && /* @__PURE__ */ i("div", { className: "Section__title", children: [
            /* @__PURE__ */ t("span", { className: "Section__titleText", children: r }),
            /* @__PURE__ */ t("div", { className: "Section__buttons", children: o })
          ] }),
          /* @__PURE__ */ t("div", { className: "Section__rest", children: /* @__PURE__ */ t(
            "div",
            {
              className: s([
                "Section__content",
                x && "Section__content--stretchContents",
                h && "Section__content--noTopPadding"
              ]),
              onScroll: b,
              ref: e,
              children: f
            }
          ) })
        ]
      }
    );
  }
);
export {
  q as Section
};
