import { KEY_ESCAPE as K, KEY_ENTER as E, KEY_SPACE as p, KEY_TAB as h, KEY_CTRL as d, KEY_SHIFT as g, KEY_UP as S, KEY_DOWN as Y, KEY_LEFT as _, KEY_RIGHT as b, KEY_F5 as B } from "./common/keycodes.js";
import { globalEvents as l } from "./events.js";
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
  b,
  B
], o = {}, u = [];
function w(t) {
  if (t === 16) return "Shift";
  if (t === 17) return "Ctrl";
  if (t === 18) return "Alt";
  if (t === 33) return "Northeast";
  if (t === 34) return "Southeast";
  if (t === 35) return "Southwest";
  if (t === 36) return "Northwest";
  if (t === 37) return "West";
  if (t === 38) return "North";
  if (t === 39) return "East";
  if (t === 40) return "South";
  if (t === 45) return "Insert";
  if (t === 46) return "Delete";
  if (t >= 48 && t <= 57 || t >= 65 && t <= 90)
    return String.fromCharCode(t);
  if (t >= 96 && t <= 105)
    return "Numpad" + (t - 96);
  if (t >= 112 && t <= 123)
    return "F" + (t - 111);
  if (t === 188) return ",";
  if (t === 189) return "-";
  if (t === 190) return ".";
}
function F(t) {
  const n = String(t);
  if (n === "Ctrl+F5" || n === "Ctrl+R") {
    location.reload();
    return;
  }
  if (n === "Ctrl+F" || t.event.defaultPrevented || t.isModifierKey() || c.includes(t.code))
    return;
  const e = w(t.code);
  if (!e)
    return;
  const f = m[e];
  if (f)
    return Byond.command(f);
  if (t.isDown() && !o[e]) {
    o[e] = !0;
    const r = `KeyDown "${e}"`;
    return Byond.command(r);
  }
  if (t.isUp() && o[e]) {
    o[e] = !1;
    const r = `KeyUp "${e}"`;
    return Byond.command(r);
  }
}
function O(t) {
  c.push(t);
}
function P(t) {
  const n = c.indexOf(t);
  n >= 0 && c.splice(n, 1);
}
function N() {
  for (const t of Object.keys(o))
    o[t] && (o[t] = !1, Byond.command(`KeyUp "${t}"`));
}
function R() {
  Byond.winget("default.*").then((t) => {
    const n = {};
    for (const r of Object.keys(t)) {
      const s = r.split("."), i = s[1], a = s[2];
      i && a && (n[i] || (n[i] = {}), n[i][a] = t[r]);
    }
    const e = /\\"/g;
    function f(r) {
      return r.substring(1, r.length - 1).replace(e, '"');
    }
    for (const r of Object.keys(n)) {
      const s = n[r], i = f(s.name);
      m[i] = f(s.command);
    }
  }), l.on("window-blur", () => {
    N();
  }), l.on("key", (t) => {
    for (const n of u)
      n(t);
    F(t);
  });
}
function v(t) {
  u.push(t);
  let n = !1;
  return () => {
    n || (n = !0, u.splice(u.indexOf(t), 1));
  };
}
export {
  O as acquireHotKey,
  v as listenForKeyEvents,
  N as releaseHeldKeys,
  P as releaseHotKey,
  R as setupHotKeys
};
