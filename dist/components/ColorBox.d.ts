import type { ReactNode } from 'react';
import type { BoxProps } from './Box';
type Props = {
    content?: ReactNode;
} & BoxProps;
/**
 * ## ColorBox
 * Displays a 1-character wide colored square. Can be used as a status indicator,
 * or for visually representing a color.
 *
 * If you want to set a background color on an element, use a plain
 * [Box](https://github.com/tgstation/tgui-core/tree/main/lib/components/Box.tsx) instead.
 */
export declare function ColorBox(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
