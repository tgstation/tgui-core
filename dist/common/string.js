function p(e, t = (r) => JSON.stringify(r)) {
  const r = e.toLowerCase().trim();
  return (n) => {
    if (!r)
      return !0;
    const o = t(n);
    return o ? o.toLowerCase().includes(r) : !1;
  };
}
function a(e) {
  return e.charAt(0).toUpperCase() + e.slice(1).toLowerCase();
}
function u(e) {
  return e.replace(/(^\w{1})|(\s+\w{1})/g, (t) => t.toUpperCase());
}
function l(e) {
  return e.replace(/^\w/, (t) => t.toUpperCase());
}
const c = ["Id", "Tv"], s = [
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
function f(e) {
  if (!e) return e;
  let t = e.replace(/([^\W_]+[^\s-]*) */g, (r) => a(r));
  for (const r of s) {
    const n = new RegExp("\\s" + r + "\\s", "g");
    t = t.replace(n, (o) => o.toLowerCase());
  }
  for (const r of c) {
    const n = new RegExp("\\b" + r + "\\b", "g");
    t = t.replace(n, (o) => o.toLowerCase());
  }
  return t;
}
const i = {
  amp: "&",
  apos: "'",
  gt: ">",
  lt: "<",
  nbsp: " ",
  quot: '"'
};
function g(e) {
  return e && e.replace(/<br>/gi, `
`).replace(/<\/?[a-z0-9-_]+[^>]*>/gi, "").replace(
    /&(nbsp|amp|quot|lt|gt|apos);/g,
    (t, r) => i[r]
  ).replace(/&#?([0-9]+);/gi, (t, r) => {
    const n = parseInt(r, 10);
    return String.fromCharCode(n);
  }).replace(/&#x?([0-9a-f]+);/gi, (t, r) => {
    const n = parseInt(r, 16);
    return String.fromCharCode(n);
  });
}
export {
  a as capitalize,
  u as capitalizeAll,
  l as capitalizeFirst,
  p as createSearch,
  g as decodeHtmlEntities,
  f as toTitleCase
};
