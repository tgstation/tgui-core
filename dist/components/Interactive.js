var h = Object.defineProperty;
var u = (t, n, e) => n in t ? h(t, n, { enumerable: !0, configurable: !0, writable: !0, value: e }) : t[n] = e;
var s = (t, n, e) => u(t, typeof n != "symbol" ? n + "" : n, e);
import { jsx as p } from "react/jsx-runtime";
import { Component as f, createRef as g } from "react";
import { clamp as l } from "../common/math.js";
const i = (t) => {
  var n;
  return ((n = t == null ? void 0 : t.ownerDocument) == null ? void 0 : n.defaultView) || self;
}, a = (t, n) => {
  const e = t.getBoundingClientRect();
  return {
    left: l(
      (n.pageX - (e.left + i(t).pageXOffset)) / e.width,
      0,
      1
    ),
    top: l(
      (n.pageY - (e.top + i(t).pageYOffset)) / e.height,
      0,
      1
    )
  };
};
class w extends f {
  constructor(e) {
    super(e);
    s(this, "containerRef");
    s(this, "handleMoveStart", (e) => {
      const o = this.containerRef.current;
      o && (e.preventDefault(), o.focus(), this.props.onMove(a(o, e)), this.toggleDocumentEvents(!0));
    });
    s(this, "handleMove", (e) => {
      e.preventDefault(), e.buttons > 0 && this.containerRef.current ? this.props.onMove(a(this.containerRef.current, e)) : this.toggleDocumentEvents(!1);
    });
    s(this, "handleMoveEnd", () => {
      this.toggleDocumentEvents(!1);
    });
    s(this, "handleKeyDown", (e) => {
      const o = e.which || e.keyCode;
      o < 37 || o > 40 || (e.preventDefault(), this.props.onKey({
        left: o === 39 ? 0.05 : o === 37 ? -0.05 : 0,
        top: o === 40 ? 0.05 : o === 38 ? -0.05 : 0
      }));
    });
    s(this, "toggleDocumentEvents", (e) => {
      const o = this.containerRef.current, r = i(o), c = e ? r.addEventListener.bind(r) : r.removeEventListener.bind(r);
      c("mousemove", this.handleMove), c("mouseup", this.handleMoveEnd);
    });
    this.containerRef = g();
  }
  componentDidMount() {
    this.toggleDocumentEvents(!0);
  }
  componentWillUnmount() {
    this.toggleDocumentEvents(!1);
  }
  render() {
    return /* @__PURE__ */ p(
      "div",
      {
        ...this.props,
        style: this.props.style,
        ref: this.containerRef,
        onMouseDown: this.handleMoveStart,
        className: "react-colorful__interactive",
        onKeyDown: this.handleKeyDown,
        children: this.props.children
      }
    );
  }
}
export {
  w as Interactive
};
