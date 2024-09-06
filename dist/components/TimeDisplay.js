import { useState as f, useRef as d, useEffect as m } from "react";
import { formatTime as v } from "../common/format.js";
const u = (t) => typeof t == "number" && Number.isFinite(t) && !Number.isNaN(t);
function b(t) {
  const {
    value: e = 0,
    auto: r = void 0,
    format: i = void 0
  } = t, [o, a] = f(
    () => u(e) ? e : 0
  ), [s, l] = f(
    u(e) ? e : void 0
  ), n = d(null);
  return m(() => (r !== void 0 && (n.current = setInterval(() => {
    const c = r === "up" ? 10 : -10;
    a((p) => Math.max(0, p + c));
  }, 1e3)), () => {
    n.current && clearInterval(n.current);
  }), [r]), m(() => {
    e !== s && (l(e), a(e));
  }, [e, s]), u(e) ? i ? i(o) : v(o) : e || null;
}
export {
  b as TimeDisplay
};
