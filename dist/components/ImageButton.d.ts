import { Placement } from '@popperjs/core';
import { ReactNode } from 'react';
import { BooleanLike } from '../common/react';
import { BoxProps } from './Box';
type Props = Partial<{
    /** Asset cache. Example: `asset={['assetname32x32', thing.key]}` */
    asset: string[];
    /** Classic way to put images. Example: `base64={thing.image}` */
    base64: string;
    /**
     * Special container for buttons.
     * You can put any other component here.
     * Has some special stylings!
     * Example: `buttons={<Button>Send</Button>}`
     */
    buttons: ReactNode;
    /**
     * Enables alternate layout for `buttons` container.
     * Without fluid, buttons will be on top and with `pointer-events: none`, useful for text info.
     * With fluid, buttons will be in "hamburger" style.
     */
    buttonsAlt: boolean;
    /** Content under image. Or on the right if fluid. */
    children: ReactNode;
    /** Applies a CSS class to the element. */
    className: string;
    /**
     * Color of the button. See
     * [Button](https://github.com/tgstation/tgui-core/tree/main/lib/components/Button.tsx)
     * but without `transparent`.
     */
    color: string;
    /** Makes button disabled and dark red if true. Also disables onClick. */
    disabled: BooleanLike;
    /** Optional. Adds a "stub" when loading DmIcon. */
    dmFallback: ReactNode;
    /** Parameter `icon` of component `DmIcon`. */
    dmIcon: string | null;
    /** Parameter `icon_state` of component `DmIcon`. */
    dmIconState: string | null;
    /**
     * Changes the layout of the button, making it fill the entire horizontally available space.
     * Allows the use of `title`
     */
    fluid: boolean;
    /** Parameter responsible for the size of the image, component and standard "stubs". */
    imageSize: number;
    /** Prop `src` of Image component. Example: `imageSrc={resolveAsset(thing.image}` */
    imageSrc: string;
    /** Called when button is clicked with LMB. */
    onClick: (e: any) => void;
    /** Called when button is clicked with RMB. */
    onRightClick: (e: any) => void;
    /** Makes button selected and green if true. */
    selected: BooleanLike;
    /** Requires `fluid` for work. Bold text with divider betwen content. */
    title: string;
    /** A fancy, boxy tooltip, which appears when hovering over the button */
    tooltip: ReactNode;
    /** Position of the tooltip. See [`Popper`](#Popper) for valid options. */
    tooltipPosition: Placement;
}> & BoxProps;
export declare function ImageButton(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
