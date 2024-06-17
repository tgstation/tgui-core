var h = Object.defineProperty;
var c = (e, s, t) => s in e ? h(e, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[s] = t;
var n = (e, s, t) => (c(e, typeof s != "symbol" ? s + "" : s, t), t);
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
class u {
  constructor() {
    n(this, "listeners");
    this.listeners = {};
  }
  on(s, t) {
    this.listeners[s] = this.listeners[s] || [], this.listeners[s].push(t);
  }
  off(s, t) {
    const r = this.listeners[s];
    if (!r)
      throw new Error(`There is no listeners for "${s}"`);
    this.listeners[s] = r.filter((i) => i !== t);
  }
  emit(s, ...t) {
    const r = this.listeners[s];
    if (r)
      for (let i = 0, l = r.length; i < l; i += 1) {
        const o = r[i];
        o(...t);
      }
  }
  clear() {
    this.listeners = {};
  }
}
export {
  u as EventEmitter
};
