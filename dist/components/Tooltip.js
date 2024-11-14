var s = Object.defineProperty;
var p = (r, e, n) => e in r ? s(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[e] = n;
var o = (r, e, n) => p(r, typeof e != "symbol" ? e + "" : e, n);
import { jsx as l } from "react/jsx-runtime";
import { Component as c } from "react";
import { findDOMNode as m, render as a } from "react-dom";
import { c as u } from "../popper-CiqSDJTE.js";
const i = {
  modifiers: [
    {
      name: "eventListeners",
      enabled: !1
    }
  ]
}, h = {
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  x: 0,
  y: 0,
  toJSON: () => null
}, t = class t extends c {
  getDOMNode() {
    return m(this);
  }
  componentDidMount() {
    const e = this.getDOMNode();
    e && (e.addEventListener("mouseenter", () => {
      let n = t.renderedTooltip;
      n === void 0 && (n = document.createElement("div"), n.className = "Tooltip", document.body.appendChild(n), t.renderedTooltip = n), t.currentHoveredElement = e, n.style.opacity = "1", this.renderPopperContent();
    }), e.addEventListener("mouseleave", () => {
      this.fadeOut();
    }));
  }
  fadeOut() {
    t.currentHoveredElement === this.getDOMNode() && (t.currentHoveredElement = void 0, t.renderedTooltip.style.opacity = "0");
  }
  renderPopperContent() {
    const e = t.renderedTooltip;
    e && a(/* @__PURE__ */ l("span", { children: this.props.content }), e, () => {
      let n = t.singletonPopper;
      n === void 0 ? (n = u(
        t.virtualElement,
        e,
        {
          ...i,
          placement: this.props.position || "auto"
        }
      ), t.singletonPopper = n) : (n.setOptions({
        ...i,
        placement: this.props.position || "auto"
      }), n.update());
    });
  }
  componentDidUpdate() {
    t.currentHoveredElement === this.getDOMNode() && this.renderPopperContent();
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
o(t, "renderedTooltip"), o(t, "singletonPopper"), o(t, "currentHoveredElement"), o(t, "virtualElement", {
  getBoundingClientRect: () => {
    var e;
    return ((e = t.currentHoveredElement) == null ? void 0 : e.getBoundingClientRect()) ?? h;
  }
});
let d = t;
export {
  d as Tooltip
};
