import '../assets/NumberInput.css';var N = Object.defineProperty;
var w = (c, d, e) => d in c ? N(c, d, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[d] = e;
var l = (c, d, e) => w(c, typeof d != "symbol" ? d + "" : d, e);
import { jsxs as _, jsx as V } from "react/jsx-runtime";
import { Component as E, createRef as I } from "react";
import { KEY as D, isEscape as M } from "../common/keys.js";
import { clamp as g, round as T } from "../common/math.js";
import { classes as F } from "../common/react.js";
import { AnimatedNumber as R } from "./AnimatedNumber.js";
import { Box as Y } from "./Box.js";
const B = "_numberInput_4xyrw_20", K = "_fluid_4xyrw_36", L = "_content_4xyrw_40", z = "_barContainer_4xyrw_44", j = "_bar_4xyrw_44", k = "_inner_4xyrw_61", p = {
  numberInput: B,
  fluid: K,
  content: L,
  barContainer: z,
  bar: j,
  inner: k
};
class J extends E {
  constructor(e) {
    super(e);
    // Ref to the input field to set focus & highlight
    l(this, "inputRef", I());
    // After this time has elapsed we are in drag mode so no editing when dragging ends
    l(this, "dragTimeout");
    // Call onDrag at this interval
    l(this, "dragInterval");
    // default values for the number input state
    l(this, "state", {
      editing: !1,
      dragging: !1,
      currentValue: 0,
      previousValue: 0,
      origin: 0
    });
    l(this, "handleDragStart", (e) => {
      const { value: o, disabled: a } = this.props, { editing: s } = this.state;
      if (a || s)
        return;
      document.body.style["pointer-events"] = "none";
      const r = parseFloat(o.toString());
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
        const { dragging: u, currentValue: i, previousValue: t } = this.state, { onDrag: n } = this.props;
        u && i !== t && (this.setState({
          previousValue: i
        }), n == null || n(i));
      }, 400), document.addEventListener("mousemove", this.handleDragMove), document.addEventListener("mouseup", this.handleDragEnd);
    });
    l(this, "handleDragMove", (e) => {
      const { minValue: o, maxValue: a, step: s, stepPixelSize: r, disabled: u } = this.props;
      u || this.setState((i) => {
        const t = { ...i }, n = t.origin - e.screenY;
        if (i.dragging) {
          const f = r || 1, m = g(
            t.currentValue + n * s / f,
            o - s,
            a + s
          );
          Math.abs(m - t.currentValue) >= s ? (t.currentValue = g(
            T(m / s, 0) * s,
            o,
            a
          ), t.origin = e.screenY) : Math.abs(n) > f && (t.origin = e.screenY);
        } else Math.abs(n) > 4 && (t.dragging = !0);
        return t;
      });
    });
    l(this, "handleDragEnd", (e) => {
      const { dragging: o, currentValue: a } = this.state, { onDrag: s, onChange: r, disabled: u } = this.props;
      if (!u) {
        if (document.body.style["pointer-events"] = "auto", clearInterval(this.dragInterval), clearTimeout(this.dragTimeout), this.setState({
          dragging: !1,
          editing: !o,
          previousValue: a
        }), o)
          r == null || r(a), s == null || s(a);
        else if (this.inputRef) {
          const i = this.inputRef.current;
          i && (i.value = `${a}`, setTimeout(() => {
            i.focus(), i.select();
          }, 10));
        }
        document.removeEventListener("mousemove", this.handleDragMove), document.removeEventListener("mouseup", this.handleDragEnd);
      }
    });
    l(this, "handleBlur", (e) => {
      const { editing: o, previousValue: a } = this.state, { minValue: s, maxValue: r, onChange: u, onDrag: i, disabled: t } = this.props;
      if (t || !o)
        return;
      const n = g(
        parseFloat(e.target.value),
        s,
        r
      );
      if (isNaN(n)) {
        this.setState({
          editing: !1
        });
        return;
      }
      this.setState({
        editing: !1,
        currentValue: n,
        previousValue: n
      }), a !== n && (u == null || u(n), i == null || i(n));
    });
    l(this, "handleKeyDown", (e) => {
      const { minValue: o, maxValue: a, onChange: s, onDrag: r, disabled: u } = this.props;
      if (u)
        return;
      const { previousValue: i } = this.state;
      if (e.key === D.Enter) {
        const t = g(
          parseFloat(e.currentTarget.value),
          o,
          a
        );
        if (isNaN(t)) {
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
    const e = parseFloat(this.props.value.toString());
    this.setState({
      currentValue: e,
      previousValue: e
    });
  }
  render() {
    const { dragging: e, editing: o, currentValue: a } = this.state, {
      className: s,
      fluid: r,
      animated: u,
      unit: i,
      value: t,
      minValue: n,
      maxValue: f,
      height: m,
      width: S,
      lineHeight: b,
      fontSize: y,
      format: v
    } = this.props;
    let h = parseFloat(t.toString());
    e && (h = a);
    const x = /* @__PURE__ */ _("div", { className: p.content, children: [
      u && !e ? /* @__PURE__ */ V(R, { value: h, format: v }) : v ? v(h) : h,
      i ? " " + i : ""
    ] });
    return /* @__PURE__ */ _(
      Y,
      {
        className: F([
          p.numberInput,
          r && p.fluid,
          s
        ]),
        minWidth: S,
        minHeight: m,
        lineHeight: b,
        fontSize: y,
        onMouseDown: this.handleDragStart,
        children: [
          /* @__PURE__ */ V("div", { className: p.barContainer, children: /* @__PURE__ */ V(
            "div",
            {
              className: p.bar,
              style: {
                height: g(
                  (h - n) / (f - n) * 100,
                  0,
                  100
                ) + "%"
              }
            }
          ) }),
          x,
          /* @__PURE__ */ V(
            "input",
            {
              ref: this.inputRef,
              className: p.inner,
              style: {
                display: o ? "inline" : "none",
                height: m,
                lineHeight: b,
                fontSize: y
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
  J as NumberInput
};
