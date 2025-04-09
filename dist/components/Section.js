import { jsxs as s, jsx as e } from "react/jsx-runtime";
import { useRef as T, useEffect as C } from "react";
import { addScrollableNode as P, removeScrollableNode as g } from "../common/events.js";
import { canRender as a, classes as d } from "../common/react.js";
import { computeBoxProps as j, computeBoxClassName as z } from "../common/ui.js";
function k(m) {
  const {
    buttons: c,
    children: S,
    className: f,
    container_id: u = "",
    fill: _,
    fitted: p,
    flexGrow: N,
    noTopPadding: h,
    onScroll: b,
    ref: o,
    scrollable: n,
    scrollableHorizontal: i,
    stretchContents: x,
    title: l,
    ...r
  } = m, t = T((o == null ? void 0 : o.current) ?? null), v = a(l) || a(c);
  return C(() => (t != null && t.current && (n || i) && P(t.current), () => {
    t != null && t.current && g(t.current);
  }), []), /* @__PURE__ */ s(
    "div",
    {
      id: u,
      className: d([
        "Section",
        _ && "Section--fill",
        p && "Section--fitted",
        n && "Section--scrollable",
        i && "Section--scrollableHorizontal",
        N && "Section--flex",
        f,
        z(r)
      ]),
      ...j(r),
      children: [
        v && /* @__PURE__ */ s("div", { className: "Section__title", children: [
          /* @__PURE__ */ e("span", { className: "Section__titleText", children: l }),
          /* @__PURE__ */ e("div", { className: "Section__buttons", children: c })
        ] }),
        /* @__PURE__ */ e("div", { className: "Section__rest", children: /* @__PURE__ */ e(
          "div",
          {
            className: d([
              "Section__content",
              x && "Section__content--stretchContents",
              h && "Section__content--noTopPadding"
            ]),
            onScroll: b,
            ref: t,
            children: S
          }
        ) })
      ]
    }
  );
}
export {
  k as Section
};
