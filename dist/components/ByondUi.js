import { jsx as s } from "react/jsx-runtime";
import { shallowDiffers as r } from "../common/react.js";
import { debounce as a } from "../common/timer.js";
import { Component as c, createRef as m } from "react";
import { computeBoxProps as l } from "./Box.js";
const o = [], h = (n) => {
  const t = o.length;
  o.push(null);
  const e = n || "byondui_" + t;
  return {
    render: (i) => {
      o[t] = e, Byond.winset(e, i);
    },
    unmount: () => {
      o[t] = null, Byond.winset(e, {
        parent: ""
      });
    }
  };
};
window.addEventListener("beforeunload", () => {
  for (let n = 0; n < o.length; n++) {
    const t = o[n];
    typeof t == "string" && (o[n] = null, Byond.winset(t, {
      parent: ""
    }));
  }
});
const u = (n) => {
  const t = window.devicePixelRatio ?? 1, e = n.getBoundingClientRect();
  return {
    pos: [e.left * t, e.top * t],
    size: [
      (e.right - e.left) * t,
      (e.bottom - e.top) * t
    ]
  };
};
class U extends c {
  constructor(t) {
    var e;
    super(t), this.containerRef = m(), this.byondUiElement = h((e = t.params) == null ? void 0 : e.id), this.handleResize = a(() => {
      this.forceUpdate();
    }, 100);
  }
  shouldComponentUpdate(t) {
    const { params: e = {}, ...i } = this.props, { params: d = {}, ...p } = t;
    return r(e, d) || r(i, p);
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize), this.componentDidUpdate(), this.handleResize();
  }
  componentDidUpdate() {
    const { params: t = {} } = this.props, e = u(this.containerRef.current);
    this.byondUiElement.render({
      parent: Byond.windowId,
      ...t,
      pos: e.pos[0] + "," + e.pos[1],
      size: e.size[0] + "x" + e.size[1]
    });
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize), this.byondUiElement.unmount();
  }
  render() {
    const { params: t, ...e } = this.props;
    return /* @__PURE__ */ s("div", { ref: this.containerRef, ...l(e), children: /* @__PURE__ */ s("div", { style: { minHeight: "22px" } }) });
  }
}
export {
  U as ByondUi
};
