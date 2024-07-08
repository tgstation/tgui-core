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
], l = d.indexOf(" ");
function u(t, n = -l, s = "") {
  if (!isFinite(t))
    return t.toString();
  const o = Math.floor(Math.log10(Math.abs(t))), r = Math.max(n * 3, o), e = Math.floor(r / 3), i = d[Math.min(e + l, d.length - 1)];
  let a = (t / Math.pow(1e3, e)).toFixed(2);
  return a.endsWith(".00") ? a = a.slice(0, -3) : a.endsWith(".0") && (a = a.slice(0, -2)), `${a} ${i.trim()}${s}`.trim();
}
function S(t, n = 0) {
  return u(t, n, "W");
}
function $(t, n = 0) {
  return u(t, n, "J");
}
function b(t, n = 0) {
  if (!Number.isFinite(t))
    return String(t);
  const s = Number(t.toFixed(n)), o = s < 0, e = Math.abs(s).toString().split(".");
  e[0] = e[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  const i = e.join(".");
  return o ? `-${i}` : i;
}
function g(t) {
  const n = 20 * Math.log10(t), s = n >= 0 ? "+" : "-";
  let o = Math.abs(n);
  return o === 1 / 0 ? o = "Inf" : o = o.toFixed(2), `${s}${o} dB`;
}
const M = [
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
];
function p(t, n = 0, s = "") {
  if (!isFinite(t))
    return "NaN";
  const o = Math.floor(Math.log10(t)), r = Math.max(n * 3, o), e = Math.floor(r / 3), i = M[e], c = t / Math.pow(1e3, e), a = Math.max(0, 2 - r % 3);
  return `${c.toFixed(a)} ${i} ${s}`.trim();
}
function F(t, n = "default") {
  const s = Math.floor(t / 10), o = Math.floor(s / 3600), r = Math.floor(s % 3600 / 60), e = s % 60;
  if (n === "short") {
    const f = o > 0 ? `${o}h` : "", m = r > 0 ? `${r}m` : "", h = e > 0 ? `${e}s` : "";
    return `${f}${m}${h}`;
  }
  const i = String(o).padStart(2, "0"), c = String(r).padStart(2, "0"), a = String(e).padStart(2, "0");
  return `${i}:${c}:${a}`;
}
export {
  g as formatDb,
  $ as formatEnergy,
  b as formatMoney,
  S as formatPower,
  p as formatSiBaseTenUnit,
  u as formatSiUnit,
  F as formatTime
};
