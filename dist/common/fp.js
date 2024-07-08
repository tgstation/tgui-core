const n = (...t) => (e, ...f) => {
  let o = e;
  for (const r of t)
    Array.isArray(r) ? o = n(...r)(o, ...f) : r && (o = r(o, ...f));
  return o;
};
export {
  n as flow
};
