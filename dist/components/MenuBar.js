var C = Object.defineProperty;
var x = (r, e, n) => e in r ? C(r, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : r[e] = n;
var h = (r, e, n) => x(r, typeof e != "symbol" ? e + "" : e, n);
import { jsx as o, jsxs as f } from "react/jsx-runtime";
import { Component as B, createRef as N } from "react";
import { classes as M } from "../common/react.js";
import { Box as l } from "./Box.js";
import { Icon as g } from "./Icon.js";
class I extends B {
  constructor(n) {
    super(n);
    h(this, "handleClick");
    this.handleClick = (t) => {
      this.props.menuRef.current && (this.props.menuRef.current.contains(t.target) || this.props.onOutsideClick());
    };
  }
  componentWillMount() {
    window.addEventListener("click", this.handleClick);
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.handleClick);
  }
  render() {
    const { width: n, children: t } = this.props;
    return /* @__PURE__ */ o(
      "div",
      {
        className: "Menubar__menu",
        style: {
          width: n
        },
        children: t
      }
    );
  }
}
class O extends B {
  constructor(n) {
    super(n);
    h(this, "menuRef");
    this.menuRef = N();
  }
  render() {
    const { props: n } = this, {
      open: t,
      openWidth: s,
      children: i,
      disabled: c,
      display: u,
      onMouseOver: a,
      onClick: m,
      onOutsideClick: p,
      ..._
    } = n, { className: k, ...v } = _;
    return /* @__PURE__ */ f("div", { ref: this.menuRef, children: [
      /* @__PURE__ */ o(
        l,
        {
          className: M([
            "MenuBar__MenuBarButton",
            "MenuBar__font",
            "MenuBar__hover",
            k
          ]),
          ...v,
          onClick: c ? () => null : m,
          onMouseOver: a,
          children: /* @__PURE__ */ o("span", { className: "MenuBar__MenuBarButton-text", children: u })
        }
      ),
      t && /* @__PURE__ */ o(
        I,
        {
          width: s,
          menuRef: this.menuRef,
          onOutsideClick: p,
          children: i
        }
      )
    ] });
  }
}
function d(r) {
  const {
    entry: e,
    children: n,
    openWidth: t,
    display: s,
    setOpenMenuBar: i,
    openMenuBar: c,
    setOpenOnHover: u,
    openOnHover: a,
    disabled: m,
    className: p
  } = r;
  return /* @__PURE__ */ o(
    O,
    {
      openWidth: t,
      display: s,
      disabled: m,
      open: c === e,
      className: p,
      onClick: () => {
        i(c === e ? null : e), u(!a);
      },
      onOutsideClick: () => {
        i(null), u(!1);
      },
      onMouseOver: () => {
        a && i(e);
      },
      children: n
    }
  );
}
function w(r) {
  const { value: e, displayText: n, onClick: t, checked: s } = r;
  return /* @__PURE__ */ f(
    l,
    {
      className: M([
        "MenuBar__font",
        "MenuBar__MenuItem",
        "MenuBar__MenuItemToggle",
        "MenuBar__hover"
      ]),
      onClick: () => t(e),
      children: [
        /* @__PURE__ */ o("div", { className: "MenuBar__MenuItemToggle__check", children: s && /* @__PURE__ */ o(g, { size: 1.3, name: "check" }) }),
        n
      ]
    }
  );
}
d.MenuItemToggle = w;
function R(r) {
  const { value: e, displayText: n, onClick: t } = r;
  return /* @__PURE__ */ o(
    l,
    {
      className: M([
        "MenuBar__font",
        "MenuBar__MenuItem",
        "MenuBar__hover"
      ]),
      onClick: () => t(e),
      children: n
    }
  );
}
d.MenuItem = R;
function y() {
  return /* @__PURE__ */ o("div", { className: "MenuBar__Separator" });
}
d.Separator = y;
function T(r) {
  const { children: e } = r;
  return /* @__PURE__ */ o(l, { className: "MenuBar", children: e });
}
T.Dropdown = d;
export {
  d as Dropdown,
  T as MenuBar
};
