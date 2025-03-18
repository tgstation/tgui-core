import { globalEvents as m } from "./events.js";
import { KEY_ESCAPE as E, KEY_ENTER as p, KEY_SPACE as h, KEY_TAB as d, KEY_CTRL as g, KEY_SHIFT as S, KEY_UP as Y, KEY_DOWN as _, KEY_LEFT as B, KEY_RIGHT as $, KEY_F5 as w } from "./keycodes.js";
import { ByondKeyUp as l, ByondKeyDown as F } from "./constants.js";
const K = {}, c = [
  E,
  p,
  h,
  d,
  g,
  S,
  Y,
  _,
  B,
  $,
  w
], i = {}, u = [];
function N(n) {
  if (n === 16) return "Shift";
  if (n === 17) return "Ctrl";
  if (n === 18) return "Alt";
  if (n === 33) return "Northeast";
  if (n === 34) return "Southeast";
  if (n === 35) return "Southwest";
  if (n === 36) return "Northwest";
  if (n === 37) return "West";
  if (n === 38) return "North";
  if (n === 39) return "East";
  if (n === 40) return "South";
  if (n === 45) return "Insert";
  if (n === 46) return "Delete";
  if (n >= 48 && n <= 57 || n >= 65 && n <= 90)
    return String.fromCharCode(n);
  if (n >= 96 && n <= 105)
    return `Numpad${n - 96}`;
  if (n >= 112 && n <= 123)
    return `F${n - 111}`;
  if (n === 188) return ",";
  if (n === 189) return "-";
  if (n === 190) return ".";
}
function T(n) {
  const t = String(n);
  if (t === "Ctrl+F5" || t === "Ctrl+R") {
    location.reload();
    return;
  }
  if (t === "Ctrl+F" || n.event.defaultPrevented || n.isModifierKey() || c.includes(n.code))
    return;
  const o = N(n.code);
  if (!o)
    return;
  const f = K[o];
  if (f)
    return Byond.command(f);
  if (n.isDown() && !i[o]) {
    i[o] = !0;
    const r = `${F()} "${o}"`;
    return Byond.command(r);
  }
  if (n.isUp() && i[o]) {
    i[o] = !1;
    const r = `${l()} "${o}"`;
    return Byond.command(r);
  }
}
function v(n) {
  c.push(n);
}
function x(n) {
  const t = c.indexOf(n);
  t >= 0 && c.splice(t, 1);
}
function b() {
  for (const n in i)
    i[n] && (i[n] = !1, Byond.command(`${l()} "${n}"`));
}
function A() {
  Byond.winget("default.*").then((n) => {
    const t = {};
    for (const r in n) {
      const s = r.split("."), e = s[1], a = s[2];
      e && a && (t[e] || (t[e] = {}), t[e][a] = n[r]);
    }
    const o = /\\"/g;
    function f(r) {
      return r.substring(1, r.length - 1).replace(o, '"');
    }
    for (const r in t) {
      const s = t[r], e = f(s.name);
      K[e] = f(s.command);
    }
  }), m.on("window-blur", () => {
    b();
  }), m.on("key", (n) => {
    for (const t of u)
      t(n);
    T(n);
  });
}
function D(n) {
  u.push(n);
  let t = !1;
  return () => {
    t || (t = !0, u.splice(u.indexOf(n), 1));
  };
}
export {
  v as acquireHotKey,
  D as listenForKeyEvents,
  b as releaseHeldKeys,
  x as releaseHotKey,
  A as setupHotKeys
};
