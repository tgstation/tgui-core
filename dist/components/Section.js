import { jsxs as s, jsx as t } from "react/jsx-runtime";
import { useRef as T, useEffect as C } from "react";
import { addScrollableNode as P, removeScrollableNode as g } from "../common/events.js";
import { classes as a, canRender as d } from "../common/react.js";
import { computeBoxClassName as j, computeBoxProps as z } from "./Box.js";
function G(m) {
  const {
    buttons: n,
    children: f,
    className: _,
    fill: u,
    fitted: S,
    flexGrow: p,
    noTopPadding: N,
    onScroll: h,
    scrollable: c,
    scrollableHorizontal: l,
    stretchContents: b,
    title: r,
    container_id: x,
    ...i
  } = m, e = T(null), v = d(r) || d(n);
  return C(() => {
    if (!(e != null && e.current) || !c && !l) return;
    const o = e.current;
    return P(o), () => {
      o && g(o);
    };
  }, []), /* @__PURE__ */ s(
    "div",
    {
      id: x || "",
      className: a([
        "Section",
        u && "Section--fill",
        S && "Section--fitted",
        c && "Section--scrollable",
        l && "Section--scrollableHorizontal",
        p && "Section__flex",
        _,
        j(i)
      ]),
      ...z(i),
      children: [
        v && /* @__PURE__ */ s("div", { className: "Section__title", children: [
          /* @__PURE__ */ t("span", { className: "Section__titleText", children: r }),
          /* @__PURE__ */ t("div", { className: "Section__buttons", children: n })
        ] }),
        /* @__PURE__ */ t("div", { className: "Section__rest", children: /* @__PURE__ */ t(
          "div",
          {
            className: a([
              "Section__content",
              !!b && "content__stretchContents",
              !!N && "content__noTopPadding"
            ]),
            onScroll: h,
            ref: e,
            children: f
          }
        ) })
      ]
    }
  );
}
export {
  G as Section
};
