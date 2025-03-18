import { globalEvents as l } from "./events.js";
import { KEY_ESCAPE as K, KEY_ENTER as E, KEY_SPACE as p, KEY_TAB as h, KEY_CTRL as d, KEY_SHIFT as g, KEY_UP as S, KEY_DOWN as Y, KEY_LEFT as _, KEY_RIGHT as B, KEY_F5 as w } from "./keycodes.js";
const m = {}, c = [
  K,
  E,
  p,
  h,
  d,
  g,
  S,
  Y,
  _,
  B,
  w
], o = {}, u = [];
function F(n) {
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
function N(n) {
  const t = String(n);
  if (t === "Ctrl+F5" || t === "Ctrl+R") {
    location.reload();
    return;
  }
  if (t === "Ctrl+F" || n.event.defaultPrevented || n.isModifierKey() || c.includes(n.code))
    return;
  const i = F(n.code);
  if (!i)
    return;
  const f = m[i];
  if (f)
    return Byond.command(f);
  if (n.isDown() && !o[i]) {
    o[i] = !0;
    const r = `KeyDown "${i}"`;
    return Byond.command(r);
  }
  if (n.isUp() && o[i]) {
    o[i] = !1;
    const r = `KeyUp "${i}"`;
    return Byond.command(r);
  }
}
function P(n) {
  c.push(n);
}
function R(n) {
  const t = c.indexOf(n);
  t >= 0 && c.splice(t, 1);
}
function T() {
  for (const n in o)
    o[n] && (o[n] = !1, Byond.command(`KeyUp "${n}"`));
}
function v() {
  Byond.winget("default.*").then((n) => {
    const t = {};
    for (const r in n) {
      const s = r.split("."), e = s[1], a = s[2];
      e && a && (t[e] || (t[e] = {}), t[e][a] = n[r]);
    }
    const i = /\\"/g;
    function f(r) {
      return r.substring(1, r.length - 1).replace(i, '"');
    }
    for (const r in t) {
      const s = t[r], e = f(s.name);
      m[e] = f(s.command);
    }
  }), l.on("window-blur", () => {
    T();
  }), l.on("key", (n) => {
    for (const t of u)
      t(n);
    N(n);
  });
}
function x(n) {
  u.push(n);
  let t = !1;
  return () => {
    t || (t = !0, u.splice(u.indexOf(n), 1));
  };
}
export {
  P as acquireHotKey,
  x as listenForKeyEvents,
  T as releaseHeldKeys,
  R as releaseHotKey,
  v as setupHotKeys
};
