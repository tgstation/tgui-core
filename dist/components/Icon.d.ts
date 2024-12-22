import { CSSProperties, ReactNode } from 'react';
import { BooleanLike } from '../common/react';
import { BoxProps } from './Box';
type Props = {
    /** Icon name. See [icon list](https://fontawesome.com/v5/search?o=r&m=free) */
    name: string;
} & Partial<{
    /** Custom CSS class. */
    className: string;
    /** Icon rotation, in degrees. */
    rotation: number;
    /** Icon size. `1` is normal size, `2` is two times bigger. Fractional numbers are supported. */
    size: number;
    /** Whether an icon should be spinning. Good for load indicators. */
    spin: BooleanLike;
    /** Custom CSS. */
    style: CSSProperties;
}> & Omit<BoxProps, 'children'>;
export declare function Icon(props: Props): import("react/jsx-runtime").JSX.Element;
export declare namespace Icon {
    var Stack: typeof IconStack;
}
type IconStackUnique = {
    children: ReactNode;
    className?: string;
};
export type IconStackProps = IconStackUnique & BoxProps;
export declare function IconStack(props: IconStackProps): import("react/jsx-runtime").JSX.Element;
export {};
