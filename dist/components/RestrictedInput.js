import { jsxs as E, jsx as h } from "react/jsx-runtime";
import { KEY_ENTER as I, KEY_ESCAPE as S } from "../common/keycodes.js";
import { clamp as m } from "../common/math.js";
import { classes as v } from "../common/react.js";
import { Component as F, createRef as N } from "react";
import { Box as C } from "./Box.js";
const g = 0, x = 1e4;
function M(e, n, t, s) {
  const i = n || g, o = t || t === 0 ? t : x;
  let r = s ? e.replace(/[^\-\d.]/g, "") : e.replace(/[^\-\d]/g, "");
  return s && (r = b(r, i), r = d(".", r)), n < 0 ? (r = _(r), r = d("-", r)) : r = r.replaceAll("-", ""), i <= 1 && o >= 0 ? V(r, i, o, s) : r;
}
const V = (e, n, t, s) => {
  let i = s ? parseFloat(e) : parseInt(e, 10);
  if (!isNaN(i) && (e.slice(-1) !== "." || i < Math.floor(n))) {
    let o = m(i, n, t);
    if (i !== o)
      return String(o);
  }
  return e;
};
function _(e) {
  let n = e, t = e.indexOf("-");
  return t > 0 ? (e = e.replace("-", ""), n = "-".concat(e)) : t === 0 && e.indexOf("-", t + 1) > 0 && (n = e.replaceAll("-", "")), n;
}
function b(e, n) {
  let t = e, s = Math.sign(n) * Math.floor(Math.abs(n));
  return e.indexOf(".") === 0 ? t = String(s).concat(e) : e.indexOf("-") === 0 && e.indexOf(".") === 1 && (t = s + ".".concat(e.slice(2))), t;
}
function d(e, n) {
  const t = n.indexOf(e), s = n.length;
  let i = n;
  if (t !== -1 && t < s - 1) {
    let o = n.slice(t + 1, s);
    o = o.replaceAll(e, ""), i = n.slice(0, t + 1).concat(o);
  }
  return i;
}
function f(e, n, t, s) {
  const i = n || g, o = t || t === 0 ? t : x;
  if (!e || !e.length)
    return String(i);
  let r = s ? parseFloat(e.replace(/[^\-\d.]/g, "")) : parseInt(e.replace(/[^\-\d]/g, ""), 10);
  return isNaN(r) ? String(i) : String(m(r, i, o));
}
class B extends F {
  constructor(n) {
    super(n), this.inputRef = N(), this.state = {
      editing: !1
    }, this.handleBlur = (t) => {
      const { maxValue: s, minValue: i, onBlur: o, allowFloats: r } = this.props, { editing: l } = this.state;
      l && this.setEditing(!1);
      const a = f(
        t.target.value,
        i,
        s,
        r
      );
      o && o(t, +a);
    }, this.handleChange = (t) => {
      const { maxValue: s, minValue: i, onChange: o, allowFloats: r } = this.props;
      t.target.value = M(
        t.target.value,
        i,
        s,
        r
      ), o && o(t, +t.target.value);
    }, this.handleFocus = (t) => {
      const { editing: s } = this.state;
      s || this.setEditing(!0);
    }, this.handleInput = (t) => {
      const { editing: s } = this.state, { onInput: i } = this.props;
      s || this.setEditing(!0), i && i(t, +t.target.value);
    }, this.handleKeyDown = (t) => {
      const { maxValue: s, minValue: i, onChange: o, onEnter: r, allowFloats: l } = this.props;
      if (t.keyCode === I) {
        const a = f(
          t.target.value,
          i,
          s,
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
    const { maxValue: n, minValue: t, allowFloats: s } = this.props, i = (r = this.props.value) == null ? void 0 : r.toString(), o = this.inputRef.current;
    o && (o.value = f(
      i,
      t,
      n,
      s
    )), (this.props.autoFocus || this.props.autoSelect) && setTimeout(() => {
      o.focus(), this.props.autoSelect && o.select();
    }, 1);
  }
  componentDidUpdate(n, t) {
    var p, c;
    const { maxValue: s, minValue: i, allowFloats: o } = this.props, { editing: r } = this.state, l = (p = n.value) == null ? void 0 : p.toString(), a = (c = this.props.value) == null ? void 0 : c.toString(), u = this.inputRef.current;
    u && !r && a !== l && a !== u.value && (u.value = f(
      a,
      i,
      s,
      o
    ));
  }
  setEditing(n) {
    this.setState({ editing: n });
  }
  render() {
    const { props: n } = this, { onChange: t, onEnter: s, onInput: i, onBlur: o, value: r, ...l } = n, { className: a, fluid: u, monospace: p, ...c } = l;
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
          /* @__PURE__ */ h("div", { className: "Input__baseline", children: "." }),
          /* @__PURE__ */ h(
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
