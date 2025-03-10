import { jsx as r, jsxs as B } from "react/jsx-runtime";
import { useRef as f } from "react";
import { classes as _ } from "../common/react.js";
import { Box as m } from "./Box.js";
import { Icon as h } from "./Icon.js";
import { Popper as v } from "./Popper.js";
function k(n) {
  const { children: e, width: o } = n;
  return /* @__PURE__ */ r(
    "div",
    {
      className: "Menubar__menu",
      style: {
        width: o
      },
      children: e
    }
  );
}
function N(n) {
  const {
    children: e,
    className: o,
    disabled: t,
    display: a,
    onClick: u,
    onMouseOver: s,
    open: c,
    openWidth: l,
    onOutsideClick: i,
    ...M
  } = n, p = f(null);
  return /* @__PURE__ */ B("div", { ref: p, children: [
    /* @__PURE__ */ r(
      m,
      {
        className: _([
          "MenuBar__MenuBarButton",
          "MenuBar__font",
          "MenuBar__hover",
          o
        ]),
        ...M,
        onClick: t ? () => null : u,
        onMouseOver: s,
        children: /* @__PURE__ */ r("span", { className: "MenuBar__MenuBarButton-text", children: a })
      }
    ),
    /* @__PURE__ */ r(
      v,
      {
        onClickOutside: i,
        placement: "bottom-start",
        content: /* @__PURE__ */ r(
          k,
          {
            width: l,
            menuRef: p,
            onOutsideClick: i,
            children: e
          }
        ),
        isOpen: c
      }
    )
  ] });
}
function d(n) {
  const {
    entry: e,
    children: o,
    openWidth: t,
    display: a,
    setOpenMenuBar: u,
    openMenuBar: s,
    setOpenOnHover: c,
    openOnHover: l,
    disabled: i,
    className: M
  } = n;
  return /* @__PURE__ */ r(
    N,
    {
      openWidth: t,
      display: a,
      disabled: i,
      open: s === e,
      className: M,
      onClick: () => {
        u(s === e ? null : e), c(!l);
      },
      onOutsideClick: () => {
        u(null), c(!1);
      },
      onMouseOver: () => {
        l && u(e);
      },
      children: o
    }
  );
}
C.Dropdown = d;
function O(n) {
  const { value: e, displayText: o, onClick: t, checked: a } = n;
  return /* @__PURE__ */ B(
    m,
    {
      className: _([
        "MenuBar__font",
        "MenuBar__MenuItem",
        "MenuBar__MenuItemToggle",
        "MenuBar__hover"
      ]),
      onClick: () => t(e),
      children: [
        /* @__PURE__ */ r("div", { className: "MenuBar__MenuItemToggle__check", children: /* @__PURE__ */ r(h, { size: 1.3, name: a ? "check" : "" }) }),
        o
      ]
    }
  );
}
d.MenuItemToggle = O;
function I(n) {
  const { value: e, displayText: o, onClick: t } = n;
  return /* @__PURE__ */ r(
    m,
    {
      className: _([
        "MenuBar__font",
        "MenuBar__MenuItem",
        "MenuBar__hover"
      ]),
      onClick: () => t == null ? void 0 : t(e),
      children: o
    }
  );
}
d.MenuItem = I;
function g() {
  return /* @__PURE__ */ r("div", { className: "MenuBar__Separator" });
}
d.Separator = g;
function C(n) {
  const { children: e } = n;
  return /* @__PURE__ */ r(m, { className: "MenuBar", children: e });
}
export {
  C as MenuBar
};
