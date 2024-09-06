import { jsxs as a, jsx as r } from "react/jsx-runtime";
import { useRef as P, useEffect as g } from "react";
import { addScrollableNode as j, removeScrollableNode as z } from "../common/events.js";
import { classes as d, canRender as m } from "../common/react.js";
import { s as e } from "../Section.module-qhQWhlUX.js";
import { computeBoxClassName as B, computeBoxProps as H } from "./Box.js";
const _ = (f) => {
  const {
    buttons: o,
    children: u,
    className: p,
    fill: N,
    fitted: h,
    flexGrow: b,
    noTopPadding: x,
    onScroll: v,
    scrollable: s,
    scrollableHorizontal: n,
    stretchContents: S,
    title: c,
    container_id: T,
    ...i
  } = f, t = P(null), C = m(c) || m(o);
  return g(() => {
    if (!(t != null && t.current) || !s && !n) return;
    const l = t.current;
    return j(l), () => {
      l && z(l);
    };
  }, []), /* @__PURE__ */ a(
    "div",
    {
      id: T || "",
      className: d([
        e.section,
        N && e.fill,
        h && e.fitted,
        s && e.scrollable,
        n && e.scrollableHorizontal,
        b && e.sectionFlex,
        p,
        B(i)
      ]),
      ...H(i),
      children: [
        C && /* @__PURE__ */ a("div", { className: e.title, children: [
          /* @__PURE__ */ r("span", { className: e.titleText, children: c }),
          /* @__PURE__ */ r("div", { className: e.buttons, children: o })
        ] }),
        /* @__PURE__ */ r("div", { className: e.rest, children: /* @__PURE__ */ r(
          "div",
          {
            className: d([
              e.content,
              !!S && e.stretchContents,
              !!x && e.noTopPadding
            ]),
            onScroll: v,
            ref: t,
            children: u
          }
        ) })
      ]
    }
  );
};
export {
  _ as Section
};
