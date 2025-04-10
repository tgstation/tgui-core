import { type BooleanLike } from '../common/react';
import type { BoxProps } from './Box';
type Props = {
    /** Icon name. @see https://fontawesome.com/v6/search?o=r&m=free */
    name: string;
} & Partial<{
    /** Icon rotation, in degrees. */
    rotation: number;
    /** Icon size. `1` is normal size, `2` is two times bigger. Fractional numbers are supported. */
    size: number;
    /** Whether an icon should be spinning. Good for load indicators. */
    spin: BooleanLike;
}> & Omit<BoxProps, 'children'>;
export declare function Icon(props: Props): import("react/jsx-runtime").JSX.Element;
declare function IconStack(props: BoxProps): import("react/jsx-runtime").JSX.Element;
/**
 * ## Icon
 * Renders one of the FontAwesome icons of your choice.
 *
 * @example
 * ```tsx
 * <Icon name="plus" />
 * ```
 * @url https://fontawesome.com/v6/search?o=r&m=free
 */
export declare namespace Icon {
    /**
     * ## Icon.Stack
     * Renders children icons on top of each other in order to make your own icon.
     *
     * @example
     * ```tsx
     * <Icon.Stack>
     *   <Icon name="pen" />
     *   <Icon name="slash" />
     * </Icon.Stack>
     * ```
     */
    const Stack: typeof IconStack;
}
export {};
