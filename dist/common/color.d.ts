/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
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
