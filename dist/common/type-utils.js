function i(n) {
  const o = {};
  for (const e in n)
    if (Array.isArray(n[e])) {
      const r = n[e];
      if (n[e].length > 0) {
        o[e] = r[0];
        continue;
      }
      o[e] = "emptyarray";
    } else if (typeof n[e] == "object" && n[e] !== null)
      o[e] = "object (inspect) || Record<string, any>";
    else if (typeof n[e] == "number") {
      const r = Number(n[e]);
      if (r === 1 || r === 0) {
        o[e] = `${r}, BooleanLike?`;
        continue;
      }
      o[e] = n[e];
    }
  return o;
}
export {
  i as getShallowTypes
};
