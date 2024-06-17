import '../assets/MenuBar.css';var z = Object.defineProperty;
var M = (t, e, n) => e in t ? z(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var h = (t, e, n) => (M(t, typeof e != "symbol" ? e + "" : e, n), n);
import { jsx as r, jsxs as v } from "react/jsx-runtime";
import { classes as f } from "../common/react.js";
import { Component as g, createRef as b } from "react";
import { Box as m } from "./Box.js";
import { Icon as B } from "./Icon.js";
const N = "_menuBar_esza9_9", O = "_font_esza9_13", w = "_hover_esza9_19", R = "_button_esza9_24", y = "_menu_esza9_9", I = "_item_esza9_36", T = "_toggle_esza9_44", W = "_toggle__check_esza9_48", j = "_over_esza9_55", D = "_button__text_esza9_60", E = "_separator_esza9_66", o = {
  menuBar: N,
  font: O,
  hover: w,
  button: R,
  menu: y,
  item: I,
  toggle: T,
  toggle__check: W,
  over: j,
  button__text: D,
  separator: E
};
class H extends g {
  constructor(n) {
    super(n);
    h(this, "handleClick");
    this.handleClick = (s) => {
      this.props.menuRef.current && (this.props.menuRef.current.contains(s.target) || this.props.onOutsideClick());
    };
  }
  componentWillMount() {
    window.addEventListener("click", this.handleClick);
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.handleClick);
  }
  render() {
    const { width: n, children: s } = this.props;
    return /* @__PURE__ */ r(
      "div",
      {
        className: o.menu,
        style: {
          width: n
        },
        children: s
      }
    );
  }
}
class L extends g {
  constructor(n) {
    super(n);
    h(this, "menuRef");
    this.menuRef = b();
  }
  render() {
    const { props: n } = this, {
      open: s,
      openWidth: c,
      children: i,
      disabled: l,
      display: a,
      onMouseOver: u,
      onClick: p,
      onOutsideClick: d,
      ...k
    } = n, { className: C, ...x } = k;
    return /* @__PURE__ */ v("div", { ref: this.menuRef, children: [
      /* @__PURE__ */ r(
        m,
        {
          className: f([
            o.button,
            o.font,
            o.hover,
            C
          ]),
          ...x,
          onClick: l ? () => null : p,
          onMouseOver: u,
          children: /* @__PURE__ */ r("span", { className: o.button__text, children: a })
        }
      ),
      s && /* @__PURE__ */ r(
        H,
        {
          width: c,
          menuRef: this.menuRef,
          onOutsideClick: d,
          children: i
        }
      )
    ] });
  }
}
const _ = (t) => {
  const {
    entry: e,
    children: n,
    openWidth: s,
    display: c,
    setOpenMenuBar: i,
    openMenuBar: l,
    setOpenOnHover: a,
    openOnHover: u,
    disabled: p,
    className: d
  } = t;
  return /* @__PURE__ */ r(
    L,
    {
      openWidth: s,
      display: c,
      disabled: p,
      open: l === e,
      className: d,
      onClick: () => {
        i(l === e ? null : e), a(!u);
      },
      onOutsideClick: () => {
        i(null), a(!1);
      },
      onMouseOver: () => {
        u && i(e);
      },
      children: n
    }
  );
}, S = (t) => {
  const { value: e, displayText: n, onClick: s, checked: c } = t;
  return /* @__PURE__ */ v(
    m,
    {
      className: f([
        o.font,
        o.item,
        o.toggle,
        o.hover
      ]),
      onClick: () => s(e),
      children: [
        /* @__PURE__ */ r("div", { className: o.toggle__check, children: c && /* @__PURE__ */ r(B, { size: 1.3, name: "check" }) }),
        n
      ]
    }
  );
};
_.MenuItemToggle = S;
const P = (t) => {
  const { value: e, displayText: n, onClick: s } = t;
  return /* @__PURE__ */ r(
    m,
    {
      className: f([o.font, o.item, o.hover]),
      onClick: () => s(e),
      children: n
    }
  );
};
_.MenuItem = P;
const U = () => /* @__PURE__ */ r("div", { className: o.separator });
_.Separator = U;
const q = (t) => {
  const { children: e } = t;
  return /* @__PURE__ */ r(m, { className: o.menuBar, children: e });
};
q.Dropdown = _;
export {
  _ as Dropdown,
  q as MenuBar
};
