import { jsxs as r, jsx as s } from "react/jsx-runtime";
import { forwardRef as S, useEffect as j } from "react";
import { addScrollableNode as z, removeScrollableNode as B } from "../common/events.js";
import { canRender as m, classes as H } from "../common/react.js";
import { s as t } from "../Section.module-CLVHJ4yA.js";
import { computeBoxClassName as T, computeBoxProps as y } from "./Box.js";
const q = S(
  (a, l) => {
    const {
      buttons: c,
      children: u,
      className: p,
      fill: N,
      fitted: b,
      onScroll: h,
      scrollable: i,
      scrollableHorizontal: e,
      title: n,
      container_id: v,
      ...o
    } = a, x = m(n) || m(c);
    return j(() => {
      if (l != null && l.current && !(!i && !e))
        return z(l.current), () => {
          l != null && l.current && B(l.current);
        };
    }, []), /* @__PURE__ */ r(
      "div",
      {
        id: v || "",
        className: H([
          t.section,
          N && t.fill,
          b && t.fitted,
          i && t.scrollable,
          e && t.scrollableHorizontal,
          p,
          T(o)
        ]),
        ...y(o),
        children: [
          x && /* @__PURE__ */ r("div", { className: t.title, children: [
            /* @__PURE__ */ s("span", { className: t.titleText, children: n }),
            /* @__PURE__ */ s("div", { className: t.buttons, children: c })
          ] }),
          /* @__PURE__ */ s("div", { className: t.rest, children: /* @__PURE__ */ s(
            "div",
            {
              className: t.content,
              onScroll: h,
              ref: l,
              children: u
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
