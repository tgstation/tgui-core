var f = Object.defineProperty;
var p = (r, i, t) => i in r ? f(r, i, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[i] = t;
var s = (r, i, t) => p(r, typeof i != "symbol" ? i + "" : i, t);
import { jsx as v } from "react/jsx-runtime";
import { Component as m, createRef as g } from "react";
import { isSafeNumber as o, toFixed as d, clamp as T } from "../common/math.js";
const V = 1e3 / 60, u = 0.8333, l = 1e-3;
class b extends m {
  constructor(t) {
    super(t);
    /**
     * The inner `<span/>` being updated sixty times per second.
     */
    s(this, "ref", g());
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
    o(e) ? this.currentValue = t * u + e * (1 - u) : this.stopTicking(), Math.abs(e - this.currentValue) < Math.max(l, l * e) && (this.currentValue = e, this.stopTicking()), this.ref.current && (this.ref.current.textContent = this.getText());
  }
  /**
   * Gets the inner text of the span.
   */
  getText() {
    const { props: t, currentValue: e } = this, { format: n, value: a } = t;
    if (!o(a))
      return String(a);
    if (n)
      return n(this.currentValue);
    const c = String(a).split(".")[1], h = c ? c.length : 0;
    return d(e, T(h, 0, 8));
  }
  render() {
    return /* @__PURE__ */ v("span", { ref: this.ref, children: this.getText() });
  }
}
export {
  b as AnimatedNumber
};
