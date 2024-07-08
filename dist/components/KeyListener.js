var t = Object.defineProperty;
var e = (s, o, p) => o in s ? t(s, o, { enumerable: !0, configurable: !0, writable: !0, value: p }) : s[o] = p;
var i = (s, o, p) => e(s, typeof o != "symbol" ? o + "" : o, p);
import { Component as r } from "react";
import { listenForKeyEvents as h } from "../common/hotkeys.js";
class d extends r {
  constructor(p) {
    super(p);
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
