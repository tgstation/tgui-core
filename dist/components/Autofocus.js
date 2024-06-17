import { jsx as n } from "react/jsx-runtime";
import { useRef as c, useEffect as f } from "react";
function m(r) {
  const { children: o } = r, t = c(null);
  return f(() => {
    const u = setTimeout(() => {
      var e;
      (e = t.current) == null || e.focus();
    }, 1);
    return () => {
      clearTimeout(u);
    };
  }, []), /* @__PURE__ */ n("div", { ref: t, tabIndex: -1, children: o });
}
export {
  m as Autofocus
};
