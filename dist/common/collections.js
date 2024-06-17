/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
const y = (t, n) => {
  if (t == null)
    return t;
  if (Array.isArray(t)) {
    const s = [];
    for (let e = 0; e < t.length; e++) {
      const r = t[e];
      n(r, e, t) && s.push(r);
    }
    return s;
  }
  throw new Error(`filter() can't iterate on type ${typeof t}`);
}, d = (t, n) => {
  if (t == null)
    return t;
  if (Array.isArray(t)) {
    const s = [];
    for (let e = 0; e < t.length; e++)
      s.push(n(t[e], e, t));
    return s;
  }
  if (typeof t == "object") {
    const s = [];
    for (let e in t)
      Object.prototype.hasOwnProperty.call(t, e) && s.push(n(t[e], e, t));
    return s;
  }
  throw new Error(`map() can't iterate on type ${typeof t}`);
}, p = (t, n) => {
  const s = t.criteria, e = n.criteria, r = s.length;
  for (let u = 0; u < r; u++) {
    const i = s[u], f = e[u];
    if (i < f)
      return -1;
    if (i > f)
      return 1;
  }
  return 0;
}, l = (t, ...n) => {
  if (!Array.isArray(t))
    return t;
  let s = t.length, e = [];
  for (let u = 0; u < s; u++) {
    const i = t[u];
    e.push({
      criteria: n.map((f) => f(i)),
      value: i
    });
  }
  e.sort(p);
  const r = [];
  for (; s--; )
    r[s] = e[s].value;
  return r;
}, A = (t) => l(t), m = (t, n) => new Array(n - t).fill(null).map((s, e) => e + t), w = (t, n, s) => {
  const e = t.length;
  let r, u;
  for (s === void 0 ? (r = 1, u = t[0]) : (r = 0, u = s); r < e; r++)
    u = n(u, t[r], r, t);
  return u;
}, c = (t, n) => {
  const { length: s } = t, e = [], r = n ? [] : e;
  let u = -1;
  t:
    for (; ++u < s; ) {
      let i = t[u];
      const f = n ? n(i) : i;
      if (f === f) {
        let o = r.length;
        for (; o--; )
          if (r[o] === f)
            continue t;
        n && r.push(f), e.push(i);
      } else
        r.includes(f) || (r !== e && r.push(f), e.push(i));
    }
  return e;
}, b = (t) => c(t), v = (...t) => {
  if (t.length === 0)
    return [];
  const n = t.length, s = t[0].length, e = [];
  for (let r = 0; r < s; r++) {
    const u = [];
    for (let i = 0; i < n; i++)
      u.push(t[i][r]);
    e.push(u);
  }
  return e;
}, g = (t, n, s) => {
  if (n.length === 0)
    return 0;
  const e = t(s);
  let [r, u] = [0, n.length], i, f = 0;
  for (; r < u; )
    if (f = r + u >> 1, i = t(n[f]), i < e)
      r = f + 1;
    else {
      if (i === e)
        return f;
      u = f;
    }
  return i > e ? f : f + 1;
}, j = (t, n, s) => {
  const e = [...t];
  return e.splice(g(s, t, n), 0, n), e;
}, O = (t, n) => {
  const s = [];
  let e = [], r = n;
  for (const u of t)
    e.push(u), r--, r || (r = n, s.push(e), e = []);
  return e.length && s.push(e), s;
}, h = (t) => typeof t == "object" && t !== null, a = (...t) => {
  const n = {};
  for (const s of t)
    for (const e of Object.keys(s)) {
      const r = n[e], u = s[e];
      Array.isArray(r) && Array.isArray(u) ? n[e] = [...r, ...u] : h(r) && h(u) ? n[e] = a(r, u) : n[e] = u;
    }
  return n;
};
export {
  j as binaryInsertWith,
  a as deepMerge,
  y as filter,
  d as map,
  O as paginate,
  m as range,
  w as reduce,
  A as sort,
  l as sortBy,
  b as uniq,
  c as uniqBy,
  v as zip
};
