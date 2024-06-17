/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
const d = [
  "f",
  // femto
  "p",
  // pico
  "n",
  // nano
  "μ",
  // micro
  "m",
  // milli
  // NOTE: This is a space for a reason. When we right align si numbers,
  // in monospace mode, we want to units and numbers stay in their respective
  // columns. If rendering in HTML mode, this space will collapse into
  // a single space anyway.
  " ",
  // base
  "k",
  // kilo
  "M",
  // mega
  "G",
  // giga
  "T",
  // tera
  "P",
  // peta
  "E",
  // exa
  "Z",
  // zetta
  "Y",
  // yotta
  "R",
  // ronna
  "Q",
  // quecca
  "F",
  "N",
  "H"
], m = d.indexOf(" "), f = (t, s = -m, e = "") => {
  if (!isFinite(t))
    return t.toString();
  const o = Math.floor(Math.log10(Math.abs(t))), r = Math.max(s * 3, o), n = Math.floor(r / 3), i = d[Math.min(n + m, d.length - 1)];
  let a = (t / Math.pow(1e3, n)).toFixed(2);
  return a.endsWith(".00") ? a = a.slice(0, -3) : a.endsWith(".0") && (a = a.slice(0, -2)), `${a} ${i.trim()}${e}`.trim();
}, S = (t, s = 0) => f(t, s, "W"), $ = (t, s = 0) => f(t, s, "J"), b = (t, s = 0) => {
  if (!Number.isFinite(t))
    return String(t);
  const e = Number(t.toFixed(s)), o = e < 0, n = Math.abs(e).toString().split(".");
  n[0] = n[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const i = n.join(".");
  return o ? `-${i}` : i;
}, g = (t) => {
  const s = 20 * Math.log10(t), e = s >= 0 ? "+" : "-";
  let o = Math.abs(s);
  return o === 1 / 0 ? o = "Inf" : o = o.toFixed(2), `${e}${o} dB`;
}, M = [
  "",
  "· 10³",
  // kilo
  "· 10⁶",
  // mega
  "· 10⁹",
  // giga
  "· 10¹²",
  // tera
  "· 10¹⁵",
  // peta
  "· 10¹⁸",
  // exa
  "· 10²¹",
  // zetta
  "· 10²⁴",
  // yotta
  "· 10²⁷",
  // ronna
  "· 10³⁰",
  // quecca
  "· 10³³",
  "· 10³⁶",
  "· 10³⁹"
], p = (t, s = 0, e = "") => {
  if (!isFinite(t))
    return "NaN";
  const o = Math.floor(Math.log10(t)), r = Math.max(s * 3, o), n = Math.floor(r / 3), i = M[n], c = t / Math.pow(1e3, n), a = Math.max(0, 2 - r % 3);
  return `${c.toFixed(a)} ${i} ${e}`.trim();
}, F = (t, s = "default") => {
  const e = Math.floor(t / 10), o = Math.floor(e / 3600), r = Math.floor(e % 3600 / 60), n = e % 60;
  if (s === "short") {
    const l = o > 0 ? `${o}h` : "", h = r > 0 ? `${r}m` : "", u = n > 0 ? `${n}s` : "";
    return `${l}${h}${u}`;
  }
  const i = String(o).padStart(2, "0"), c = String(r).padStart(2, "0"), a = String(n).padStart(2, "0");
  return `${i}:${c}:${a}`;
};
export {
  g as formatDb,
  $ as formatEnergy,
  b as formatMoney,
  S as formatPower,
  p as formatSiBaseTenUnit,
  f as formatSiUnit,
  F as formatTime
};
