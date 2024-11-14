var w = Object.defineProperty;
var R = (t, o, e) => o in t ? w(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var p = (t, o, e) => R(t, typeof o != "symbol" ? o + "" : o, e);
import { jsx as c, jsxs as g } from "react/jsx-runtime";
import { Component as B, createRef as C } from "react";
import { zip as u } from "../common/collections.js";
import { Box as v } from "./Box.js";
function $(t, o, e, n) {
  if (t.length === 0)
    return [];
  const f = u(...t), h = f.map((r) => Math.min(...r)), a = f.map((r) => Math.max(...r));
  return e !== void 0 && (h[0] = e[0], a[0] = e[1]), n !== void 0 && (h[1] = n[0], a[1] = n[1]), t.map(
    (r) => u(r, h, a, o).map(
      ([l, i, d, m]) => (l - i) / (d - i) * m
    )
  );
}
function L(t) {
  let o = "";
  for (let e = 0; e < t.length; e++) {
    const n = t[e];
    o += `${n[0]},${n[1]} `;
  }
  return o;
}
class b extends B {
  constructor(e) {
    super(e);
    p(this, "ref");
    p(this, "state");
    p(this, "handleResize", () => {
      const e = this.ref.current;
      e && this.setState({
        viewBox: [e.offsetWidth, e.offsetHeight]
      });
    });
    this.ref = C(), this.state = {
      // Initial guess
      viewBox: [600, 200]
    }, this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize), this.handleResize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  render() {
    const {
      data: e = [],
      rangeX: n,
      rangeY: f,
      fillColor: h = "none",
      strokeColor: a = "#ffffff",
      strokeWidth: s = 2,
      ...r
    } = this.props, { viewBox: l } = this.state, i = $(e, l, n, f);
    if (i.length > 0) {
      const z = i[0], x = i[i.length - 1];
      i.push([l[0] + s, x[1]]), i.push([l[0] + s, -s]), i.push([-s, -s]), i.push([-s, z[1]]);
    }
    const d = L(i), m = { ...r, className: "", ref: this.ref };
    return /* @__PURE__ */ c(v, { position: "relative", ...r, children: /* @__PURE__ */ c(v, { ...m, children: /* @__PURE__ */ g(
      "svg",
      {
        viewBox: `0 0 ${l[0]} ${l[1]}`,
        preserveAspectRatio: "none",
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden"
        },
        children: [
          /* @__PURE__ */ c("title", { children: "chart" }),
          /* @__PURE__ */ c(
            "polyline",
            {
              transform: `scale(1, -1) translate(0, -${l[1]})`,
              fill: h,
              stroke: a,
              strokeWidth: s,
              points: d
            }
          )
        ]
      }
    ) }) });
  }
}
const j = {
  Line: b
};
export {
  j as Chart
};
