import { globalEvents as a } from "./events.js";
import { KEY_ESCAPE as m, KEY_ENTER as h, KEY_SPACE as p, KEY_TAB as E, KEY_CTRL as d, KEY_SHIFT as g, KEY_UP as B, KEY_DOWN as T, KEY_LEFT as b, KEY_RIGHT as S, KEY_F5 as Y } from "./keycodes.js";
const K = {}, c = [
  m,
  h,
  p,
  E,
  d,
  g,
  B,
  T,
  b,
  S,
  Y
], i = {}, u = [];
function _(n) {
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
function y(n) {
  const t = String(n);
  if (t === "Ctrl+F5" || t === "Ctrl+R") {
    location.reload();
    return;
  }
  if (t === "Ctrl+F" || n.event.defaultPrevented || n.isModifierKey() || c.includes(n.code))
    return;
  const o = _(n.code);
  if (!o)
    return;
  const s = K[o];
  if (s)
    return Byond.command(s);
  if (n.isDown() && !i[o]) {
    i[o] = !0;
    const r = `${globalThis.ByondKeyDown} "${o}"`;
    return Byond.command(r);
  }
  if (n.isUp() && i[o]) {
    i[o] = !1;
    const r = `${globalThis.ByondKeyUp} "${o}"`;
    return Byond.command(r);
  }
}
function N(n) {
  c.push(n);
}
function U(n) {
  const t = c.indexOf(n);
  t >= 0 && c.splice(t, 1);
}
function w() {
  for (const n in i)
    i[n] && (i[n] = !1, Byond.command(`${globalThis.ByondKeyUp} "${n}"`));
}
function D() {
  globalThis.ByondKeyUp || (globalThis.ByondKeyUp = "KeyUp", globalThis.ByondKeyDown = "KeyDown"), Byond.winget("default.*").then((n) => {
    const t = {};
    for (const r in n) {
      const f = r.split("."), e = f[1], l = f[2];
      e && l && (t[e] || (t[e] = {}), t[e][l] = n[r]);
    }
    const o = /\\"/g;
    function s(r) {
      return r.substring(1, r.length - 1).replace(o, '"');
    }
    for (const r in t) {
      const f = t[r], e = s(f.name);
      K[e] = s(f.command);
    }
  }), a.on("window-blur", () => {
    w();
  }), a.on("key", (n) => {
    for (const t of u)
      t(n);
    y(n);
  });
}
function H(n) {
  u.push(n);
  let t = !1;
  return () => {
    t || (t = !0, u.splice(u.indexOf(n), 1));
  };
}
export {
  N as acquireHotKey,
  H as listenForKeyEvents,
  w as releaseHeldKeys,
  U as releaseHotKey,
  D as setupHotKeys
};
