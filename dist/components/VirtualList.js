import { jsxs as g, jsx as c } from "react/jsx-runtime";
import { useRef as h, useState as o, useCallback as v, useEffect as b } from "react";
const y = (d) => {
  const { children: t } = d, n = h(null), [e, u] = o(1), [m, f] = o(0), i = v(() => {
    const { current: s } = n;
    if (!t || !Array.isArray(t) || !s || e >= t.length)
      return;
    const r = document.body.offsetHeight - s.getBoundingClientRect().bottom, a = Math.ceil(s.offsetHeight / e);
    if (r > 0) {
      const l = Math.min(
        t.length,
        e + Math.max(1, Math.ceil(r / a))
      );
      u(l), f((t.length - l) * a);
    }
  }, [n, e, t]);
  return b(() => {
    i();
    const s = setInterval(i, 100);
    return () => clearInterval(s);
  }, [i]), /* @__PURE__ */ g("div", { className: "VirtualList", children: [
    /* @__PURE__ */ c("div", { className: "VirtualList__Container", ref: n, children: Array.isArray(t) ? t.slice(0, e) : null }),
    /* @__PURE__ */ c(
      "div",
      {
        className: "VirtualList__Padding",
        style: { paddingBottom: `${m}px` }
      }
    )
  ] });
};
export {
  y as VirtualList
};
