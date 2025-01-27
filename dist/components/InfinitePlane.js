var x = Object.defineProperty;
var O = (a, s, o) => s in a ? x(a, s, { enumerable: !0, configurable: !0, writable: !0, value: o }) : a[s] = o;
var i = (a, s, o) => O(a, typeof s != "symbol" ? s + "" : s, o);
import { jsxs as c, jsx as r } from "react/jsx-runtime";
import { Component as Z } from "react";
import { computeBoxProps as D } from "../common/ui.js";
import { Button as w } from "./Button.js";
import { ProgressBar as E } from "./ProgressBar.js";
import { Stack as h } from "./Stack.js";
const M = 0.5, v = 1.5, g = 0.1;
class b extends Z {
  constructor(o) {
    super(o);
    // This is really, REALLY cursed and basically overrides a built-in browser event via propagation rules
    i(this, "doOffsetMouse", (o) => {
      const { zoom: e } = this.state;
      o.screenZoomX = o.screenX * e ** -1, o.screenZoomY = o.screenY * e ** -1;
    });
    i(this, "handleMouseDown", (o) => {
      this.setState((e) => ({
        mouseDown: !0,
        lastLeft: o.clientX - e.left,
        lastTop: o.clientY - e.top
      }));
    });
    i(this, "onMouseUp", () => {
      this.setState({
        mouseDown: !1
      });
    });
    i(this, "handleZoomIncrease", (o) => {
      const { onZoomChange: e } = this.props, { zoom: n } = this.state, t = Math.min(n + g, v);
      this.setState({
        zoom: t
      }), e && e(t);
    });
    i(this, "handleZoomDecrease", (o) => {
      const { onZoomChange: e } = this.props, { zoom: n } = this.state, t = Math.max(n - g, M);
      this.setState({
        zoom: t
      }), e && e(t);
    });
    i(this, "handleMouseMove", (o) => {
      const { onBackgroundMoved: e, initialLeft: n = 0, initialTop: t = 0 } = this.props;
      if (this.state.mouseDown) {
        let l, m;
        this.setState((d) => (l = o.clientX - d.lastLeft, m = o.clientY - d.lastTop, e && e(l + n, m + t), {
          left: l,
          top: m
        }));
      }
    });
    this.state = {
      mouseDown: !1,
      left: 0,
      top: 0,
      lastLeft: 0,
      lastTop: 0,
      zoom: 1
    };
  }
  componentDidMount() {
    window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("mousedown", this.doOffsetMouse), window.addEventListener("mousemove", this.doOffsetMouse), window.addEventListener("mouseup", this.doOffsetMouse);
  }
  componentWillUnmount() {
    window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousedown", this.doOffsetMouse), window.removeEventListener("mousemove", this.doOffsetMouse), window.removeEventListener("mouseup", this.doOffsetMouse);
  }
  render() {
    const {
      children: o,
      backgroundImage: e,
      imageWidth: n,
      initialLeft: t = 0,
      initialTop: l = 0,
      ...m
    } = this.props, { left: d, top: L, zoom: u } = this.state, p = t + d, f = l + L;
    return /* @__PURE__ */ c(
      "div",
      {
        ...D({
          ...m,
          style: {
            ...m.style,
            overflow: "hidden",
            position: "relative"
          }
        }),
        children: [
          /* @__PURE__ */ r(
            "div",
            {
              onMouseDown: this.handleMouseDown,
              onMouseMove: this.handleMouseMove,
              style: {
                position: "fixed",
                height: "100%",
                width: "100%",
                backgroundImage: `url("${e}")`,
                backgroundPosition: `${p}px ${f}px`,
                backgroundRepeat: "repeat",
                backgroundSize: `${u * n}px`
              }
            }
          ),
          /* @__PURE__ */ r(
            "div",
            {
              onMouseDown: this.handleMouseDown,
              onMouseMove: this.handleMouseMove,
              style: {
                position: "fixed",
                transform: `translate(${p}px, ${f}px) scale(${u})`,
                transformOrigin: "top left",
                height: "100%",
                width: "100%"
              },
              children: o
            }
          ),
          /* @__PURE__ */ c(h, { position: "absolute", width: "100%", children: [
            /* @__PURE__ */ r(h.Item, { children: /* @__PURE__ */ r(w, { icon: "minus", onClick: this.handleZoomDecrease }) }),
            /* @__PURE__ */ r(h.Item, { grow: 1, children: /* @__PURE__ */ c(
              E,
              {
                minValue: M,
                value: u,
                maxValue: v,
                children: [
                  u,
                  "x"
                ]
              }
            ) }),
            /* @__PURE__ */ r(h.Item, { children: /* @__PURE__ */ r(w, { icon: "plus", onClick: this.handleZoomIncrease }) })
          ] })
        ]
      }
    );
  }
}
export {
  b as InfinitePlane
};
