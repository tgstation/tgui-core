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
], u = d.indexOf(" ");
function m(t, n = -u, s = "") {
  if (!Number.isFinite(t))
    return t.toString();
  const o = Math.floor(Math.log10(Math.abs(t))), a = Math.max(n * 3, o), e = Math.floor(a / 3), i = d[Math.min(e + u, d.length - 1)];
  let r = (t / 1e3 ** e).toFixed(2);
  return r.endsWith(".00") ? r = r.slice(0, -3) : r.endsWith(".0") && (r = r.slice(0, -2)), `${r} ${i.trim()}${s}`.trim();
}
function M(t, n = 0) {
  return m(t, n, "W");
}
function b(t, n = 0) {
  return m(t, n, "J");
}
function $(t, n = 0) {
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
  return o === Number.POSITIVE_INFINITY ? o = "Inf" : o = o.toFixed(2), `${s}${o} dB`;
}
const S = [
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
function N(t, n = 0, s = "") {
  if (!Number.isFinite(t))
    return "NaN";
  const o = Math.floor(Math.log10(t)), a = Math.max(n * 3, o), e = Math.floor(a / 3), i = S[e], c = t / 1e3 ** e, r = Math.max(0, 2 - a % 3);
  return `${c.toFixed(r)} ${i} ${s}`.trim();
}
function F(t, n = "default") {
  const s = Math.floor(t / 10), o = Math.floor(s / 3600), a = Math.floor(s % 3600 / 60), e = s % 60;
  if (n === "short") {
    const f = o > 0 ? `${o}h` : "", l = a > 0 ? `${a}m` : "", h = e > 0 ? `${e}s` : "";
    return `${f}${l}${h}`;
  }
  const i = String(o).padStart(2, "0"), c = String(a).padStart(2, "0"), r = String(e).padStart(2, "0");
  return `${i}:${c}:${r}`;
}
export {
  g as formatDb,
  b as formatEnergy,
  $ as formatMoney,
  M as formatPower,
  N as formatSiBaseTenUnit,
  m as formatSiUnit,
  F as formatTime
};
