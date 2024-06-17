import '../assets/Tooltip.css';var s = Object.defineProperty;
var p = (o, e, t) => e in o ? s(o, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[e] = t;
var r = (o, e, t) => (p(o, typeof e != "symbol" ? e + "" : e, t), t);
import { jsx as l } from "react/jsx-runtime";
import { Component as c } from "react";
import { findDOMNode as m, render as a } from "react-dom";
import { c as u } from "../popper-Dm3m9eeZ.js";
const h = "_tooltip_1pib4_13", f = {
  tooltip: h
}, i = {
  modifiers: [
    {
      name: "eventListeners",
      enabled: !1
    }
  ]
}, v = {
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  x: 0,
  y: 0,
  toJSON: () => null
}, n = class n extends c {
  getDOMNode() {
    return m(this);
  }
  componentDidMount() {
    const e = this.getDOMNode();
    e && (e.addEventListener("mouseenter", () => {
      let t = n.renderedTooltip;
      t === void 0 && (t = document.createElement("div"), t.className = f.tooltip, document.body.appendChild(t), n.renderedTooltip = t), n.currentHoveredElement = e, t.style.opacity = "1", this.renderPopperContent();
    }), e.addEventListener("mouseleave", () => {
      this.fadeOut();
    }));
  }
  fadeOut() {
    n.currentHoveredElement === this.getDOMNode() && (n.currentHoveredElement = void 0, n.renderedTooltip.style.opacity = "0");
  }
  renderPopperContent() {
    const e = n.renderedTooltip;
    e && a(/* @__PURE__ */ l("span", { children: this.props.content }), e, () => {
      let t = n.singletonPopper;
      t === void 0 ? (t = u(
        n.virtualElement,
        e,
        {
          ...i,
          placement: this.props.position || "auto"
        }
      ), n.singletonPopper = t) : (t.setOptions({
        ...i,
        placement: this.props.position || "auto"
      }), t.update());
    });
  }
  componentDidUpdate() {
    n.currentHoveredElement === this.getDOMNode() && this.renderPopperContent();
  }
  componentWillUnmount() {
    this.fadeOut();
  }
  render() {
    return this.props.children;
  }
};
// Mounting poppers is really laggy because popper.js is very slow.
// Thus, instead of using the Popper component, Tooltip creates ONE popper
// and stores every tooltip inside that.
// This means you can never have two tooltips at once, for instance.
r(n, "renderedTooltip"), r(n, "singletonPopper"), r(n, "currentHoveredElement"), r(n, "virtualElement", {
  getBoundingClientRect: () => {
    var e;
    return ((e = n.currentHoveredElement) == null ? void 0 : e.getBoundingClientRect()) ?? v;
  }
});
let d = n;
export {
  d as Tooltip
};
