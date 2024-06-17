import { jsx as r, jsxs as i } from "react/jsx-runtime";
import { Component as o, Fragment as c } from "react";
import { Box as m } from "./Box.js";
class h extends o {
  constructor(e) {
    super(e), this.timer = null, this.state = {
      currentIndex: 0,
      currentDisplay: []
    };
  }
  tick() {
    const { props: e, state: t } = this;
    if (t.currentIndex <= e.allMessages.length) {
      this.setState((n) => ({
        currentIndex: n.currentIndex + 1
      }));
      const { currentDisplay: s } = t;
      s.push(e.allMessages[t.currentIndex]);
    } else
      clearTimeout(this.timer), setTimeout(e.onFinished, e.finishedTimeout);
  }
  componentDidMount() {
    const { linesPerSecond: e = 2.5 } = this.props;
    this.timer = setInterval(() => this.tick(), 1e3 / e);
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  render() {
    return /* @__PURE__ */ r(m, { m: 1, children: this.state.currentDisplay.map((e) => /* @__PURE__ */ i(c, { children: [
      e,
      /* @__PURE__ */ r("br", {})
    ] }, e)) });
  }
}
export {
  h as FakeTerminal
};
