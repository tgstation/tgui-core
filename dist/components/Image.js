import { jsx as p } from "react/jsx-runtime";
import { useRef as a } from "react";
import { computeBoxProps as f } from "./Box.js";
const l = 5;
function E(o) {
  const {
    fixBlur: s = !0,
    fixErrors: m = !1,
    objectFit: n = "fill",
    src: e,
    ...c
  } = o, t = a(0), r = f(c);
  return r.style = {
    ...r.style,
    "-ms-interpolation-mode": s ? "nearest-neighbor" : "auto",
    objectFit: n
  }, /* @__PURE__ */ p(
    "img",
    {
      onError: (i) => {
        if (m && t.current < l) {
          const u = i.currentTarget;
          setTimeout(() => {
            u.src = `${e}?attempt=${t.current}`, t.current++;
          }, 1e3);
        }
      },
      src: e,
      ...r,
      alt: "dm icon"
    }
  );
}
export {
  E as Image
};
