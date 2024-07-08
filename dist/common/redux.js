function f(n, i) {
  if (i)
    return i(f)(n);
  let t;
  const r = [], e = () => t;
  function c(s) {
    r.push(s);
  }
  function a(s) {
    t = n(t, s);
    for (let o = 0; o < r.length; o++)
      r[o]();
  }
  return a({ type: "@@INIT" }), {
    dispatch: a,
    subscribe: c,
    getState: e
  };
}
function l(...n) {
  return (i) => (t, ...r) => {
    const e = i(t, ...r);
    let c = () => {
      throw new Error(
        "Dispatching while constructing your middleware is not allowed."
      );
    };
    const a = {
      getState: e.getState,
      dispatch: (o, ...u) => c(o, ...u)
    };
    return c = n.map((o) => o(a)).reduceRight(
      (o, u) => u(o),
      e.dispatch
    ), {
      ...e,
      dispatch: c
    };
  };
}
function d(n) {
  const i = Object.keys(n);
  return (t = {}, r) => {
    const e = { ...t };
    let c = !1;
    for (const a of i) {
      const s = n[a], o = t[a], u = s(o, r);
      o !== u && (c = !0, e[a] = u);
    }
    return c ? e : t;
  };
}
function h(n, i) {
  function t(...r) {
    let e = { type: n };
    if (i) {
      const c = i(...r);
      if (!c)
        throw new Error("prepare function did not return an object");
      e = { ...e, ...c };
    } else
      e.payload = r[0];
    return e;
  }
  return t.toString = () => n, t.type = n, t.match = (r) => r.type === n, t;
}
export {
  l as applyMiddleware,
  d as combineReducers,
  h as createAction,
  f as createStore
};
