import { jsxs as E, jsx as h } from "react/jsx-runtime";
import { Component as N, createRef as S } from "react";
import { KEY_ENTER as I, KEY_ESCAPE as b } from "../common/keycodes.js";
import { clamp as d } from "../common/math.js";
import { classes as v } from "../common/react.js";
import { Box as F } from "./Box.js";
const g = 0, x = 1e4;
function C(s, e, t, n) {
  const i = e || g, o = t || t === 0 ? t : x;
  let r = n ? s.replace(/[^\-\d.]/g, "") : s.replace(/[^\-\d]/g, "");
  return n && (r = V(r, i), r = m(".", r)), e < 0 ? (r = _(r), r = m("-", r)) : r = r.replaceAll("-", ""), i <= 1 && o >= 0 ? M(r, i, o, n) : r;
}
const M = (s, e, t, n) => {
  const i = n ? Number.parseFloat(s) : Number.parseInt(s, 10);
  if (!Number.isNaN(i) && (s.slice(-1) !== "." || i < Math.floor(e))) {
    const o = d(i, e, t);
    if (i !== o)
      return String(o);
  }
  return s;
};
function _(s) {
  let e = s;
  const t = s.indexOf("-");
  if (t > 0) {
    const n = s.replace("-", "");
    e = "-".concat(n);
  } else t === 0 && s.indexOf("-", t + 1) > 0 && (e = s.replaceAll("-", ""));
  return e;
}
function V(s, e) {
  let t = s;
  const n = Math.sign(e) * Math.floor(Math.abs(e));
  return s.indexOf(".") === 0 ? t = String(n).concat(s) : s.indexOf("-") === 0 && s.indexOf(".") === 1 && (t = n + ".".concat(s.slice(2))), t;
}
function m(s, e) {
  const t = e.indexOf(s), n = e.length;
  let i = e;
  if (t !== -1 && t < n - 1) {
    let o = e.slice(t + 1, n);
    o = o.replaceAll(s, ""), i = e.slice(0, t + 1).concat(o);
  }
  return i;
}
function f(s, e, t, n) {
  const i = e || g, o = t || t === 0 ? t : x;
  if (!s || !s.length)
    return String(i);
  const r = n ? Number.parseFloat(s.replace(/[^\-\d.]/g, "")) : Number.parseInt(s.replace(/[^\-\d]/g, ""), 10);
  return Number.isNaN(r) ? String(i) : String(d(r, i, o));
}
class B extends N {
  constructor(e) {
    super(e), this.inputRef = S(), this.state = {
      editing: !1
    }, this.handleBlur = (t) => {
      const { maxValue: n, minValue: i, onBlur: o, allowFloats: r } = this.props, { editing: l } = this.state;
      l && this.setEditing(!1);
      const a = f(
        t.target.value,
        i,
        n,
        r
      );
      o && o(t, +a);
    }, this.handleChange = (t) => {
      const { maxValue: n, minValue: i, onChange: o, allowFloats: r } = this.props;
      t.target.value = C(
        t.target.value,
        i,
        n,
        r
      ), o && o(t, +t.target.value);
    }, this.handleFocus = (t) => {
      const { editing: n } = this.state;
      n || this.setEditing(!0);
    }, this.handleInput = (t) => {
      const { editing: n } = this.state, { onInput: i } = this.props;
      n || this.setEditing(!0), i && i(t, +t.target.value);
    }, this.handleKeyDown = (t) => {
      const { maxValue: n, minValue: i, onChange: o, onEnter: r, allowFloats: l } = this.props;
      if (t.keyCode === I) {
        const a = f(
          t.target.value,
          i,
          n,
          l
        );
        this.setEditing(!1), o && o(t, +a), r && r(t, +a), t.target.blur();
        return;
      }
      if (t.keyCode === b) {
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
    const { maxValue: e, minValue: t, allowFloats: n } = this.props, i = (r = this.props.value) == null ? void 0 : r.toString(), o = this.inputRef.current;
    o && (o.value = f(
      i,
      t,
      e,
      n
    )), (this.props.autoFocus || this.props.autoSelect) && setTimeout(() => {
      o.focus(), this.props.autoSelect && o.select();
    }, 1);
  }
  componentDidUpdate(e, t) {
    var c, p;
    const { maxValue: n, minValue: i, allowFloats: o } = this.props, { editing: r } = this.state, l = (c = e.value) == null ? void 0 : c.toString(), a = (p = this.props.value) == null ? void 0 : p.toString(), u = this.inputRef.current;
    u && !r && a !== l && a !== u.value && (u.value = f(
      a,
      i,
      n,
      o
    ));
  }
  setEditing(e) {
    this.setState({ editing: e });
  }
  render() {
    const { props: e } = this, { onChange: t, onEnter: n, onInput: i, onBlur: o, value: r, ...l } = e, { className: a, fluid: u, monospace: c, ...p } = l;
    return /* @__PURE__ */ E(
      F,
      {
        className: v([
          "Input",
          u && "Input--fluid",
          c && "Input--monospace",
          a
        ]),
        ...p,
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
