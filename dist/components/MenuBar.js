import { jsx as t, jsxs as f } from "react/jsx-runtime";
import { useRef as B, useEffect as h } from "react";
import { classes as p } from "../common/react.js";
import { Box as l } from "./Box.js";
import { Icon as v } from "./Icon.js";
function k(n) {
  const { children: e, menuRef: o, onOutsideClick: r, width: a } = n;
  function u(i) {
    var c;
    (c = o.current) != null && c.contains(i.target) || r();
  }
  return h(() => (document.addEventListener("click", u), () => {
    document.removeEventListener("click", u);
  }), []), /* @__PURE__ */ t(
    "div",
    {
      className: "Menubar__menu",
      style: {
        width: a
      },
      children: e
    }
  );
}
function N(n) {
  const {
    children: e,
    className: o,
    disabled: r,
    display: a,
    onClick: u,
    onMouseOver: i,
    open: c,
    openWidth: s,
    onOutsideClick: m,
    ...M
  } = n, _ = B(null);
  return /* @__PURE__ */ f("div", { ref: _, children: [
    /* @__PURE__ */ t(
      l,
      {
        className: p([
          "MenuBar__MenuBarButton",
          "MenuBar__font",
          "MenuBar__hover",
          o
        ]),
        ...M,
        onClick: r ? () => null : u,
        onMouseOver: i,
        children: /* @__PURE__ */ t("span", { className: "MenuBar__MenuBarButton-text", children: a })
      }
    ),
    c && /* @__PURE__ */ t(
      k,
      {
        width: s,
        menuRef: _,
        onOutsideClick: m,
        children: e
      }
    )
  ] });
}
function d(n) {
  const {
    entry: e,
    children: o,
    openWidth: r,
    display: a,
    setOpenMenuBar: u,
    openMenuBar: i,
    setOpenOnHover: c,
    openOnHover: s,
    disabled: m,
    className: M
  } = n;
  return /* @__PURE__ */ t(
    N,
    {
      openWidth: r,
      display: a,
      disabled: m,
      open: i === e,
      className: M,
      onClick: () => {
        u(i === e ? null : e), c(!s);
      },
      onOutsideClick: () => {
        u(null), c(!1);
      },
      onMouseOver: () => {
        s && u(e);
      },
      children: o
    }
  );
}
O.Dropdown = d;
function g(n) {
  const { value: e, displayText: o, onClick: r, checked: a } = n;
  return /* @__PURE__ */ f(
    l,
    {
      className: p([
        "MenuBar__font",
        "MenuBar__MenuItem",
        "MenuBar__MenuItemToggle",
        "MenuBar__hover"
      ]),
      onClick: () => r(e),
      children: [
        /* @__PURE__ */ t("div", { className: "MenuBar__MenuItemToggle__check", children: a && /* @__PURE__ */ t(v, { size: 1.3, name: "check" }) }),
        o
      ]
    }
  );
}
d.MenuItemToggle = g;
function C(n) {
  const { value: e, displayText: o, onClick: r } = n;
  return /* @__PURE__ */ t(
    l,
    {
      className: p([
        "MenuBar__font",
        "MenuBar__MenuItem",
        "MenuBar__hover"
      ]),
      onClick: () => r == null ? void 0 : r(e),
      children: o
    }
  );
}
d.MenuItem = C;
function I() {
  return /* @__PURE__ */ t("div", { className: "MenuBar__Separator" });
}
d.Separator = I;
function O(n) {
  const { children: e } = n;
  return /* @__PURE__ */ t(l, { className: "MenuBar", children: e });
}
export {
  O as MenuBar
};
