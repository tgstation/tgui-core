function m(...a) {
  return Array(Math.max(...a.map((p) => p.length))).fill(void 0).map((p, t) => a.map((i) => i[t]));
}
export {
  m as zip
};
