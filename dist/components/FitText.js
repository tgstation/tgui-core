var d = Object.defineProperty;
var c = (i, t, e) => t in i ? d(i, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : i[t] = e;
var o = (i, t, e) => (c(i, typeof t != "symbol" ? t + "" : t, e), e);
import { jsx as a } from "react/jsx-runtime";
import { Component as l, createRef as m } from "react";
const z = 5;
class S extends l {
  constructor(e) {
    super(e);
    o(this, "ref", m());
    o(this, "state", {
      fontSize: 0
    });
    this.resize = this.resize.bind(this), window.addEventListener("resize", this.resize);
  }
  componentDidUpdate(e) {
    e.children !== this.props.children && this.resize();
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.resize);
  }
  resize() {
    const e = this.ref.current;
    if (!e)
      return;
    const f = this.props.maxWidth;
    let s = 0, r = this.props.maxFontSize;
    for (let p = 0; p < 10; p++) {
      const n = Math.round((s + r) / 2);
      e.style.fontSize = `${n}px`;
      const h = e.offsetWidth - f;
      if (h > 0)
        r = n;
      else if (h < (this.props.acceptableDifference ?? z))
        s = n;
      else
        break;
    }
    this.setState({
      fontSize: Math.round((s + r) / 2)
    });
  }
  componentDidMount() {
    this.resize();
  }
  render() {
    var e;
    return /* @__PURE__ */ a(
      "span",
      {
        ref: this.ref,
        style: {
          fontSize: `${this.state.fontSize}px`,
          ...typeof ((e = this.props.native) == null ? void 0 : e.style) == "object" ? this.props.native.style : {}
        },
        children: this.props.children
      }
    );
  }
}
export {
  S as FitText
};
