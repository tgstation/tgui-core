import { jsx as c } from "react/jsx-runtime";
import { useRef as p } from "react";
import { computeBoxProps as u } from "../common/ui.js";
const g = 5;
function C(o) {
  const {
    fixBlur: r = !0,
    fixErrors: m = !1,
    objectFit: s = "fill",
    src: A,
    ...n
  } = o, t = p(0), e = u(n);
  return e.style = {
    ...e.style,
    "-ms-interpolation-mode": r ? "nearest-neighbor" : "auto",
    imageRendering: r ? "pixelated" : "auto",
    objectFit: s
  }, /* @__PURE__ */ c(
    "img",
    {
      onError: (i) => {
        if (m && t.current < g) {
          const a = i.currentTarget;
          setTimeout(() => {
            a.src = `${A}?attempt=${t.current}`, t.current++;
          }, 1e3);
        }
      },
      src: A || /** Use transparent base64 pixel if there is no src. So we don't get broken image icon when using assets */
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",
      ...e,
      alt: "dm icon"
    }
  );
}
export {
  C as Image
};
