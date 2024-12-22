import { jsx as a } from "react/jsx-runtime";
import { useRef as p } from "react";
import { computeBoxProps as f } from "../common/ui.js";
const l = 5;
function E(m) {
  const {
    fixBlur: r = !0,
    fixErrors: n = !1,
    objectFit: s = "fill",
    src: o,
    ...i
  } = m, t = p(0), e = f(i);
  return e.style = {
    ...e.style,
    "-ms-interpolation-mode": r ? "nearest-neighbor" : "auto",
    imageRendering: r ? "pixelated" : "auto",
    objectFit: s
  }, /* @__PURE__ */ a(
    "img",
    {
      onError: (c) => {
        if (n && t.current < l) {
          const u = c.currentTarget;
          setTimeout(() => {
            u.src = `${o}?attempt=${t.current}`, t.current++;
          }, 1e3);
        }
      },
      src: o,
      ...e,
      alt: "dm icon"
    }
  );
}
export {
  E as Image
};
