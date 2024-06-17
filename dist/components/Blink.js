var n = Object.defineProperty;
var a = (i, e, t) => e in i ? n(i, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[e] = t;
var s = (i, e, t) => (a(i, typeof e != "symbol" ? e + "" : e, t), t);
import { jsx as l } from "react/jsx-runtime";
import { Component as o } from "react";
const h = 1e3, m = 1e3;
class v extends o {
  constructor(t) {
    super(t);
    s(this, "interval");
    s(this, "timer");
    this.state = {
      hidden: !1
    };
  }
  createTimer() {
    const {
      interval: t = h,
      time: r = m
    } = this.props;
    clearInterval(this.interval), clearTimeout(this.timer), this.setState({
      hidden: !1
    }), this.interval = setInterval(() => {
      this.setState({
        hidden: !0
      }), this.timer = setTimeout(() => {
        this.setState({
          hidden: !1
        });
      }, r);
    }, t + r);
  }
  componentDidMount() {
    this.createTimer();
  }
  componentDidUpdate(t) {
    (t.interval !== this.props.interval || t.time !== this.props.time) && this.createTimer();
  }
  componentWillUnmount() {
    clearInterval(this.interval), clearTimeout(this.timer);
  }
  render() {
    return /* @__PURE__ */ l(
      "span",
      {
        style: {
          visibility: this.state.hidden ? "hidden" : "visible"
        },
        children: this.props.children
      }
    );
  }
}
export {
  v as Blink
};
