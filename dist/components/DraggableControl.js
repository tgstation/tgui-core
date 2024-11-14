import { jsxs as T, Fragment as I, jsx as F } from "react/jsx-runtime";
import { Component as x, createRef as y } from "react";
import { clamp as c } from "../common/math.js";
import { AnimatedNumber as M } from "./AnimatedNumber.js";
const R = 400;
function N(v, u) {
  return v.screenX * u[0] + v.screenY * u[1];
}
class C extends x {
  constructor(u) {
    super(u), this.inputRef = y(), this.state = {
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
        origin: N(e, l),
        value: i,
        internalValue: i
      }), this.timer = setTimeout(() => {
        this.setState({
          dragging: !0
        });
      }, 250), this.dragInterval = setInterval(() => {
        const { dragging: o, value: g } = this.state, { onDrag: r } = this.props;
        o && r && r(e, g);
      }, this.props.updateRate || R), document.addEventListener("mousemove", this.handleDragMove), document.addEventListener("mouseup", this.handleDragEnd));
    }, this.handleDragMove = (e) => {
      const { minValue: i, maxValue: l, step: s, stepPixelSize: o, dragMatrix: g } = this.props;
      this.setState((r) => {
        const a = { ...r }, p = N(e, g) - a.origin;
        if (r.dragging) {
          const h = Number.isFinite(i) ? i % s : 0;
          a.internalValue = c(
            a.internalValue + p * s / o,
            i - s,
            l + s
          ), a.value = c(
            a.internalValue - a.internalValue % s + h,
            i,
            l
          ), a.origin = N(e, g);
        } else Math.abs(p) > 4 && (a.dragging = !0);
        return a;
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
        const r = this.inputRef.current;
        r.value = g, setTimeout(() => {
          r.focus(), r.select();
        }, 10);
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
      minValue: r,
      maxValue: a,
      unclamped: p,
      format: h,
      onChange: m,
      onDrag: f,
      children: S,
      // Input props
      height: V,
      lineHeight: D,
      fontSize: b
    } = this.props;
    let d = o;
    (u || l) && (d = i);
    const k = /* @__PURE__ */ T(I, { children: [
      s && !u && !l ? /* @__PURE__ */ F(M, { value: d, format: h }) : h ? h(d) : d,
      g ? ` ${g}` : ""
    ] }), E = /* @__PURE__ */ F(
      "input",
      {
        ref: this.inputRef,
        className: "NumberInput__input",
        style: {
          display: e ? void 0 : "none",
          height: V,
          lineHeight: D,
          fontsize: b
        },
        onBlur: (n) => {
          if (!e)
            return;
          let t;
          if (p ? t = Number.parseFloat(n.target.value) : t = c(
            Number.parseFloat(n.target.value),
            r,
            a
          ), Number.isNaN(t)) {
            this.setState({
              editing: !1
            });
            return;
          }
          this.setState({
            editing: !1,
            value: t
          }), this.suppressFlicker(), m && m(n, t), f && f(n, t);
        },
        onKeyDown: (n) => {
          if (n.keyCode === 13) {
            let t;
            if (p ? t = Number.parseFloat(n.target.value) : t = c(
              Number.parseFloat(n.target.value),
              r,
              a
            ), Number.isNaN(t)) {
              this.setState({
                editing: !1
              });
              return;
            }
            this.setState({
              editing: !1,
              value: t
            }), this.suppressFlicker(), m && m(n, t), f && f(n, t);
            return;
          }
          if (n.keyCode === 27) {
            this.setState({
              editing: !1
            });
            return;
          }
        }
      }
    );
    return S({
      dragging: u,
      editing: e,
      value: o,
      displayValue: d,
      displayElement: k,
      inputElement: E,
      handleDragStart: this.handleDragStart
    });
  }
}
C.defaultProps = {
  minValue: Number.NEGATIVE_INFINITY,
  maxValue: Number.POSITIVE_INFINITY,
  step: 1,
  stepPixelSize: 1,
  suppressFlicker: 50,
  dragMatrix: [1, 0]
};
export {
  C as DraggableControl
};
