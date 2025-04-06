import { jsx as h, jsxs as g } from "react/jsx-runtime";
import { useRef as y, useState as B, useEffect as R } from "react";
import { zip as w } from "../common/collections.js";
import { Box as $ } from "./Box.js";
function C(n, l, o, i) {
  if (n.length === 0)
    return [];
  const f = w(...n), c = f.map((r) => Math.min(...r)), t = f.map((r) => Math.max(...r));
  return o !== void 0 && (c[0] = o[0], t[0] = o[1]), i !== void 0 && (c[1] = i[0], t[1] = i[1]), n.map(
    (r) => w(r, c, t, l).map(
      ([s, p, e, u]) => (s - p) / (e - p) * u
    )
  );
}
function k(n) {
  let l = "";
  for (let o = 0; o < n.length; o++) {
    const i = n[o];
    l += `${i[0]},${i[1]} `;
  }
  return l;
}
const x = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  overflow: "hidden"
};
function z(n) {
  const {
    data: l = [],
    rangeX: o,
    rangeY: i,
    fillColor: f = "none",
    strokeColor: c = "#ffffff",
    strokeWidth: t = 2,
    ...v
  } = n, r = y(null), [s, p] = B([600, 200]), e = C(l, s, o, i);
  if (e.length > 0) {
    const m = e[0], a = e[e.length - 1];
    e.push([s[0] + t, a[1]]), e.push([s[0] + t, -t]), e.push([-t, -t]), e.push([-t, m[1]]);
  }
  const u = k(e);
  function d() {
    const m = r.current;
    if (!m)
      return;
    const a = m.getBoundingClientRect();
    p([a.width, a.height]);
  }
  return R(() => (window.addEventListener("resize", d), d(), () => {
    window.removeEventListener("resize", d);
  }), []), /* @__PURE__ */ h($, { position: "relative", ...v, children: /* @__PURE__ */ h("div", { ref: r, style: x, children: /* @__PURE__ */ g(
    "svg",
    {
      viewBox: `0 0 ${s[0]} ${s[1]}`,
      preserveAspectRatio: "none",
      style: x,
      children: [
        /* @__PURE__ */ h("title", { children: "chart" }),
        /* @__PURE__ */ h(
          "polyline",
          {
            transform: `scale(1, -1) translate(0, -${s[1]})`,
            fill: f,
            stroke: c,
            strokeWidth: t,
            points: u
          }
        )
      ]
    }
  ) }) });
}
z.Line = z;
export {
  z as Chart
};
