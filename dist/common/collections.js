function s(...n) {
  if (n.length === 0)
    return [];
  const o = n.length, r = n[0].length, u = [];
  for (let t = 0; t < r; t++) {
    const l = [];
    for (let e = 0; e < o; e++)
      l.push(n[e][t]);
    u.push(l);
  }
  return u;
}
export {
  s as zip
};
