import {
  type CSSProperties,
  type KeyboardEventHandler,
  type MouseEventHandler,
  type ReactNode,
  type UIEventHandler,
  createElement,
} from 'react';
import type { BooleanLike } from '../common/react';
import {
  type booleanStyleMap,
  computeBoxClassName,
  computeBoxProps,
  type stringStyleMap,
} from '../common/ui';

type BooleanProps = Record<keyof typeof booleanStyleMap, boolean>;
type StringProps = Record<keyof typeof stringStyleMap, string | BooleanLike>;

type EventHandlers = {
  onClick: MouseEventHandler<HTMLDivElement>;
  onContextMenu: MouseEventHandler<HTMLDivElement>;
  onDoubleClick: MouseEventHandler<HTMLDivElement>;
  onKeyDown: KeyboardEventHandler<HTMLDivElement>;
  onKeyUp: KeyboardEventHandler<HTMLDivElement>;
  onMouseDown: MouseEventHandler<HTMLDivElement>;
  onMouseLeave: MouseEventHandler<HTMLDivElement>;
  onMouseMove: MouseEventHandler<HTMLDivElement>;
  onMouseOver: MouseEventHandler<HTMLDivElement>;
  onMouseUp: MouseEventHandler<HTMLDivElement>;
  onScroll: UIEventHandler<HTMLDivElement>;
};

type InternalProps = {
  as: string;
  children: ReactNode;
  className: string | BooleanLike;
  id: string;
  style: CSSProperties;
};

// You may wonder why we don't just use ComponentProps<typeof Box> here.
// This is because I'm trying to isolate DangerDoNotUse from the rest of the props.
// While you still can technically use ComponentProps, it won't throw an error if someone uses dangerouslySet.
export type BoxProps = Partial<
  InternalProps & BooleanProps & StringProps & EventHandlers
>;

// Don't you dare put this elsewhere
type DangerDoNotUse = {
  dangerouslySetInnerHTML?: {
    __html: any;
  };
};

/**
 * # Box
 *
 * The Box component serves as a wrapper component for most of the CSS utility
 * needs. It creates a new DOM element, a `<div>` by default that can be changed
 * with the `as` property. Let's say you want to use a `<span>` instead:
 *
 * @example
 * ```tsx
 * <Box as="span" m={1}>
 *   <Button />
 * </Box>
 * ```
 *
 * This works great when the changes can be isolated to a new DOM element.
 * For instance, you can change the margin this way.
 *
 * However, sometimes you have to target the underlying DOM element.
 * For instance, you want to change the text color of the button. The Button
 * component defines its own color. CSS inheritance doesn't help.
 *
 * To workaround this problem, the Box children accept a render props function.
 * This way, `Button` can pull out the `className` generated by the `Box`.
 *
 * @example
 * ```tsx
 * <Box color="primary">{(props) => <Button {...props} />}</Box>
 * ```
 *
 * ## Box Units
 *
 * `Box` units, like width, height and margins can be defined in two ways:
 *
 * - By plain numbers
 *   - 1 unit equals `1rem` for width, height and positioning properties.
 *   - 1 unit equals `0.5rem` for margins and paddings.
 * - By strings with proper CSS units
 *   - For example: `100px`, `2em`, `1rem`, `100%`, etc.
 *
 * If you need more precision, you can always use fractional numbers.
 *
 * Default font size (`1rem`) is equal to `12px`.
 *
 * ## Props
 *
 * - `as: string` - The component used for the root node.
 * - `color: string` - Applies an atomic `color-<name>` class to the element.
 *   - See `styles/atomic/color.scss`.
 * - `width: number` - Box width.
 * - `minWidth: number` - Box minimum width.
 * - `maxWidth: number` - Box maximum width.
 * - `height: number` - Box height.
 * - `minHeight: number` - Box minimum height.
 * - `maxHeight: number` - Box maximum height.
 * - `fontSize: number` - Font size.
 * - `fontFamily: string` - Font family.
 * - `lineHeight: number` - Directly affects the height of text lines.
 *   Useful for adjusting button height.
 * - `inline: boolean` - Forces the `Box` to appear as an `inline-block`,
 *   or in other words, makes the `Box` flow with the text instead of taking
 *   all available horizontal space.
 * - `m: number` - Margin on all sides.
 * - `mx: number` - Horizontal margin.
 * - `my: number` - Vertical margin.
 * - `mt: number` - Top margin.
 * - `mb: number` - Bottom margin.
 * - `ml: number` - Left margin.
 * - `mr: number` - Right margin.
 * - `p: number` - Padding on all sides.
 * - `px: number` - Horizontal padding.
 * - `py: number` - Vertical padding.
 * - `pt: number` - Top padding.
 * - `pb: number` - Bottom padding.
 * - `pl: number` - Left padding.
 * - `pr: number` - Right padding.
 * - `opacity: number` - Opacity, from 0 to 1.
 * - `bold: boolean` - Make text bold.
 * - `italic: boolean` - Make text italic.
 * - `nowrap: boolean` - Stops text from wrapping.
 * - `preserveWhitespace: boolean` - Preserves line-breaks and spacing in text.
 * - `textAlign: string` - Align text inside the box.
 *   - `left` (default)
 *   - `center`
 *   - `right`
 * - `position: string` - A direct mapping to `position` CSS property.
 *   - `relative` - Relative positioning.
 *   - `absolute` - Absolute positioning.
 *   - `fixed` - Fixed positioning.
 * - `color: string` - An alias to `textColor`.
 * - `textColor: string` - Sets text color.
 *   - `#ffffff` - Hex format
 *   - `rgba(255, 255, 255, 1)` - RGB format
 *   - `purple` - Applies an atomic `color-<name>` class to the element.
 *     See `styles/color-map.scss`.
 * - `backgroundColor: string` - Sets background color.
 *   - `#ffffff` - Hex format
 *   - `rgba(255, 255, 255, 1)` - RGB format
 */
export function Box(props: BoxProps & DangerDoNotUse) {
  const { as = 'div', className, children, ...rest } = props;

  const computedClassName = className
    ? `${className} ${computeBoxClassName(rest)}`
    : computeBoxClassName(rest);
  const computedProps = computeBoxProps(rest);

  return createElement(
    as,
    {
      ...computedProps,
      className: computedClassName,
    },
    children,
  );
}
