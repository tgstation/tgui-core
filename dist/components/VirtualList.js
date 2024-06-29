import { jsxs as g, jsx as c } from "react/jsx-runtime";
import { useRef as h, useState as o, useCallback as v, useEffect as b } from "react";
function y(u) {
  const { children: t } = u, s = h(null), [e, d] = o(1), [m, f] = o(0), i = v(() => {
    const { current: n } = s;
    if (!t || !Array.isArray(t) || !n || e >= t.length)
      return;
    const r = document.body.offsetHeight - n.getBoundingClientRect().bottom, a = Math.ceil(n.offsetHeight / e);
    if (r > 0) {
      const l = Math.min(
        t.length,
        e + Math.max(1, Math.ceil(r / a))
      );
      d(l), f((t.length - l) * a);
    }
  }, [s, e, t]);
  return b(() => {
    i();
    const n = setInterval(i, 100);
    return () => clearInterval(n);
  }, [i]), /* @__PURE__ */ g("div", { className: "VirtualList", children: [
    /* @__PURE__ */ c("div", { className: "VirtualList__Container", ref: s, children: Array.isArray(t) ? t.slice(0, e) : null }),
    /* @__PURE__ */ c(
      "div",
      {
        className: "VirtualList__Padding",
        style: { paddingBottom: `${m}px` }
      }
    )
  ] });
}
export {
  y as VirtualList
};
