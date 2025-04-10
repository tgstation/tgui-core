/**
 * @file
 * @copyright 2024 Aylong (https://github.com/AyIong)
 * @license MIT
 */
import type { Placement } from '@floating-ui/react';
import type { ReactNode } from 'react';
import { type BooleanLike } from '../common/react';
import type { BoxProps } from './Box';
import { type Direction } from './DmIcon';
type Props = Partial<{
    /** Asset cache. Example: `asset={['assetname32x32', thing.key]}` */
    asset: string[];
    /**
     * Asset size. Used for asset scaling. Example: `assetSize={32}`
     * With that, you can use `imageSize` to set asset image size in px.
     * By default, it's 32px. So if you have 32x32 you don't need to touch it.
     */
    assetSize: number;
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
     * Same as buttons, but. Have disabled pointer-events on content inside if non-fluid.
     * Fluid version have humburger layout.
     * Can be used with buttons prop.
     */
    buttonsAlt: ReactNode;
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
    /** Parameter `direction` of component `DmIcon`. */
    dmDirection: Direction;
    /**
     * Changes the layout of the button, making it fill the entire horizontally available space.
     * Allows the use of `title`
     */
    fluid: boolean;
    /** Parameter responsible for the size of the image, component and standard "stubs". */
    imageSize: number;
    /** Prop `src` of Image component. Example: `imageSrc={resolveAsset(thing.image)}` */
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
    /** Position of the tooltip. Does not guarantee the position is respected. */
    tooltipPosition: Placement;
}> & BoxProps;
/**
 * Stylized button, with the ability to easily and simply insert any picture into it.
 * - Without image, will be default question icon.
 * - If an image is specified but for some reason cannot be displayed, there will be a spinner fallback until it is loaded.
 */
export declare function ImageButton(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
