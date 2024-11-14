import { useState as l, useRef as p, useEffect as f } from "react";
import { formatTime as d } from "../common/format.js";
import { isSafeNumber as u } from "../common/math.js";
function I(s) {
  const {
    value: e = 0,
    auto: t = void 0,
    format: n = void 0
  } = s, [o, a] = l(
    () => u(e) ? e : 0
  ), [i, m] = l(
    u(e) ? e : void 0
  ), r = p(null);
  return f(() => (t !== void 0 && (r.current = setInterval(() => {
    const c = t === "up" ? 10 : -10;
    a((v) => Math.max(0, v + c));
  }, 1e3)), () => {
    r.current && clearInterval(r.current);
  }), [t]), f(() => {
    e !== i && (m(e), a(e));
  }, [e, i]), u(e) ? n ? n(o) : d(o) : e || null;
}
export {
  I as TimeDisplay
};
