import { jsxs as E, jsx as f } from "react/jsx-runtime";
import { KEY_ENTER as I, KEY_ESCAPE as S } from "../common/keycodes.js";
import { clamp as m } from "../common/math.js";
import { classes as v } from "../common/react.js";
import { Component as F, createRef as N } from "react";
import { Box as C } from "./Box.js";
const g = 0, x = 1e4, M = (e, n, t, i) => {
  const s = n || g, o = t || t === 0 ? t : x;
  let r = i ? e.replace(/[^\-\d.]/g, "") : e.replace(/[^\-\d]/g, "");
  return i && (r = b(r, s), r = d(".", r)), n < 0 ? (r = _(r), r = d("-", r)) : r = r.replaceAll("-", ""), s <= 1 && o >= 0 ? V(r, s, o, i) : r;
}, V = (e, n, t, i) => {
  let s = i ? parseFloat(e) : parseInt(e, 10);
  if (!isNaN(s) && (e.slice(-1) !== "." || s < Math.floor(n))) {
    let o = m(s, n, t);
    if (s !== o)
      return String(o);
  }
  return e;
}, _ = (e) => {
  let n = e, t = e.indexOf("-");
  return t > 0 ? (e = e.replace("-", ""), n = "-".concat(e)) : t === 0 && e.indexOf("-", t + 1) > 0 && (n = e.replaceAll("-", "")), n;
}, b = (e, n) => {
  let t = e, i = Math.sign(n) * Math.floor(Math.abs(n));
  return e.indexOf(".") === 0 ? t = String(i).concat(e) : e.indexOf("-") === 0 && e.indexOf(".") === 1 && (t = i + ".".concat(e.slice(2))), t;
}, d = (e, n) => {
  const t = n.indexOf(e), i = n.length;
  let s = n;
  if (t !== -1 && t < i - 1) {
    let o = n.slice(t + 1, i);
    o = o.replaceAll(e, ""), s = n.slice(0, t + 1).concat(o);
  }
  return s;
}, h = (e, n, t, i) => {
  const s = n || g, o = t || t === 0 ? t : x;
  if (!e || !e.length)
    return String(s);
  let r = i ? parseFloat(e.replace(/[^\-\d.]/g, "")) : parseInt(e.replace(/[^\-\d]/g, ""), 10);
  return isNaN(r) ? String(s) : String(m(r, s, o));
};
class B extends F {
  constructor(n) {
    super(n), this.inputRef = N(), this.state = {
      editing: !1
    }, this.handleBlur = (t) => {
      const { maxValue: i, minValue: s, onBlur: o, allowFloats: r } = this.props, { editing: l } = this.state;
      l && this.setEditing(!1);
      const a = h(
        t.target.value,
        s,
        i,
        r
      );
      o && o(t, +a);
    }, this.handleChange = (t) => {
      const { maxValue: i, minValue: s, onChange: o, allowFloats: r } = this.props;
      t.target.value = M(
        t.target.value,
        s,
        i,
        r
      ), o && o(t, +t.target.value);
    }, this.handleFocus = (t) => {
      const { editing: i } = this.state;
      i || this.setEditing(!0);
    }, this.handleInput = (t) => {
      const { editing: i } = this.state, { onInput: s } = this.props;
      i || this.setEditing(!0), s && s(t, +t.target.value);
    }, this.handleKeyDown = (t) => {
      const { maxValue: i, minValue: s, onChange: o, onEnter: r, allowFloats: l } = this.props;
      if (t.keyCode === I) {
        const a = h(
          t.target.value,
          s,
          i,
          l
        );
        this.setEditing(!1), o && o(t, +a), r && r(t, +a), t.target.blur();
        return;
      }
      if (t.keyCode === S) {
        if (this.props.onEscape) {
          this.props.onEscape(t);
          return;
        }
        this.setEditing(!1), t.target.value = this.props.value, t.target.blur();
        return;
      }
    };
  }
  componentDidMount() {
    var r;
    const { maxValue: n, minValue: t, allowFloats: i } = this.props, s = (r = this.props.value) == null ? void 0 : r.toString(), o = this.inputRef.current;
    o && (o.value = h(
      s,
      t,
      n,
      i
    )), (this.props.autoFocus || this.props.autoSelect) && setTimeout(() => {
      o.focus(), this.props.autoSelect && o.select();
    }, 1);
  }
  componentDidUpdate(n, t) {
    var p, c;
    const { maxValue: i, minValue: s, allowFloats: o } = this.props, { editing: r } = this.state, l = (p = n.value) == null ? void 0 : p.toString(), a = (c = this.props.value) == null ? void 0 : c.toString(), u = this.inputRef.current;
    u && !r && a !== l && a !== u.value && (u.value = h(
      a,
      s,
      i,
      o
    ));
  }
  setEditing(n) {
    this.setState({ editing: n });
  }
  render() {
    const { props: n } = this, { onChange: t, onEnter: i, onInput: s, onBlur: o, value: r, ...l } = n, { className: a, fluid: u, monospace: p, ...c } = l;
    return /* @__PURE__ */ E(
      C,
      {
        className: v([
          "Input",
          u && "Input--fluid",
          p && "Input--monospace",
          a
        ]),
        ...c,
        children: [
          /* @__PURE__ */ f("div", { className: "Input__baseline", children: "." }),
          /* @__PURE__ */ f(
            "input",
            {
              className: "Input__input",
              onChange: this.handleChange,
              onInput: this.handleInput,
              onFocus: this.handleFocus,
              onBlur: this.handleBlur,
              onKeyDown: this.handleKeyDown,
              ref: this.inputRef,
              type: "number | string"
            }
          )
        ]
      }
    );
  }
}
export {
  B as RestrictedInput
};
