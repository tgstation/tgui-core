var t = Object.defineProperty;
var e = (p, o, s) => o in p ? t(p, o, { enumerable: !0, configurable: !0, writable: !0, value: s }) : p[o] = s;
var i = (p, o, s) => (e(p, typeof o != "symbol" ? o + "" : o, s), s);
import { Component as r } from "react";
import { listenForKeyEvents as h } from "../hotkeys.js";
class d extends r {
  constructor(s) {
    super(s);
    i(this, "dispose");
    this.dispose = h((n) => {
      this.props.onKey && this.props.onKey(n), n.isDown() && this.props.onKeyDown && this.props.onKeyDown(n), n.isUp() && this.props.onKeyUp && this.props.onKeyUp(n);
    });
  }
  componentWillUnmount() {
    this.dispose();
  }
  render() {
    return null;
  }
}
export {
  d as KeyListener
};
