import { type PropsWithChildren } from 'react';
import type { BoxProps } from './Box';
type Props = {
    /** The width of the image to display. */
    imageWidth: number;
} & Partial<{
    /** The background image to display. */
    backgroundImage: string;
    /** The initial left position of the image. */
    initialLeft: number;
    /** The initial top position of the image. */
    initialTop: number;
    /** A callback function that is called when the background image is moved. */
    onBackgroundMoved: (newX: number, newY: number) => void;
    /** A callback function that is called when the zoom value changes. */
    onZoomChange: (newZoomValue: number) => void;
}> & BoxProps & PropsWithChildren;
/**
 * ## InfinitePlane
 * Creates a scrolling infinite plane using a background image.
 *
 * @example
 * ```tsx
 * <InfinitePlane imageWidth={100} backgroundImage="https://example.com/image.png">
 *   <Box position="absolute" top={0} left={0}>
 *     Hello, world!
 *   </Box>
 *   <Box position="absolute" top={0} left={100}>
 *     Hello, world!
 *   </Box>
 *   <Box position="absolute" top={0} left={200}>
 *     Hello, world!
 *   </Box>
 * </InfinitePlane>
 * ```
 */
export declare function InfinitePlane(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
