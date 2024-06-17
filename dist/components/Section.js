import { jsxs as r, jsx as s } from "react/jsx-runtime";
import { s as t } from "../Section.module-CLVHJ4yA.js";
import { classes as S, canRender as m } from "../common/react.js";
import { forwardRef as j, useEffect as z } from "react";
import { addScrollableNode as B, removeScrollableNode as H } from "../events.js";
import { computeBoxClassName as T, computeBoxProps as y } from "./Box.js";
const q = j(
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
    return z(() => {
      if (l != null && l.current && !(!i && !e))
        return B(l.current), () => {
          l != null && l.current && H(l.current);
        };
    }, []), /* @__PURE__ */ r(
      "div",
      {
        id: v || "",
        className: S([
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
