import { BoxProps } from '../components/Box';
import { BooleanLike } from './react';
type UnitMapper = (value: unknown) => string | undefined;
/**
 * Coverts our rem-like spacing unit into a CSS unit.
 */
export declare const unit: UnitMapper;
/**
 * Same as `unit`, but half the size for integers numbers.
 */
export declare const halfUnit: UnitMapper;
export type StringStyleMap = {
    /** Align text inside the box. */
    align: string | BooleanLike;
    /** A direct mapping to `position` CSS property. */
    position: string | BooleanLike;
    /** Vertical align property. */
    verticalAlign: string | BooleanLike;
    /** Sets background color. */
    backgroundColor: string | BooleanLike;
    /** Applies an atomic `color-<name>` class to the element. */
    color: string | BooleanLike;
    /** Opacity, from 0 to 1. */
    opacity: string | BooleanLike;
    /** Sets text color. */
    textColor: string | BooleanLike;
    /** Margin on all sides. */
    m: string | BooleanLike;
    /** Bottom margin. */
    mb: string | BooleanLike;
    /** Left margin. */
    ml: string | BooleanLike;
    /** Right margin. */
    mr: string | BooleanLike;
    /** Top margin. */
    mt: string | BooleanLike;
    /** Horizontal margin. */
    mx: string | BooleanLike;
    /** Vertical margin. */
    my: string | BooleanLike;
    /** Bottom margin. */
    bottom: string | BooleanLike;
    /** Left margin. */
    left: string | BooleanLike;
    /** Right margin. */
    right: string | BooleanLike;
    /** Top margin. */
    top: string | BooleanLike;
    /** Gap on all sides. */
    g: string | BooleanLike;
    /** Row gap. */
    gr: string | BooleanLike;
    /** Column gap. */
    gc: string | BooleanLike;
    /** Overflow property. */
    overflow: string | BooleanLike;
    /** Overflow-X property. */
    overflowX: string | BooleanLike;
    /** Overflow-Y property. */
    overflowY: string | BooleanLike;
    /** Padding on all sides. */
    p: string | BooleanLike;
    /** Bottom padding. */
    pb: string | BooleanLike;
    /** Left padding. */
    pl: string | BooleanLike;
    /** Right padding. */
    pr: string | BooleanLike;
    /** Top padding. */
    pt: string | BooleanLike;
    /** Horizontal padding. */
    px: string | BooleanLike;
    /** Vertical padding. */
    py: string | BooleanLike;
    /** Box height. */
    height: string | BooleanLike;
    /** Box maximum height. */
    maxHeight: string | BooleanLike;
    /** Box maximum width. */
    maxWidth: string | BooleanLike;
    /** Box minimum height. */
    minHeight: string | BooleanLike;
    /** Box minimum width. */
    minWidth: string | BooleanLike;
    /** Box width. */
    width: string | BooleanLike;
    /** Font family. */
    fontFamily: string | BooleanLike;
    /** Font size. */
    fontSize: string | BooleanLike;
    /** Font weight. */
    fontWeight: string | BooleanLike;
    /** Directly affects the height of text lines. Useful for adjusting button height. */
    lineHeight: string | BooleanLike;
    /** Align text inside the box. */
    textAlign: string | BooleanLike;
};
export declare const stringStyleMap: Record<keyof StringStyleMap, any>;
export type BooleanStyleMap = {
    /** Make text bold. */
    bold: boolean;
    /** Fill positioned parent. */
    fillPositionedParent: boolean;
    /** Forces the `Box` to appear as an `inline-block`. */
    inline: boolean;
    /** Make text italic. */
    italic: boolean;
    /** Stops text from wrapping. */
    nowrap: boolean;
    /** Preserves line-breaks and spacing in text. */
    preserveWhitespace: boolean;
};
export declare const booleanStyleMap: Record<keyof BooleanStyleMap, any>;
export declare function computeBoxProps(props: any): Record<string, any>;
export declare function computeBoxClassName(props: BoxProps): string;
type StyleMap = StringStyleMap & BooleanStyleMap;
/** Super light implementation of tailwind-like class names. */
export declare function computeTwClass(input: string | undefined): StyleMap;
export {};
