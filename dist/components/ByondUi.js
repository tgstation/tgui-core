import { jsx as s } from "react/jsx-runtime";
import { Component as a, createRef as c } from "react";
import { shallowDiffers as r } from "../common/react.js";
import { debounce as m } from "../common/timer.js";
import { computeBoxProps as l } from "./Box.js";
const o = [];
function h(t) {
  const n = o.length;
  o.push(null);
  const e = t || "byondui_" + n;
  return {
    render: (i) => {
      o[n] = e, Byond.winset(e, i);
    },
    unmount: () => {
      o[n] = null, Byond.winset(e, {
        parent: ""
      });
    }
  };
}
window.addEventListener("beforeunload", () => {
  for (let t = 0; t < o.length; t++) {
    const n = o[t];
    typeof n == "string" && (o[t] = null, Byond.winset(n, {
      parent: ""
    }));
  }
});
function u(t) {
  const n = window.devicePixelRatio ?? 1, e = t.getBoundingClientRect();
  return {
    pos: [e.left * n, e.top * n],
    size: [
      (e.right - e.left) * n,
      (e.bottom - e.top) * n
    ]
  };
}
class U extends a {
  constructor(n) {
    var e;
    super(n), this.containerRef = c(), this.byondUiElement = h((e = n.params) == null ? void 0 : e.id), this.handleResize = m(() => {
      this.forceUpdate();
    }, 100);
  }
  shouldComponentUpdate(n) {
    const { params: e = {}, ...i } = this.props, { params: d = {}, ...p } = n;
    return r(e, d) || r(i, p);
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize), this.componentDidUpdate(), this.handleResize();
  }
  componentDidUpdate() {
    const { params: n = {} } = this.props, e = u(this.containerRef.current);
    this.byondUiElement.render({
      parent: Byond.windowId,
      ...n,
      pos: e.pos[0] + "," + e.pos[1],
      size: e.size[0] + "x" + e.size[1]
    });
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize), this.byondUiElement.unmount();
  }
  render() {
    const { params: n, ...e } = this.props;
    return /* @__PURE__ */ s("div", { ref: this.containerRef, ...l(e), children: /* @__PURE__ */ s("div", { style: { minHeight: "22px" } }) });
  }
}
export {
  U as ByondUi
};
