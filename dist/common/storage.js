var l = Object.defineProperty;
var D = (r, e, t) => e in r ? l(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var s = (r, e, t) => D(r, typeof e != "symbol" ? e + "" : e, t);
/**
 * Browser-agnostic abstraction of key-value web storage.
 *
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
const h = 0, P = 1, B = 2;
const w = "tgui", a = "storage-v1", m = "readonly", i = "readwrite", d = (r) => () => {
  try {
    return !!r();
  } catch {
    return !1;
  }
}, I = d(
  () => window.localStorage && window.localStorage.getItem
), E = d(
  () => (window.indexedDB || window.msIndexedDB) && (window.IDBTransaction || window.msIDBTransaction)
);
class g {
  constructor() {
    s(this, "impl", 0);
    s(this, "store", {});
    this.impl = 0, this.store = {};
  }
  get(e) {
    return this.store[e];
  }
  set(e, t) {
    this.store[e] = t;
  }
  remove(e) {
    this.store[e] = void 0;
  }
  clear() {
    this.store = {};
  }
}
class u {
  constructor() {
    s(this, "impl", 1);
    this.impl = 1;
  }
  get(e) {
    const t = localStorage.getItem(e);
    if (typeof t == "string")
      return JSON.parse(t);
  }
  set(e, t) {
    localStorage.setItem(e, JSON.stringify(t));
  }
  remove(e) {
    localStorage.removeItem(e);
  }
  clear() {
    localStorage.clear();
  }
}
class _ {
  constructor() {
    s(this, "impl", 2);
    s(this, "dbPromise");
    this.impl = 2, this.dbPromise = new Promise((e, t) => {
      const o = (window.indexedDB || window.msIndexedDB).open(w, 1);
      o.onupgradeneeded = () => {
        try {
          o.result.createObjectStore(a);
        } catch {
          t(new Error("Failed to upgrade IDB: " + o.error));
        }
      }, o.onsuccess = () => e(o.result), o.onerror = () => {
        t(new Error("Failed to open IDB: " + o.error));
      };
    });
  }
  getStore(e) {
    return this.dbPromise.then(
      (t) => t.transaction(a, e).objectStore(a)
    );
  }
  async get(e) {
    const t = await this.getStore(m);
    return new Promise((c, o) => {
      const n = t.get(e);
      n.onsuccess = () => c(n.result), n.onerror = () => o(n.error);
    });
  }
  async set(e, t) {
    t === null && (t = void 0), (await this.getStore(i)).put(t, e);
  }
  async remove(e) {
    (await this.getStore(i)).delete(e);
  }
  async clear() {
    (await this.getStore(i)).clear();
  }
}
class S {
  constructor() {
    s(this, "backendPromise");
    this.backendPromise = (async () => {
      if (E())
        try {
          const e = new _();
          return await e.dbPromise, e;
        } catch {
        }
      return I() ? new u() : new g();
    })();
  }
  async get(e) {
    return (await this.backendPromise).get(e);
  }
  async set(e, t) {
    return (await this.backendPromise).set(e, t);
  }
  async remove(e) {
    return (await this.backendPromise).remove(e);
  }
  async clear() {
    return (await this.backendPromise).clear();
  }
}
const k = new S();
export {
  B as IMPL_INDEXED_DB,
  P as IMPL_LOCAL_STORAGE,
  h as IMPL_MEMORY,
  k as storage
};
