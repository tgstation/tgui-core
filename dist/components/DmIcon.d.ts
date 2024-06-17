import { ReactNode } from 'react';
import { BoxProps } from './Box';

declare enum Direction {
    NORTH = 1,
    SOUTH = 2,
    EAST = 4,
    WEST = 8,
    NORTHEAST = 5,
    NORTHWEST = 9,
    SOUTHEAST = 6,
    SOUTHWEST = 10
}
type Props = {
    /** Required: The path of the icon */
    icon: string;
    /** Required: The state of the icon */
    icon_state: string;
} & Partial<{
    /** Facing direction. See direction enum. Default is South */
    direction: Direction;
    /** Fallback icon. */
    fallback: ReactNode;
    /** Frame number. Default is 1 */
    frame: number;
    /** Movement state. Default is false */
    movement: boolean;
}> & BoxProps;
export declare function DmIcon(props: Props): string | number | boolean | Iterable<ReactNode> | import("react/jsx-runtime").JSX.Element | null | undefined;
export {};
