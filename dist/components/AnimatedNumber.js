var f = Object.defineProperty;
var p = (i, r, t) => r in i ? f(i, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : i[r] = t;
var s = (i, r, t) => (p(i, typeof r != "symbol" ? r + "" : r, t), t);
import { jsx as m } from "react/jsx-runtime";
import { toFixed as v, clamp as g } from "../common/math.js";
import { Component as d, createRef as T } from "react";
const o = (i) => typeof i == "number" && Number.isFinite(i) && !Number.isNaN(i), V = 1e3 / 60, a = 0.8333, l = 1e-3;
class S extends d {
  constructor(t) {
    super(t);
    /**
     * The inner `<span/>` being updated sixty times per second.
     */
    s(this, "ref", T());
    /**
     * The interval being used to update the inner span.
     */
    s(this, "interval");
    /**
     * The current value. This values approaches the target value.
     */
    s(this, "currentValue", 0);
    const { initial: e, value: n } = t;
    e !== void 0 && o(e) ? this.currentValue = e : o(n) && (this.currentValue = n);
  }
  componentDidMount() {
    this.currentValue !== this.props.value && this.startTicking();
  }
  componentWillUnmount() {
    this.stopTicking();
  }
  shouldComponentUpdate(t) {
    return t.value !== this.props.value && this.startTicking(), !1;
  }
  /**
   * Starts animating the inner span. If the inner span is already animating,
   * this is a no-op.
   */
  startTicking() {
    this.interval === void 0 && (this.interval = setInterval(() => this.tick(), V));
  }
  /**
   * Stops animating the inner span.
   */
  stopTicking() {
    this.interval !== void 0 && (clearInterval(this.interval), this.interval = void 0);
  }
  /**
   * Steps forward one frame.
   */
  tick() {
    const { currentValue: t } = this, { value: e } = this.props;
    o(e) ? this.currentValue = t * a + e * (1 - a) : this.stopTicking(), Math.abs(e - this.currentValue) < Math.max(l, l * e) && (this.currentValue = e, this.stopTicking()), this.ref.current && (this.ref.current.textContent = this.getText());
  }
  /**
   * Gets the inner text of the span.
   */
  getText() {
    const { props: t, currentValue: e } = this, { format: n, value: u } = t;
    if (!o(u))
      return String(u);
    if (n)
      return n(this.currentValue);
    const c = String(u).split(".")[1], h = c ? c.length : 0;
    return v(e, g(h, 0, 8));
  }
  render() {
    return /* @__PURE__ */ m("span", { ref: this.ref, children: this.getText() });
  }
}
export {
  S as AnimatedNumber
};
