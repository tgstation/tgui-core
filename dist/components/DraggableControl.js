import { jsxs as N, Fragment as T, jsx as F } from "react/jsx-runtime";
import { clamp as m } from "../common/math.js";
import { Component as b, createRef as I } from "react";
import { AnimatedNumber as M } from "./AnimatedNumber.js";
const R = 400, S = (v, u) => v.screenX * u[0] + v.screenY * u[1];
class C extends b {
  constructor(u) {
    super(u), this.inputRef = I(), this.state = {
      value: u.value,
      dragging: !1,
      editing: !1,
      internalValue: null,
      origin: null,
      suppressingFlicker: !1
    }, this.flickerTimer = null, this.suppressFlicker = () => {
      const { suppressFlicker: e } = this.props;
      e > 0 && (this.setState({
        suppressingFlicker: !0
      }), clearTimeout(this.flickerTimer), this.flickerTimer = setTimeout(() => {
        this.setState({
          suppressingFlicker: !1
        });
      }, e));
    }, this.handleDragStart = (e) => {
      const { value: i, dragMatrix: l } = this.props, { editing: s } = this.state;
      s || (document.body.style["pointer-events"] = "none", this.ref = e.target, this.setState({
        dragging: !1,
        origin: S(e, l),
        value: i,
        internalValue: i
      }), this.timer = setTimeout(() => {
        this.setState({
          dragging: !0
        });
      }, 250), this.dragInterval = setInterval(() => {
        const { dragging: o, value: g } = this.state, { onDrag: a } = this.props;
        o && a && a(e, g);
      }, this.props.updateRate || R), document.addEventListener("mousemove", this.handleDragMove), document.addEventListener("mouseup", this.handleDragEnd));
    }, this.handleDragMove = (e) => {
      const { minValue: i, maxValue: l, step: s, stepPixelSize: o, dragMatrix: g } = this.props;
      this.setState((a) => {
        const n = { ...a }, p = S(e, g) - n.origin;
        if (a.dragging) {
          const h = Number.isFinite(i) ? i % s : 0;
          n.internalValue = m(
            n.internalValue + p * s / o,
            i - s,
            l + s
          ), n.value = m(
            n.internalValue - n.internalValue % s + h,
            i,
            l
          ), n.origin = S(e, g);
        } else
          Math.abs(p) > 4 && (n.dragging = !0);
        return n;
      });
    }, this.handleDragEnd = (e) => {
      const { onChange: i, onDrag: l } = this.props, { dragging: s, value: o, internalValue: g } = this.state;
      if (document.body.style["pointer-events"] = "auto", clearTimeout(this.timer), clearInterval(this.dragInterval), this.setState({
        dragging: !1,
        editing: !s,
        origin: null
      }), document.removeEventListener("mousemove", this.handleDragMove), document.removeEventListener("mouseup", this.handleDragEnd), s)
        this.suppressFlicker(), i && i(e, o), l && l(e, o);
      else if (this.inputRef) {
        const a = this.inputRef.current;
        a.value = g;
        try {
          a.focus(), a.select();
        } catch {
        }
      }
    };
  }
  render() {
    const {
      dragging: u,
      editing: e,
      value: i,
      suppressingFlicker: l
    } = this.state, {
      animated: s,
      value: o,
      unit: g,
      minValue: a,
      maxValue: n,
      unclamped: p,
      format: h,
      onChange: f,
      onDrag: c,
      children: D,
      // Input props
      height: k,
      lineHeight: V,
      fontSize: y
    } = this.props;
    let d = o;
    (u || l) && (d = i);
    const E = /* @__PURE__ */ N(T, { children: [
      s && !u && !l ? /* @__PURE__ */ F(M, { value: d, format: h }) : h ? h(d) : d,
      g ? " " + g : ""
    ] }), x = /* @__PURE__ */ F(
      "input",
      {
        ref: this.inputRef,
        className: "NumberInput__input",
        style: {
          display: e ? void 0 : "none",
          height: k,
          lineHeight: V,
          fontsize: y
        },
        onBlur: (r) => {
          if (!e)
            return;
          let t;
          if (p ? t = parseFloat(r.target.value) : t = m(parseFloat(r.target.value), a, n), Number.isNaN(t)) {
            this.setState({
              editing: !1
            });
            return;
          }
          this.setState({
            editing: !1,
            value: t
          }), this.suppressFlicker(), f && f(r, t), c && c(r, t);
        },
        onKeyDown: (r) => {
          if (r.keyCode === 13) {
            let t;
            if (p ? t = parseFloat(r.target.value) : t = m(parseFloat(r.target.value), a, n), Number.isNaN(t)) {
              this.setState({
                editing: !1
              });
              return;
            }
            this.setState({
              editing: !1,
              value: t
            }), this.suppressFlicker(), f && f(r, t), c && c(r, t);
            return;
          }
          if (r.keyCode === 27) {
            this.setState({
              editing: !1
            });
            return;
          }
        }
      }
    );
    return D({
      dragging: u,
      editing: e,
      value: o,
      displayValue: d,
      displayElement: E,
      inputElement: x,
      handleDragStart: this.handleDragStart
    });
  }
}
C.defaultProps = {
  minValue: -1 / 0,
  maxValue: 1 / 0,
  step: 1,
  stepPixelSize: 1,
  suppressFlicker: 50,
  dragMatrix: [1, 0]
};
export {
  C as DraggableControl
};
