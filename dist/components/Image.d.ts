import { BoxProps } from './Box';

type Props = Partial<{
    /** True is default, this fixes an ie thing */
    fixBlur: boolean;
    /** False by default. Good if you're fetching images on UIs that do not auto update. This will attempt to fix the 'x' icon 5 times. */
    fixErrors: boolean;
    /** Fill is default. */
    objectFit: 'contain' | 'cover';
}> & IconUnion & BoxProps;
type IconUnion = {
    className?: string;
    src: string;
} | {
    className: string;
    src?: string;
};
/** Image component. Use this instead of Box as="img". */
export declare function Image(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
