var n = Object.defineProperty;
var s = (i, t, e) => t in i ? n(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var r = (i, t, e) => (s(i, typeof t != "symbol" ? t + "" : t, e), e);
import { jsx as c } from "react/jsx-runtime";
import { Component as d, createRef as o } from "react";
class a extends d {
  constructor(e) {
    super(e);
    r(this, "ref", o());
    this.handleOutsideClick = this.handleOutsideClick.bind(this), document.addEventListener("click", this.handleOutsideClick);
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  }
  handleOutsideClick(e) {
    e.target instanceof Node && this.ref.current && !this.ref.current.contains(e.target) && this.props.onOutsideClick();
  }
  render() {
    return /* @__PURE__ */ c("div", { ref: this.ref, children: this.props.children });
  }
}
export {
  a as TrackOutsideClicks
};
