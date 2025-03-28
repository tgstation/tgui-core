var n = /* @__PURE__ */ ((r) => (r.A = "a", r.Alt = "Alt", r.Backspace = "Backspace", r.Control = "Control", r.D = "d", r.Delete = "Delete", r.Down = "ArrowDown", r.E = "e", r.End = "End", r.Enter = "Enter", r.Esc = "Esc", r.Escape = "Escape", r.Home = "Home", r.Insert = "Insert", r.Left = "ArrowLeft", r.N = "n", r.PageDown = "PageDown", r.PageUp = "PageUp", r.Right = "ArrowRight", r.S = "s", r.Shift = "Shift", r.Space = " ", r.Tab = "Tab", r.Up = "ArrowUp", r.W = "w", r.Z = "z", r))(n || {});
function e(r) {
  return r === "Esc" || r === "Escape";
}
function a(r) {
  return r >= "a" && r <= "z";
}
function i(r) {
  return r >= "0" && r <= "9";
}
function s(r) {
  return r === "n" || r === "s" || r === "w" || r === "e";
}
function t(r) {
  return r === "ArrowUp" || r === "ArrowDown" || r === "ArrowLeft" || r === "ArrowRight";
}
function o(r) {
  return r === "w" || r === "a" || r === "s" || r === "d";
}
function c(r) {
  return o(r) || t(r);
}
export {
  n as KEY,
  a as isAlphabetic,
  t as isArrow,
  s as isCardinal,
  e as isEscape,
  c as isMovement,
  i as isNumeric,
  o as isWasd
};
