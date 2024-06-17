import { KEY_ESCAPE as K, KEY_ENTER as E, KEY_SPACE as p, KEY_TAB as h, KEY_CTRL as d, KEY_SHIFT as g, KEY_UP as S, KEY_DOWN as Y, KEY_LEFT as _, KEY_RIGHT as b, KEY_F5 as B } from "./common/keycodes.js";
import { globalEvents as l } from "./events.js";
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
const m = {}, u = [
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
], o = {}, c = [], w = (t) => {
  if (t === 16)
    return "Shift";
  if (t === 17)
    return "Ctrl";
  if (t === 18)
    return "Alt";
  if (t === 33)
    return "Northeast";
  if (t === 34)
    return "Southeast";
  if (t === 35)
    return "Southwest";
  if (t === 36)
    return "Northwest";
  if (t === 37)
    return "West";
  if (t === 38)
    return "North";
  if (t === 39)
    return "East";
  if (t === 40)
    return "South";
  if (t === 45)
    return "Insert";
  if (t === 46)
    return "Delete";
  if (t >= 48 && t <= 57 || t >= 65 && t <= 90)
    return String.fromCharCode(t);
  if (t >= 96 && t <= 105)
    return "Numpad" + (t - 96);
  if (t >= 112 && t <= 123)
    return "F" + (t - 111);
  if (t === 188)
    return ",";
  if (t === 189)
    return "-";
  if (t === 190)
    return ".";
}, F = (t) => {
  const r = String(t);
  if (r === "Ctrl+F5" || r === "Ctrl+R") {
    location.reload();
    return;
  }
  if (r === "Ctrl+F" || t.event.defaultPrevented || t.isModifierKey() || u.includes(t.code))
    return;
  const e = w(t.code);
  if (!e)
    return;
  const i = m[e];
  if (i)
    return Byond.command(i);
  if (t.isDown() && !o[e]) {
    o[e] = !0;
    const n = `KeyDown "${e}"`;
    return Byond.command(n);
  }
  if (t.isUp() && o[e]) {
    o[e] = !1;
    const n = `KeyUp "${e}"`;
    return Byond.command(n);
  }
}, O = (t) => {
  u.push(t);
}, P = (t) => {
  const r = u.indexOf(t);
  r >= 0 && u.splice(r, 1);
}, N = () => {
  for (let t of Object.keys(o))
    o[t] && (o[t] = !1, Byond.command(`KeyUp "${t}"`));
}, R = () => {
  Byond.winget("default.*").then((t) => {
    const r = {};
    for (let n of Object.keys(t)) {
      const f = n.split("."), s = f[1], a = f[2];
      s && a && (r[s] || (r[s] = {}), r[s][a] = t[n]);
    }
    const e = /\\"/g, i = (n) => n.substring(1, n.length - 1).replace(e, '"');
    for (let n of Object.keys(r)) {
      const f = r[n], s = i(f.name);
      m[s] = i(f.command);
    }
  }), l.on("window-blur", () => {
    N();
  }), l.on("key", (t) => {
    for (const r of c)
      r(t);
    F(t);
  });
}, v = (t) => {
  c.push(t);
  let r = !1;
  return () => {
    r || (r = !0, c.splice(c.indexOf(t), 1));
  };
};
export {
  O as acquireHotKey,
  v as listenForKeyEvents,
  N as releaseHeldKeys,
  P as releaseHotKey,
  R as setupHotKeys
};
