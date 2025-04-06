import { jsxs as B, jsx as n } from "react/jsx-runtime";
import { useRef as f } from "react";
import { classes as d } from "../common/react.js";
import { Box as c } from "./Box.js";
import { Floating as h } from "./Floating.js";
import { Icon as v } from "./Icon.js";
function N(r) {
  const {
    children: e,
    className: a,
    disabled: o,
    display: t,
    onClick: u,
    onMouseOver: s,
    open: m,
    openWidth: l,
    onOutsideClick: _,
    ...M
  } = r, p = f(null);
  return /* @__PURE__ */ n(
    h,
    {
      allowedOutsideClasses: ".Menubar_inner",
      content: /* @__PURE__ */ n(
        "div",
        {
          className: "MenuBar__menu",
          style: {
            width: l
          },
          children: e
        }
      ),
      children: /* @__PURE__ */ n("div", { ref: p, className: "Menubar_inner", children: /* @__PURE__ */ n(
        c,
        {
          className: d([
            "MenuBar__MenuBarButton",
            "MenuBar__font",
            "MenuBar__hover",
            a
          ]),
          ...M,
          onClick: o ? () => null : u,
          onMouseOver: s,
          children: /* @__PURE__ */ n("span", { className: "MenuBar__MenuBarButton-text", children: t })
        }
      ) })
    }
  );
}
function i(r) {
  const {
    entry: e,
    children: a,
    openWidth: o,
    display: t,
    setOpenMenuBar: u,
    openMenuBar: s,
    setOpenOnHover: m,
    openOnHover: l,
    disabled: _,
    className: M
  } = r;
  return /* @__PURE__ */ n(
    N,
    {
      openWidth: o,
      display: t,
      disabled: _,
      open: s === e,
      className: M,
      onClick: () => {
        u(s === e ? null : e), m(!l);
      },
      onOutsideClick: () => {
        u(null), m(!1);
      },
      onMouseOver: () => {
        l && u(e);
      },
      children: a
    }
  );
}
O.Dropdown = i;
function k(r) {
  const { value: e, displayText: a, onClick: o, checked: t } = r;
  return /* @__PURE__ */ B(
    c,
    {
      className: d([
        "MenuBar__font",
        "MenuBar__MenuItem",
        "MenuBar__MenuItemToggle",
        "MenuBar__hover"
      ]),
      onClick: () => o(e),
      children: [
        /* @__PURE__ */ n("div", { className: "MenuBar__MenuItemToggle__check", children: /* @__PURE__ */ n(v, { size: 1.3, name: t ? "check" : "" }) }),
        a
      ]
    }
  );
}
i.MenuItemToggle = k;
function g(r) {
  const { value: e, displayText: a, onClick: o } = r;
  return /* @__PURE__ */ n(
    c,
    {
      className: d([
        "MenuBar__font",
        "MenuBar__MenuItem",
        "MenuBar__hover"
      ]),
      onClick: () => o == null ? void 0 : o(e),
      children: a
    }
  );
}
i.MenuItem = g;
function I() {
  return /* @__PURE__ */ n("div", { className: "MenuBar__Separator" });
}
i.Separator = I;
function O(r) {
  const { children: e } = r;
  return /* @__PURE__ */ n(c, { className: "MenuBar", children: e });
}
export {
  O as MenuBar
};
