var R = Object.defineProperty;
var g = (t, o, e) => o in t ? R(t, o, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[o] = e;
var a = (t, o, e) => (g(t, typeof o != "symbol" ? o + "" : o, e), e);
import { jsx as c } from "react/jsx-runtime";
import { map as p, zip as m } from "../common/collections.js";
import { Component as B, createRef as C } from "react";
import { Box as v } from "./Box.js";
const L = (t, o, e, r) => {
  if (t.length === 0)
    return [];
  const l = p(m(...t), (s) => Math.min(...s)), h = p(m(...t), (s) => Math.max(...s));
  return e !== void 0 && (l[0] = e[0], h[0] = e[1]), r !== void 0 && (l[1] = r[0], h[1] = r[1]), p(
    t,
    (s) => p(
      m(s, l, h, o),
      ([f, n, i, d]) => (f - n) / (i - n) * d
    )
  );
}, b = (t) => {
  let o = "";
  for (let e = 0; e < t.length; e++) {
    const r = t[e];
    o += r[0] + "," + r[1] + " ";
  }
  return o;
};
class k extends B {
  constructor(e) {
    super(e);
    a(this, "ref");
    a(this, "state");
    a(this, "handleResize", () => {
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
      rangeX: r,
      rangeY: l,
      fillColor: h = "none",
      strokeColor: u = "#ffffff",
      strokeWidth: s = 2,
      ...f
    } = this.props, { viewBox: n } = this.state, i = L(e, n, r, l);
    if (i.length > 0) {
      const x = i[0], w = i[i.length - 1];
      i.push([n[0] + s, w[1]]), i.push([n[0] + s, -s]), i.push([-s, -s]), i.push([-s, x[1]]);
    }
    const d = b(i), z = { ...f, className: "", ref: this.ref };
    return /* @__PURE__ */ c(v, { position: "relative", ...f, children: /* @__PURE__ */ c(v, { ...z, children: /* @__PURE__ */ c(
      "svg",
      {
        viewBox: `0 0 ${n[0]} ${n[1]}`,
        preserveAspectRatio: "none",
        style: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden"
        },
        children: /* @__PURE__ */ c(
          "polyline",
          {
            transform: `scale(1, -1) translate(0, -${n[1]})`,
            fill: h,
            stroke: u,
            strokeWidth: s,
            points: d
          }
        )
      }
    ) }) });
  }
}
const D = {
  Line: k
};
export {
  D as Chart
};
