/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
const l = (n, s) => {
  if (s)
    return s(l)(n);
  let t, r = [];
  const e = () => t, c = (a) => {
    r.push(a);
  }, i = (a) => {
    t = n(t, a);
    for (let o = 0; o < r.length; o++)
      r[o]();
  };
  return i({ type: "@@INIT" }), {
    dispatch: i,
    subscribe: c,
    getState: e
  };
}, d = (...n) => (s) => (t, ...r) => {
  const e = s(t, ...r);
  let c = () => {
    throw new Error(
      "Dispatching while constructing your middleware is not allowed."
    );
  };
  const i = {
    getState: e.getState,
    dispatch: (o, ...u) => c(o, ...u)
  };
  return c = n.map((o) => o(i)).reduceRight(
    (o, u) => u(o),
    e.dispatch
  ), {
    ...e,
    dispatch: c
  };
}, h = (n) => {
  const s = Object.keys(n);
  return (t = {}, r) => {
    const e = { ...t };
    let c = !1;
    for (const i of s) {
      const a = n[i], o = t[i], u = a(o, r);
      o !== u && (c = !0, e[i] = u);
    }
    return c ? e : t;
  };
}, p = (n, s) => {
  const t = (...r) => {
    let e = { type: n };
    if (s) {
      const c = s(...r);
      if (!c)
        throw new Error("prepare function did not return an object");
      e = { ...e, ...c };
    } else
      e.payload = r[0];
    return e;
  };
  return t.toString = () => n, t.type = n, t.match = (r) => r.type === n, t;
};
export {
  d as applyMiddleware,
  h as combineReducers,
  p as createAction,
  l as createStore
};
