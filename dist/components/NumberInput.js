var I = Object.defineProperty;
var E = (m, d, e) => d in m ? I(m, d, { enumerable: !0, configurable: !0, writable: !0, value: e }) : m[d] = e;
var o = (m, d, e) => E(m, typeof d != "symbol" ? d + "" : d, e);
import { jsxs as N, jsx as f } from "react/jsx-runtime";
import { Component as x, createRef as D } from "react";
import { KEY as _, isEscape as M } from "../common/keys.js";
import { clamp as h, round as T } from "../common/math.js";
import { classes as w } from "../common/react.js";
import { AnimatedNumber as F } from "./AnimatedNumber.js";
import { Box as R } from "./Box.js";
class H extends x {
  constructor() {
    super(...arguments);
    // Ref to the input field to set focus & highlight
    o(this, "inputRef", D());
    // After this time has elapsed we are in drag mode so no editing when dragging ends
    o(this, "dragTimeout");
    // Call onDrag at this interval
    o(this, "dragInterval");
    // default values for the number input state
    o(this, "state", {
      editing: !1,
      dragging: !1,
      currentValue: 0,
      previousValue: 0,
      origin: 0
    });
    o(this, "handleDragStart", (e) => {
      const { value: u, disabled: n } = this.props, { editing: s } = this.state;
      if (n || s)
        return;
      document.body.style["pointer-events"] = "none";
      const r = Number.parseFloat(u.toString());
      this.setState({
        dragging: !1,
        origin: e.screenY,
        currentValue: r,
        previousValue: r
      }), this.dragTimeout = setTimeout(() => {
        this.setState({
          dragging: !0
        });
      }, 250), this.dragInterval = setInterval(() => {
        const { dragging: l, currentValue: i, previousValue: t } = this.state, { onDrag: a } = this.props;
        l && i !== t && (this.setState({
          previousValue: i
        }), a == null || a(i));
      }, 400), document.addEventListener("mousemove", this.handleDragMove), document.addEventListener("mouseup", this.handleDragEnd);
    });
    o(this, "handleDragMove", (e) => {
      const { minValue: u, maxValue: n, step: s, stepPixelSize: r, disabled: l } = this.props;
      l || this.setState((i) => {
        const t = { ...i }, a = t.origin - e.screenY;
        if (i.dragging) {
          const g = r || 1, c = h(
            t.currentValue + a * s / g,
            u - s,
            n + s
          );
          Math.abs(c - t.currentValue) >= s ? (t.currentValue = h(
            T(c / s, 0) * s,
            u,
            n
          ), t.origin = e.screenY) : Math.abs(a) > g && (t.origin = e.screenY);
        } else Math.abs(a) > 4 && (t.dragging = !0);
        return t;
      });
    });
    o(this, "handleDragEnd", (e) => {
      const { dragging: u, currentValue: n } = this.state, { onDrag: s, onChange: r, disabled: l } = this.props;
      if (!l) {
        if (document.body.style["pointer-events"] = "auto", clearInterval(this.dragInterval), clearTimeout(this.dragTimeout), this.setState({
          dragging: !1,
          editing: !u,
          previousValue: n
        }), u)
          r == null || r(n), s == null || s(n);
        else if (this.inputRef) {
          const i = this.inputRef.current;
          i && (i.value = `${n}`, setTimeout(() => {
            i.focus(), i.select();
          }, 10));
        }
        document.removeEventListener("mousemove", this.handleDragMove), document.removeEventListener("mouseup", this.handleDragEnd);
      }
    });
    o(this, "handleBlur", (e) => {
      const { editing: u, previousValue: n } = this.state, { minValue: s, maxValue: r, onChange: l, onDrag: i, disabled: t } = this.props;
      if (t || !u)
        return;
      const a = h(
        Number.parseFloat(e.target.value),
        s,
        r
      );
      if (Number.isNaN(a)) {
        this.setState({
          editing: !1
        });
        return;
      }
      this.setState({
        editing: !1,
        currentValue: a,
        previousValue: a
      }), n !== a && (l == null || l(a), i == null || i(a));
    });
    o(this, "handleKeyDown", (e) => {
      const { minValue: u, maxValue: n, onChange: s, onDrag: r, disabled: l } = this.props;
      if (l)
        return;
      const { previousValue: i } = this.state;
      if (e.key === _.Enter) {
        const t = h(
          Number.parseFloat(e.currentTarget.value),
          u,
          n
        );
        if (Number.isNaN(t)) {
          this.setState({
            editing: !1
          });
          return;
        }
        this.setState({
          editing: !1,
          currentValue: t,
          previousValue: t
        }), i !== t && (s == null || s(t), r == null || r(t));
      } else M(e.key) && this.setState({
        editing: !1
      });
    });
  }
  componentDidMount() {
    const e = Number.parseFloat(this.props.value.toString());
    this.setState({
      currentValue: e,
      previousValue: e
    });
  }
  render() {
    const { dragging: e, editing: u, currentValue: n } = this.state, {
      className: s,
      fluid: r,
      animated: l,
      unit: i,
      value: t,
      minValue: a,
      maxValue: g,
      height: c,
      width: S,
      lineHeight: v,
      fontSize: b,
      format: V
    } = this.props;
    let p = Number.parseFloat(t.toString());
    e && (p = n);
    const y = /* @__PURE__ */ N("div", { className: "NumberInput__content", children: [
      l && !e ? /* @__PURE__ */ f(F, { value: p, format: V }) : V ? V(p) : p,
      i ? ` ${i}` : ""
    ] });
    return /* @__PURE__ */ N(
      R,
      {
        className: w([
          "NumberInput",
          r && "NumberInput--fluid",
          s
        ]),
        minWidth: S,
        minHeight: c,
        lineHeight: v,
        fontSize: b,
        onMouseDown: this.handleDragStart,
        children: [
          /* @__PURE__ */ f("div", { className: "NumberInput__barContainer", children: /* @__PURE__ */ f(
            "div",
            {
              className: "NumberInput__bar",
              style: {
                height: `${h(
                  (p - a) / (g - a) * 100,
                  0,
                  100
                )}%`
              }
            }
          ) }),
          y,
          /* @__PURE__ */ f(
            "input",
            {
              ref: this.inputRef,
              className: "NumberInput__input",
              style: {
                display: u ? "inline" : "none",
                height: c,
                lineHeight: v,
                fontSize: b
              },
              onBlur: this.handleBlur,
              onKeyDown: this.handleKeyDown
            }
          )
        ]
      }
    );
  }
}
export {
  H as NumberInput
};
