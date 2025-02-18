function p(...n) {
  return Array(Math.max(...n.map((t) => t.length))).fill(void 0).map((t, r) => n.map((i) => i[r]));
}
function a(n, t) {
  return n < t ? -1 : n > t ? 1 : 0;
}
export {
  a as stringCompare,
  p as zip
};
