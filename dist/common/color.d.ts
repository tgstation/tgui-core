export declare class Color {
    r: number;
    g: number;
    b: number;
    a: number;
    constructor(r?: number, g?: number, b?: number, a?: number);
    toString(): string;
    /**  Darkens a color by a given percent. Returns a color, which can have toString called to get it's rgba() css value. */
    darken(percent: number): Color;
    /** Brightens a color by a given percent. Returns a color, which can have toString called to get it's rgba() css value. */
    lighten(percent: number): Color;
    /**
     * Creates a color from the CSS hex color notation.
     */
    static fromHex(hex: string): Color;
    /**
     * Linear interpolation of two colors.
     */
    static lerp(c1: Color, c2: Color, n: number): Color;
    /**
     * Loops up the color in the provided list of colors
     * with linear interpolation.
     */
    static lookup(value: number, colors: Color[]): Color;
}
export interface RgbColor {
    r: number;
    g: number;
    b: number;
}
export interface RgbaColor extends RgbColor {
    a: number;
}
export interface HslColor {
    h: number;
    s: number;
    l: number;
}
export interface HslaColor extends HslColor {
    a: number;
}
export interface HsvColor {
    h: number;
    s: number;
    v: number;
}
export interface HsvaColor extends HsvColor {
    a: number;
}
export type ObjectColor = RgbColor | HslColor | HsvColor | RgbaColor | HslaColor | HsvaColor;
export type AnyColor = string | ObjectColor;
export declare const hexToHsva: (hex: string) => HsvaColor;
export declare const hexToRgba: (hex: string) => RgbaColor;
export declare const parseHue: (value: string, unit?: string) => number;
export declare const hslaStringToHsva: (hslString: string) => HsvaColor;
export declare const hslStringToHsva: (hslString: string) => HsvaColor;
export declare const hslaToHsva: ({ h, s, l, a }: HslaColor) => HsvaColor;
export declare const hsvaToHex: (hsva: HsvaColor) => string;
export declare const hsvaToHsla: ({ h, s, v, a }: HsvaColor) => HslaColor;
export declare const hsvaToHslString: (hsva: HsvaColor) => string;
export declare const hsvaToHsvString: (hsva: HsvaColor) => string;
export declare const hsvaToHsvaString: (hsva: HsvaColor) => string;
export declare const hsvaToHslaString: (hsva: HsvaColor) => string;
export declare const hsvaToRgba: ({ h, s, v, a }: HsvaColor) => RgbaColor;
export declare const hsvaToRgbString: (hsva: HsvaColor) => string;
export declare const hsvaToRgbaString: (hsva: HsvaColor) => string;
export declare const hsvaStringToHsva: (hsvString: string) => HsvaColor;
export declare const hsvStringToHsva: (hsvString: string) => HsvaColor;
export declare const rgbaStringToHsva: (rgbaString: string) => HsvaColor;
export declare const rgbStringToHsva: (rgbaString: string) => HsvaColor;
export declare const rgbaToHex: ({ r, g, b, a }: RgbaColor) => string;
export declare const rgbaToHsva: ({ r, g, b, a }: RgbaColor) => HsvaColor;
export declare const roundHsva: (hsva: HsvaColor) => HsvaColor;
export declare const rgbaToRgb: ({ r, g, b }: RgbaColor) => RgbColor;
export declare const hslaToHsl: ({ h, s, l }: HslaColor) => HslColor;
export declare const hsvaToHsv: (hsva: HsvaColor) => HsvColor;
export declare const validHex: (value: string, alpha?: boolean) => boolean;
