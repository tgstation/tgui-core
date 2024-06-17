/**
 * Browser-agnostic abstraction of key-value web storage.
 *
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
const E = 0, h = 1, S = 2;
const d = "tgui", c = "storage-v1", l = "readonly", a = "readwrite", i = (o) => () => {
  try {
    return !!o();
  } catch {
    return !1;
  }
}, w = i(
  () => window.localStorage && window.localStorage.getItem
), D = i(
  () => (window.indexedDB || window.msIndexedDB) && (window.IDBTransaction || window.msIDBTransaction)
);
class g {
  constructor() {
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
class m {
  constructor() {
    this.impl = 2, this.dbPromise = new Promise((e, t) => {
      const r = (window.indexedDB || window.msIndexedDB).open(d, 1);
      r.onupgradeneeded = () => {
        try {
          r.result.createObjectStore(c);
        } catch {
          t(new Error("Failed to upgrade IDB: " + r.error));
        }
      }, r.onsuccess = () => e(r.result), r.onerror = () => {
        t(new Error("Failed to open IDB: " + r.error));
      };
    });
  }
  getStore(e) {
    return this.dbPromise.then(
      (t) => t.transaction(c, e).objectStore(c)
    );
  }
  async get(e) {
    const t = await this.getStore(l);
    return new Promise((s, r) => {
      const n = t.get(e);
      n.onsuccess = () => s(n.result), n.onerror = () => r(n.error);
    });
  }
  async set(e, t) {
    t === null && (t = void 0), (await this.getStore(a)).put(t, e);
  }
  async remove(e) {
    (await this.getStore(a)).delete(e);
  }
  async clear() {
    (await this.getStore(a)).clear();
  }
}
class I {
  constructor() {
    this.backendPromise = (async () => {
      if (D())
        try {
          const e = new m();
          return await e.dbPromise, e;
        } catch {
        }
      return w() ? new u() : new g();
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
const b = new I();
export {
  S as IMPL_INDEXED_DB,
  h as IMPL_LOCAL_STORAGE,
  E as IMPL_MEMORY,
  b as storage
};
