var g = Object.defineProperty;
var _ = (e, t, s) => t in e ? g(e, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : e[t] = s;
var l = (e, t, s) => (_(e, typeof t != "symbol" ? t + "" : t, s), s);
import { jsxs as d, jsx as h } from "react/jsx-runtime";
import { Component as v, createRef as $ } from "react";
import { resolveAsset as p } from "../assets.js";
import { Image as f } from "./Image.js";
var b = /* @__PURE__ */ ((e) => (e.Head = "head", e.Chest = "chest", e.LeftArm = "l_arm", e.RightArm = "r_arm", e.LeftLeg = "l_leg", e.RightLeg = "r_leg", e.Eyes = "eyes", e.Mouth = "mouth", e.Groin = "groin", e))(b || {});
const C = (e, t) => {
  if (t < 1)
    return null;
  if (t < 10) {
    if (e > 10 && e < 15)
      return "r_leg";
    if (e > 17 && e < 22)
      return "l_leg";
  } else if (t < 13) {
    if (e > 8 && e < 11)
      return "r_arm";
    if (e > 12 && e < 20)
      return "groin";
    if (e > 21 && e < 24)
      return "l_arm";
  } else if (t < 22) {
    if (e > 8 && e < 11)
      return "r_arm";
    if (e > 12 && e < 20)
      return "chest";
    if (e > 21 && e < 24)
      return "l_arm";
  } else if (t < 30 && e > 12 && e < 20)
    return t > 23 && t < 24 && e > 15 && e < 17 ? "mouth" : t > 25 && t < 27 && e > 14 && e < 18 ? "eyes" : "head";
  return null;
};
class A extends v {
  constructor() {
    super(...arguments);
    l(this, "ref", $());
    l(this, "state", {
      hoverZone: null
    });
  }
  render() {
    const { hoverZone: s } = this.state, { scale: r = 3, selectedZone: n, theme: c = "midnight" } = this.props;
    return /* @__PURE__ */ d(
      "div",
      {
        ref: this.ref,
        style: {
          width: `${32 * r}px`,
          height: `${32 * r}px`,
          position: "relative"
        },
        children: [
          /* @__PURE__ */ h(
            f,
            {
              src: p(`body_zones.base_${c}.png`),
              onClick: () => {
                const i = this.props.onClick;
                i && this.state.hoverZone && i(this.state.hoverZone);
              },
              onMouseMove: (i) => {
                var u;
                if (!this.props.onClick)
                  return;
                const o = (u = this.ref.current) == null ? void 0 : u.getBoundingClientRect();
                if (!o)
                  return;
                const a = i.clientX - o.left, m = 32 * r - (i.clientY - o.top);
                this.setState({
                  hoverZone: C(a / r, m / r)
                });
              },
              style: {
                position: "absolute",
                width: `${32 * r}px`,
                height: `${32 * r}px`
              }
            }
          ),
          n && /* @__PURE__ */ h(
            f,
            {
              src: p(`body_zones.${n}.png`),
              style: {
                pointerEvents: "none",
                position: "absolute",
                width: `${32 * r}px`,
                height: `${32 * r}px`
              }
            }
          ),
          s && s !== n && /* @__PURE__ */ h(
            f,
            {
              src: p(`body_zones.${s}.png`),
              style: {
                opacity: "0.5",
                pointerEvents: "none",
                position: "absolute",
                width: `${32 * r}px`,
                height: `${32 * r}px`
              }
            }
          )
        ]
      }
    );
  }
}
export {
  b as BodyZone,
  A as BodyZoneSelector
};
