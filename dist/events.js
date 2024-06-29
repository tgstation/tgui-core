var p = Object.defineProperty;
var k = (t, e, i) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[e] = i;
var s = (t, e, i) => k(t, typeof e != "symbol" ? e + "" : e, i);
import { EventEmitter as _ } from "./common/events.js";
import { KEY_CTRL as g, KEY_SHIFT as v, KEY_ALT as F, KEY_F1 as L, KEY_F12 as b } from "./common/keycodes.js";
/**
 * Normalized browser focus events and BYOND-specific focus helpers.
 *
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
const o = new _();
let y = !1;
const Y = (t = {}) => {
  y = !!t.ignoreWindowFocus;
};
let d, u = !0;
function c(t, e) {
  if (y) {
    u = !0;
    return;
  }
  if (d && (clearTimeout(d), d = null), e) {
    d = setTimeout(() => c(t));
    return;
  }
  u !== t && (u = t, o.emit(t ? "window-focus" : "window-blur"), o.emit("window-focus-change", t));
}
let n = null;
function w(t) {
  const e = String(t.tagName).toLowerCase();
  return e === "input" || e === "textarea";
}
function K(t) {
  f(), n = t, n.addEventListener("blur", f);
}
function f() {
  n && (n.removeEventListener("blur", f), n = null);
}
let a = null, r = null;
const l = [];
function x(t) {
  l.push(t);
}
function W(t) {
  const e = l.indexOf(t);
  e >= 0 && l.splice(e, 1);
}
function S(t) {
  if (n || !u)
    return;
  const e = document.body;
  for (; t && t !== e; ) {
    if (l.includes(t)) {
      if (t.contains(a))
        return;
      a = t, t.focus();
      return;
    }
    t = t.parentElement;
  }
}
window.addEventListener("mousemove", (t) => {
  const e = t.target;
  e !== r && (r = e, S(e));
});
window.addEventListener("focusin", (t) => {
  r = null, a = t.target, c(!0), w(t.target) && K(t.target);
});
window.addEventListener("focusout", () => {
  r = null, c(!1, !0);
});
window.addEventListener("blur", () => {
  r = null, c(!1, !0);
});
window.addEventListener("beforeunload", () => {
  c(!1);
});
const h = {};
class m {
  constructor(e, i, E) {
    s(this, "event");
    s(this, "type");
    s(this, "code");
    s(this, "ctrl");
    s(this, "shift");
    s(this, "alt");
    s(this, "repeat");
    s(this, "_str");
    this.event = e, this.type = i, this.code = e.keyCode, this.ctrl = e.ctrlKey, this.shift = e.shiftKey, this.alt = e.altKey, this.repeat = !!E;
  }
  hasModifierKeys() {
    return this.ctrl || this.alt || this.shift;
  }
  isModifierKey() {
    return this.code === g || this.code === v || this.code === F;
  }
  isDown() {
    return this.type === "keydown";
  }
  isUp() {
    return this.type === "keyup";
  }
  toString() {
    return this._str ? this._str : (this._str = "", this.ctrl && (this._str += "Ctrl+"), this.alt && (this._str += "Alt+"), this.shift && (this._str += "Shift+"), this.code >= 48 && this.code <= 90 ? this._str += String.fromCharCode(this.code) : this.code >= L && this.code <= b ? this._str += "F" + (this.code - 111) : this._str += "[" + this.code + "]", this._str);
  }
}
document.addEventListener("keydown", (t) => {
  if (w(t.target))
    return;
  const e = t.keyCode, i = new m(t, "keydown", h[e]);
  o.emit("keydown", i), o.emit("key", i), h[e] = !0;
});
document.addEventListener("keyup", (t) => {
  if (w(t.target))
    return;
  const e = t.keyCode, i = new m(t, "keyup");
  o.emit("keyup", i), o.emit("key", i), h[e] = !1;
});
export {
  m as KeyEvent,
  x as addScrollableNode,
  w as canStealFocus,
  o as globalEvents,
  W as removeScrollableNode,
  Y as setupGlobalEvents
};
