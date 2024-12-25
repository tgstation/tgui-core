import { BooleanLike } from '../common/react';
import { BoxProps } from './Box';
type Props = {
    /** Icon name. See [icon list](https://fontawesome.com/v5/search?o=r&m=free) */
    name: string;
} & Partial<{
    /** Icon rotation, in degrees. */
    rotation: number;
    /** Icon size. `1` is normal size, `2` is two times bigger. Fractional numbers are supported. */
    size: number;
    /** Whether an icon should be spinning. Good for load indicators. */
    spin: BooleanLike;
}> & Omit<BoxProps, 'children'>;
/**
 * ## Icon
 * Renders one of the FontAwesome icons of your choice.
 *
 * @example
 * ```tsx
 * <Icon name="plus" />
 * ```
 * @url https://fontawesome.com/v5/search?o=r&m=free
 */
export declare function Icon(props: Props): import("react/jsx-runtime").JSX.Element;
export declare namespace Icon {
    var Stack: typeof IconStack;
}
declare function IconStack(props: BoxProps): import("react/jsx-runtime").JSX.Element;
export {};
