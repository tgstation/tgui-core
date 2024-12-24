import { jsx as l } from "react/jsx-runtime";
import { useRef as f, useEffect as p } from "react";
import { debounce as m } from "../common/timer.js";
import { computeBoxProps as w } from "../common/ui.js";
const o = [];
function a(t) {
  const e = o.length;
  o.push(null);
  const n = t || `byondui_${e}`;
  return {
    render: (i) => {
      o[e] = n, Byond.winset(n, i);
    },
    unmount: () => {
      o[e] = null, Byond.winset(n, {
        parent: ""
      });
    }
  };
}
window.addEventListener("beforeunload", () => {
  for (let t = 0; t < o.length; t++) {
    const e = o[t];
    typeof e == "string" && (o[t] = null, Byond.winset(e, {
      parent: ""
    }));
  }
});
function x(t) {
  const e = window.devicePixelRatio ?? 1, n = t.getBoundingClientRect();
  return {
    pos: [n.left * e, n.top * e],
    size: [
      (n.right - n.left) * e,
      (n.bottom - n.top) * e
    ]
  };
}
function h(t) {
  const { params: e, ...n } = t, i = f(null), d = f(a(e == null ? void 0 : e.id));
  function s() {
    const c = i.current;
    if (!c) return;
    const r = x(c);
    d.current.render({
      parent: Byond.windowId,
      ...e,
      pos: `${r.pos[0]},${r.pos[1]}`,
      size: `${r.size[0]}x${r.size[1]}`
    });
  }
  const u = m(() => {
    s();
  }, 100);
  return p(() => (window.addEventListener("resize", u), s(), () => {
    window.removeEventListener("resize", u), d.current.unmount();
  }), []), /* @__PURE__ */ l("div", { ref: i, ...w(n), children: /* @__PURE__ */ l("div", { style: { minHeight: "22px" } }) });
}
export {
  h as ByondUi
};
