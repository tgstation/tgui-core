var g = Object.defineProperty;
var u = (e, t, r) => t in e ? g(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r;
var i = (e, t, r) => u(e, typeof t != "symbol" ? t + "" : t, r);
class n {
  constructor(t = 0, r = 0, s = 0, a = 1) {
    i(this, "r");
    i(this, "g");
    i(this, "b");
    i(this, "a");
    this.r = t, this.g = r, this.b = s, this.a = a;
  }
  toString() {
    let t = this.a;
    return typeof t == "string" && (t = Number.parseFloat(this.a)), Number.isNaN(t) && (t = 1), `rgba(${this.r | 0}, ${this.g | 0}, ${this.b | 0}, ${t})`;
  }
  /**  Darkens a color by a given percent. Returns a color, which can have toString called to get it's rgba() css value. */
  darken(t) {
    const r = t / 100;
    return new n(
      this.r - this.r * r,
      this.g - this.g * r,
      this.b - this.b * r,
      this.a
    );
  }
  /** Brightens a color by a given percent. Returns a color, which can have toString called to get it's rgba() css value. */
  lighten(t) {
    return this.darken(-t);
  }
  /**
   * Creates a color from the CSS hex color notation.
   */
  static fromHex(t) {
    return new n(
      Number.parseInt(t.slice(1, 3), 16),
      Number.parseInt(t.slice(3, 5), 16),
      Number.parseInt(t.slice(5, 7), 16)
    );
  }
  /**
   * Linear interpolation of two colors.
   */
  static lerp(t, r, s) {
    return new n(
      (r.r - t.r) * s + t.r,
      (r.g - t.g) * s + t.g,
      (r.b - t.b) * s + t.b,
      (r.a - t.a) * s + t.a
    );
  }
  /**
   * Loops up the color in the provided list of colors
   * with linear interpolation.
   */
  static lookup(t, r) {
    const s = r.length;
    if (s < 2)
      throw new Error("Needs at least two colors!");
    const a = t * (s - 1);
    if (t < 1e-4)
      return r[0];
    if (t >= 1 - 1e-4)
      return r[s - 1];
    const b = a % 1, h = a | 0;
    return n.lerp(r[h], r[h + 1], b);
  }
}
export {
  n as Color
};
