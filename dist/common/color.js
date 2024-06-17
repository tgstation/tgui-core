var b = Object.defineProperty;
var l = (i, t, s) => t in i ? b(i, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : i[t] = s;
var e = (i, t, s) => (l(i, typeof t != "symbol" ? t + "" : t, s), s);
/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
class n {
  constructor(t = 0, s = 0, r = 0, a = 1) {
    e(this, "r");
    e(this, "g");
    e(this, "b");
    e(this, "a");
    this.r = t, this.g = s, this.b = r, this.a = a;
  }
  toString() {
    let t = this.a;
    return typeof t == "string" && (t = parseFloat(this.a)), isNaN(t) && (t = 1), `rgba(${this.r | 0}, ${this.g | 0}, ${this.b | 0}, ${t})`;
  }
  /**  Darkens a color by a given percent. Returns a color, which can have toString called to get it's rgba() css value. */
  darken(t) {
    return t /= 100, new n(
      this.r - this.r * t,
      this.g - this.g * t,
      this.b - this.b * t,
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
      parseInt(t.slice(1, 3), 16),
      parseInt(t.slice(3, 5), 16),
      parseInt(t.slice(5, 7), 16)
    );
  }
  /**
   * Linear interpolation of two colors.
   */
  static lerp(t, s, r) {
    return new n(
      (s.r - t.r) * r + t.r,
      (s.g - t.g) * r + t.g,
      (s.b - t.b) * r + t.b,
      (s.a - t.a) * r + t.a
    );
  }
  /**
   * Loops up the color in the provided list of colors
   * with linear interpolation.
   */
  static lookup(t, s) {
    const r = s.length;
    if (r < 2)
      throw new Error("Needs at least two colors!");
    const a = t * (r - 1);
    if (t < 1e-4)
      return s[0];
    if (t >= 1 - 1e-4)
      return s[r - 1];
    const g = a % 1, h = a | 0;
    return this.lerp(s[h], s[h + 1], g);
  }
}
export {
  n as Color
};
