var p = Object.defineProperty;
var k = (t, e, s) => e in t ? p(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var i = (t, e, s) => (k(t, typeof e != "symbol" ? e + "" : e, s), s);
import { EventEmitter as _ } from "./common/events.js";
import { KEY_CTRL as g, KEY_SHIFT as v, KEY_ALT as F, KEY_F1 as L, KEY_F12 as b } from "./common/keycodes.js";
/**
 * Normalized browser focus events and BYOND-specific focus helpers.
 *
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
const n = new _();
let y = !1;
const Y = (t = {}) => {
  y = !!t.ignoreWindowFocus;
};
let d, l = !0;
const c = (t, e) => {
  if (y) {
    l = !0;
    return;
  }
  if (d && (clearTimeout(d), d = null), e) {
    d = setTimeout(() => c(t));
    return;
  }
  l !== t && (l = t, n.emit(t ? "window-focus" : "window-blur"), n.emit("window-focus-change", t));
};
let o = null;
const w = (t) => {
  const e = String(t.tagName).toLowerCase();
  return e === "input" || e === "textarea";
}, K = (t) => {
  a(), o = t, o.addEventListener("blur", a);
}, a = () => {
  o && (o.removeEventListener("blur", a), o = null);
};
let h = null, r = null;
const u = [], x = (t) => {
  u.push(t);
}, W = (t) => {
  const e = u.indexOf(t);
  e >= 0 && u.splice(e, 1);
}, S = (t) => {
  if (o || !l)
    return;
  const e = document.body;
  for (; t && t !== e; ) {
    if (u.includes(t)) {
      if (t.contains(h))
        return;
      h = t, t.focus();
      return;
    }
    t = t.parentElement;
  }
};
window.addEventListener("mousemove", (t) => {
  const e = t.target;
  e !== r && (r = e, S(e));
});
window.addEventListener("focusin", (t) => {
  r = null, h = t.target, c(!0), w(t.target) && K(t.target);
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
const f = {};
class m {
  constructor(e, s, E) {
    i(this, "event");
    i(this, "type");
    i(this, "code");
    i(this, "ctrl");
    i(this, "shift");
    i(this, "alt");
    i(this, "repeat");
    i(this, "_str");
    this.event = e, this.type = s, this.code = e.keyCode, this.ctrl = e.ctrlKey, this.shift = e.shiftKey, this.alt = e.altKey, this.repeat = !!E;
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
  const e = t.keyCode, s = new m(t, "keydown", f[e]);
  n.emit("keydown", s), n.emit("key", s), f[e] = !0;
});
document.addEventListener("keyup", (t) => {
  if (w(t.target))
    return;
  const e = t.keyCode, s = new m(t, "keyup");
  n.emit("keyup", s), n.emit("key", s), f[e] = !1;
});
export {
  m as KeyEvent,
  x as addScrollableNode,
  w as canStealFocus,
  n as globalEvents,
  W as removeScrollableNode,
  Y as setupGlobalEvents
};
