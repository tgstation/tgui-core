import type { BoxProps } from './Box';
type Props = Partial<{
    className: string;
    /** True is default, this fixes an ie thing */
    fixBlur: boolean;
    /** False by default. Good if you're fetching images on UIs that do not auto update. This will attempt to fix the 'x' icon 5 times. */
    fixErrors: boolean;
    /** Fill is default. */
    objectFit: 'contain' | 'cover';
    src: string;
}> & BoxProps;
/**
 * ## Image
 * A wrapper for the `<img>` element.
 *
 * By default, it will attempt to fix broken images by fetching them again.
 *
 * It will also try to fix blurry images by rendering them pixelated.
 */
export declare function Image(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
