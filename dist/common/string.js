function l(e, t = (r) => JSON.stringify(r)) {
  const r = e.toLowerCase().trim();
  return (n) => {
    if (!r)
      return !0;
    const o = t(n);
    return o ? o.toLowerCase().includes(r) : !1;
  };
}
const a = ["a", "e", "i", "o", "u"];
function f(e, t, r) {
  return t === 1 ? e : r ? e + r : e.endsWith("s") || e.endsWith("x") || e.endsWith("z") || e.endsWith("ch") || e.endsWith("sh") ? `${e}es` : e.endsWith("y") && !a.includes(e.charAt(e.length - 2)) ? `${e.slice(0, -1)}ies` : `${e}s`;
}
function c(e) {
  return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
}
function h(e) {
  return e.replace(/(^\w{1})|(\s+\w{1})/g, (t) => t.toUpperCase());
}
function g(e) {
  return e.replace(/^\w/, (t) => t.toUpperCase());
}
const i = ["Id", "Tv"], u = [
  "A",
  "An",
  "And",
  "As",
  "At",
  "But",
  "By",
  "For",
  "For",
  "From",
  "In",
  "Into",
  "Near",
  "Nor",
  "Of",
  "On",
  "Onto",
  "Or",
  "The",
  "To",
  "With"
];
function d(e) {
  if (!e) return e;
  let t = e.replace(/([^\W_]+[^\s-]*) */g, (r) => c(r));
  for (const r of u) {
    const n = new RegExp(`\\s${r}\\s`, "g");
    t = t.replace(n, (o) => o.toLowerCase());
  }
  for (const r of i) {
    const n = new RegExp(`\\b${r}\\b`, "g");
    t = t.replace(n, (o) => o.toLowerCase());
  }
  return t;
}
const s = /&(nbsp|amp|quot|lt|gt|apos|trade|copy);/g, p = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  nbsp: " ",
  quot: '"',
  trade: "™",
  cops: "©"
};
function m(e) {
  return e && e.replace(/<br>/gi, `
`).replace(/<\/?[a-z0-9-_]+[^>]*>/gi, "").replace(s, (t, r) => p[r]).replace(/&#?([0-9]+);/gi, (t, r) => {
    const n = Number.parseInt(r, 10);
    return String.fromCharCode(n);
  }).replace(/&#x?([0-9a-f]+);/gi, (t, r) => {
    const n = Number.parseInt(r, 16);
    return String.fromCharCode(n);
  });
}
export {
  a as VOWELS,
  c as capitalize,
  h as capitalizeAll,
  g as capitalizeFirst,
  l as createSearch,
  m as decodeHtmlEntities,
  f as pluralize,
  d as toTitleCase
};
