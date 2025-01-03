var v = Object.defineProperty;
var H = (r, t, s) => t in r ? v(r, t, { enumerable: !0, configurable: !0, writable: !0, value: s }) : r[t] = s;
var c = (r, t, s) => H(r, typeof t != "symbol" ? t + "" : t, s);
class u {
  constructor(t = 0, s = 0, n = 0, e = 1) {
    c(this, "r");
    c(this, "g");
    c(this, "b");
    c(this, "a");
    this.r = t, this.g = s, this.b = n, this.a = e;
  }
  toString() {
    let t = this.a;
    return typeof t == "string" && (t = Number.parseFloat(this.a)), Number.isNaN(t) && (t = 1), `rgba(${this.r | 0}, ${this.g | 0}, ${this.b | 0}, ${t})`;
  }
  /**  Darkens a color by a given percent. Returns a color, which can have toString called to get it's rgba() css value. */
  darken(t) {
    const s = t / 100;
    return new u(
      this.r - this.r * s,
      this.g - this.g * s,
      this.b - this.b * s,
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
    return new u(
      Number.parseInt(t.slice(1, 3), 16),
      Number.parseInt(t.slice(3, 5), 16),
      Number.parseInt(t.slice(5, 7), 16)
    );
  }
  /**
   * Linear interpolation of two colors.
   */
  static lerp(t, s, n) {
    return new u(
      (s.r - t.r) * n + t.r,
      (s.g - t.g) * n + t.g,
      (s.b - t.b) * n + t.b,
      (s.a - t.a) * n + t.a
    );
  }
  /**
   * Loops up the color in the provided list of colors
   * with linear interpolation.
   */
  static lookup(t, s) {
    const n = s.length;
    if (n < 2)
      throw new Error("Needs at least two colors!");
    const e = t * (n - 1);
    if (t < 1e-4)
      return s[0];
    if (t >= 1 - 1e-4)
      return s[n - 1];
    const o = e % 1, h = e | 0;
    return u.lerp(s[h], s[h + 1], o);
  }
}
const a = (r, t = 0, s = 10 ** t) => Math.round(s * r) / s, T = {
  grad: 360 / 400,
  turn: 360,
  rad: 360 / (Math.PI * 2)
}, E = (r) => N(p(r)), p = (r) => {
  let t = r;
  return t[0] === "#" && (t = t.substring(1)), t.length < 6 ? {
    r: Number.parseInt(t[0] + t[0], 16),
    g: Number.parseInt(t[1] + t[1], 16),
    b: Number.parseInt(t[2] + t[2], 16),
    a: t.length === 4 ? a(Number.parseInt(t[3] + t[3], 16) / 255, 2) : 1
  } : {
    r: Number.parseInt(t.substring(0, 2), 16),
    g: Number.parseInt(t.substring(2, 4), 16),
    b: Number.parseInt(t.substring(4, 6), 16),
    a: t.length === 8 ? a(Number.parseInt(t.substring(6, 8), 16) / 255, 2) : 1
  };
}, $ = (r, t = "deg") => Number(r) * (T[t] || 1), S = (r) => {
  const s = /hsla?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);
  return s ? x({
    h: $(s[1], s[2]),
    s: Number(s[3]),
    l: Number(s[4]),
    a: s[5] === void 0 ? 1 : Number(s[5]) / (s[6] ? 100 : 1)
  }) : { h: 0, s: 0, v: 0, a: 1 };
}, P = S, x = ({ h: r, s: t, l: s, a: n }) => (t *= (s < 50 ? s : 100 - s) / 100, {
  h: r,
  s: t > 0 ? 2 * t / (s + t) * 100 : 0,
  v: s + t,
  a: n
}), k = (r) => w(m(r)), l = ({ h: r, s: t, v: s, a: n }) => {
  const e = (200 - t) * s / 100;
  return {
    h: a(r),
    s: a(
      e > 0 && e < 200 ? t * s / 100 / (e <= 100 ? e : 200 - e) * 100 : 0
    ),
    l: a(e / 2),
    a: a(n, 2)
  };
}, L = (r) => {
  const { h: t, s, l: n } = l(r);
  return `hsl(${t}, ${s}%, ${n}%)`;
}, O = (r) => {
  const { h: t, s, v: n } = g(r);
  return `hsv(${t}, ${s}%, ${n}%)`;
}, F = (r) => {
  const { h: t, s, v: n, a: e } = g(r);
  return `hsva(${t}, ${s}%, ${n}%, ${e})`;
}, y = (r) => {
  const { h: t, s, l: n, a: e } = l(r);
  return `hsla(${t}, ${s}%, ${n}%, ${e})`;
}, m = ({ h: r, s: t, v: s, a: n }) => {
  r = r / 360 * 6, t = t / 100, s = s / 100;
  const e = Math.floor(r), o = s * (1 - t), h = s * (1 - (r - e) * t), b = s * (1 - (1 - r + e) * t), d = e % 6;
  return {
    r: [s, h, o, o, b, s][d] * 255,
    g: [b, s, s, h, o, o][d] * 255,
    b: [o, o, b, s, s, h][d] * 255,
    a: a(n, 2)
  };
}, A = (r) => {
  const { r: t, g: s, b: n } = m(r);
  return `rgb(${a(t)}, ${a(s)}, ${a(n)})`;
}, U = (r) => {
  const { r: t, g: s, b: n, a: e } = m(r);
  return `rgba(${a(t)}, ${a(s)}, ${a(n)}, ${a(e, 2)})`;
}, I = (r) => {
  const s = /hsva?\(?\s*(-?\d*\.?\d+)(deg|rad|grad|turn)?[,\s]+(-?\d*\.?\d+)%?[,\s]+(-?\d*\.?\d+)%?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);
  return s ? g({
    h: $(s[1], s[2]),
    s: Number(s[3]),
    v: Number(s[4]),
    a: s[5] === void 0 ? 1 : Number(s[5]) / (s[6] ? 100 : 1)
  }) : { h: 0, s: 0, v: 0, a: 1 };
}, V = I, f = (r) => {
  const s = /rgba?\(?\s*(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?[,\s]+(-?\d*\.?\d+)(%)?,?\s*[/\s]*(-?\d*\.?\d+)?(%)?\s*\)?/i.exec(r);
  return s ? N({
    r: Number(s[1]) / (s[2] ? 100 / 255 : 1),
    g: Number(s[3]) / (s[4] ? 100 / 255 : 1),
    b: Number(s[5]) / (s[6] ? 100 / 255 : 1),
    a: s[7] === void 0 ? 1 : Number(s[7]) / (s[8] ? 100 : 1)
  }) : { h: 0, s: 0, v: 0, a: 1 };
}, j = f, i = (r) => {
  const t = r.toString(16);
  return t.length < 2 ? `0${t}` : t;
}, w = ({ r, g: t, b: s, a: n }) => {
  const e = n < 1 ? i(a(n * 255)) : "";
  return `#${i(a(r))}${i(a(t))}${i(a(s))}${e}`;
}, N = ({ r, g: t, b: s, a: n }) => {
  const e = Math.max(r, t, s), o = e - Math.min(r, t, s), h = o ? e === r ? (t - s) / o : e === t ? 2 + (s - r) / o : 4 + (r - t) / o : 0;
  return {
    h: 60 * (h < 0 ? h + 6 : h),
    s: e ? o / e * 100 : 0,
    v: e / 255 * 100,
    a: n
  };
}, g = (r) => ({
  h: a(r.h),
  s: a(r.s),
  v: a(r.v),
  a: a(r.a, 2)
}), q = ({ r, g: t, b: s }) => ({ r, g: t, b: s }), z = ({ h: r, s: t, l: s }) => ({ h: r, s: t, l: s }), B = (r) => {
  const { h: t, s, v: n } = g(r);
  return { h: t, s, v: n };
}, M = /^#?([0-9A-F]{3,8})$/i, D = (r, t) => {
  const s = M.exec(r), n = s ? s[1].length : 0;
  return n === 3 || // '#rgb' format
  n === 6 || // '#rrggbb' format
  !!t && n === 4 || // '#rgba' format
  !!t && n === 8;
};
export {
  u as Color,
  E as hexToHsva,
  p as hexToRgba,
  P as hslStringToHsva,
  S as hslaStringToHsva,
  z as hslaToHsl,
  x as hslaToHsva,
  V as hsvStringToHsva,
  I as hsvaStringToHsva,
  k as hsvaToHex,
  L as hsvaToHslString,
  l as hsvaToHsla,
  y as hsvaToHslaString,
  B as hsvaToHsv,
  O as hsvaToHsvString,
  F as hsvaToHsvaString,
  A as hsvaToRgbString,
  m as hsvaToRgba,
  U as hsvaToRgbaString,
  $ as parseHue,
  j as rgbStringToHsva,
  f as rgbaStringToHsva,
  w as rgbaToHex,
  N as rgbaToHsva,
  q as rgbaToRgb,
  g as roundHsva,
  D as validHex
};
