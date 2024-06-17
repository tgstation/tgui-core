import { jsxs as l, jsx as n } from "react/jsx-runtime";
import { Component as v } from "react";
import { computeBoxProps as Z } from "./Box.js";
import { Button as c } from "./Button.js";
import { ProgressBar as g } from "./ProgressBar.js";
import { Stack as d } from "./Stack.js";
const p = 0.5, f = 1.5, M = 0.1;
class k extends v {
  constructor(e) {
    super(e), this.state = {
      mouseDown: !1,
      left: 0,
      top: 0,
      lastLeft: 0,
      lastTop: 0,
      zoom: 1
    }, this.handleMouseDown = this.handleMouseDown.bind(this), this.handleMouseMove = this.handleMouseMove.bind(this), this.handleZoomIncrease = this.handleZoomIncrease.bind(this), this.handleZoomDecrease = this.handleZoomDecrease.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.doOffsetMouse = this.doOffsetMouse.bind(this);
  }
  componentDidMount() {
    window.addEventListener("mouseup", this.onMouseUp), window.addEventListener("mousedown", this.doOffsetMouse), window.addEventListener("mousemove", this.doOffsetMouse), window.addEventListener("mouseup", this.doOffsetMouse);
  }
  componentWillUnmount() {
    window.removeEventListener("mouseup", this.onMouseUp), window.removeEventListener("mousedown", this.doOffsetMouse), window.removeEventListener("mousemove", this.doOffsetMouse), window.removeEventListener("mouseup", this.doOffsetMouse);
  }
  doOffsetMouse(e) {
    const { zoom: o } = this.state;
    e.screenZoomX = e.screenX * Math.pow(o, -1), e.screenZoomY = e.screenY * Math.pow(o, -1);
  }
  handleMouseDown(e) {
    this.setState((o) => ({
      mouseDown: !0,
      lastLeft: e.clientX - o.left,
      lastTop: e.clientY - o.top
    }));
  }
  onMouseUp() {
    this.setState({
      mouseDown: !1
    });
  }
  handleZoomIncrease(e) {
    const { onZoomChange: o } = this.props, { zoom: s } = this.state, t = Math.min(s + M, f);
    this.setState({
      zoom: t
    }), o && o(t);
  }
  handleZoomDecrease(e) {
    const { onZoomChange: o } = this.props, { zoom: s } = this.state, t = Math.max(s - M, p);
    this.setState({
      zoom: t
    }), o && o(t);
  }
  handleMouseMove(e) {
    const { onBackgroundMoved: o, initialLeft: s = 0, initialTop: t = 0 } = this.props;
    if (this.state.mouseDown) {
      let a, i;
      this.setState((h) => (a = e.clientX - h.lastLeft, i = e.clientY - h.lastTop, {
        left: a,
        top: i
      })), o && o(a + s, i + t);
    }
  }
  render() {
    const {
      children: e,
      backgroundImage: o,
      imageWidth: s,
      initialLeft: t = 0,
      initialTop: a = 0,
      ...i
    } = this.props, { left: h, top: w, zoom: r } = this.state, m = t + h, u = a + w;
    return /* @__PURE__ */ l(
      "div",
      {
        ref: this.ref,
        ...Z({
          ...i,
          style: {
            ...i.style,
            overflow: "hidden",
            position: "relative"
          }
        }),
        children: [
          /* @__PURE__ */ n(
            "div",
            {
              onMouseDown: this.handleMouseDown,
              onMouseMove: this.handleMouseMove,
              style: {
                position: "fixed",
                height: "100%",
                width: "100%",
                backgroundImage: `url("${o}")`,
                backgroundPosition: `${m}px ${u}px`,
                backgroundRepeat: "repeat",
                backgroundSize: `${r * s}px`
              }
            }
          ),
          /* @__PURE__ */ n(
            "div",
            {
              onMouseDown: this.handleMouseDown,
              onMouseMove: this.handleMouseMove,
              style: {
                position: "fixed",
                transform: `translate(${m}px, ${u}px) scale(${r})`,
                transformOrigin: "top left",
                height: "100%",
                width: "100%"
              },
              children: e
            }
          ),
          /* @__PURE__ */ l(d, { position: "absolute", width: "100%", children: [
            /* @__PURE__ */ n(d.Item, { children: /* @__PURE__ */ n(c, { icon: "minus", onClick: this.handleZoomDecrease }) }),
            /* @__PURE__ */ n(d.Item, { grow: 1, children: /* @__PURE__ */ l(
              g,
              {
                minValue: p,
                value: r,
                maxValue: f,
                children: [
                  r,
                  "x"
                ]
              }
            ) }),
            /* @__PURE__ */ n(d.Item, { children: /* @__PURE__ */ n(c, { icon: "plus", onClick: this.handleZoomIncrease }) })
          ] })
        ]
      }
    );
  }
}
export {
  k as InfinitePlane
};
