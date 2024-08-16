import { useState as l, useRef as d, useEffect as f } from "react";
import { formatTime as v } from "../common/format.js";
const u = (t) => typeof t == "number" && Number.isFinite(t) && !Number.isNaN(t);
function b(t) {
  const {
    value: e = 0,
    auto: r = void 0,
    format: o = void 0
  } = t, [i, a] = l(
    () => u(e) ? e : 0
  ), [s, m] = l(
    u(e) ? e : void 0
  ), n = d(null);
  return f(() => (console.log("auto", r), r !== void 0 && (n.current = setInterval(() => {
    const c = r === "up" ? 10 : -10;
    a((p) => Math.max(0, p + c));
  }, 1e3)), () => {
    n.current && clearInterval(n.current);
  }), [r]), f(() => {
    e !== s && (m(e), a(e));
  }, [e, s]), u(e) ? o ? o(i) : v(i) : e || null;
}
export {
  b as TimeDisplay
};
