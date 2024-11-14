var _ = Object.defineProperty;
var v = (t, e, s) => e in t ? _(t, e, { enumerable: !0, configurable: !0, writable: !0, value: s }) : t[e] = s;
var i = (t, e, s) => v(t, typeof e != "symbol" ? e + "" : e, s);
import { KEY_CTRL as F, KEY_SHIFT as L, KEY_ALT as b, KEY_F1 as K, KEY_F12 as S } from "./keycodes.js";
class C {
  constructor() {
    i(this, "listeners");
    this.listeners = {};
  }
  on(e, s) {
    this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(s);
  }
  off(e, s) {
    const n = this.listeners[e];
    if (!n)
      throw new Error(`There is no listeners for "${e}"`);
    this.listeners[e] = n.filter((l) => l !== s);
  }
  emit(e, ...s) {
    const n = this.listeners[e];
    if (n)
      for (let l = 0, k = n.length; l < k; l += 1) {
        const g = n[l];
        g(...s);
      }
  }
  clear() {
    this.listeners = {};
  }
}
const o = new C();
let m = !1;
const W = (t = {}) => {
  m = !!t.ignoreWindowFocus;
};
let d, f = !0;
function u(t, e) {
  if (m) {
    f = !0;
    return;
  }
  if (d && (clearTimeout(d), d = null), e) {
    d = setTimeout(() => u(t));
    return;
  }
  f !== t && (f = t, o.emit(t ? "window-focus" : "window-blur"), o.emit("window-focus-change", t));
}
let r = null;
function E(t) {
  const e = String(t.tagName).toLowerCase();
  return e === "input" || e === "textarea";
}
function T(t) {
  a(), r = t, r.addEventListener("blur", a);
}
function a() {
  r && (r.removeEventListener("blur", a), r = null);
}
let w = null, c = null;
const h = [];
function $(t) {
  h.push(t);
}
function A(t) {
  const e = h.indexOf(t);
  e >= 0 && h.splice(e, 1);
}
function N(t) {
  if (r || !f)
    return;
  const e = document.body;
  for (; t && t !== e; ) {
    if (h.includes(t)) {
      if (t.contains(w))
        return;
      w = t, t.focus();
      return;
    }
    t = t.parentElement;
  }
}
window.addEventListener("mousemove", (t) => {
  const e = t.target;
  e !== c && (c = e, N(e));
});
window.addEventListener("focusin", (t) => {
  c = null, w = t.target, u(!0), E(t.target) && T(t.target);
});
window.addEventListener("focusout", () => {
  c = null, u(!1, !0);
});
window.addEventListener("blur", () => {
  c = null, u(!1, !0);
});
window.addEventListener("beforeunload", () => {
  u(!1);
});
const y = {};
class p {
  constructor(e, s, n) {
    i(this, "event");
    i(this, "type");
    i(this, "code");
    i(this, "ctrl");
    i(this, "shift");
    i(this, "alt");
    i(this, "repeat");
    i(this, "_str");
    this.event = e, this.type = s, this.code = e.keyCode, this.ctrl = e.ctrlKey, this.shift = e.shiftKey, this.alt = e.altKey, this.repeat = !!n;
  }
  hasModifierKeys() {
    return this.ctrl || this.alt || this.shift;
  }
  isModifierKey() {
    return this.code === F || this.code === L || this.code === b;
  }
  isDown() {
    return this.type === "keydown";
  }
  isUp() {
    return this.type === "keyup";
  }
  toString() {
    return this._str ? this._str : (this._str = "", this.ctrl && (this._str += "Ctrl+"), this.alt && (this._str += "Alt+"), this.shift && (this._str += "Shift+"), this.code >= 48 && this.code <= 90 ? this._str += String.fromCharCode(this.code) : this.code >= K && this.code <= S ? this._str += `F${this.code - 111}` : this._str += `[${this.code}]`, this._str);
  }
}
document.addEventListener("keydown", (t) => {
  if (E(t.target))
    return;
  const e = t.keyCode, s = new p(t, "keydown", y[e]);
  o.emit("keydown", s), o.emit("key", s), y[e] = !0;
});
document.addEventListener("keyup", (t) => {
  if (E(t.target))
    return;
  const e = t.keyCode, s = new p(t, "keyup");
  o.emit("keyup", s), o.emit("key", s), y[e] = !1;
});
export {
  C as EventEmitter,
  p as KeyEvent,
  $ as addScrollableNode,
  E as canStealFocus,
  o as globalEvents,
  A as removeScrollableNode,
  W as setupGlobalEvents
};
