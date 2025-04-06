/**
 * @file
 * @copyright 2024 Aylong (https://github.com/AyIong)
 * @license MIT
 */

import type { Placement } from '@floating-ui/react';
import type { ReactNode } from 'react';
import { type BooleanLike, classes } from '../common/react';
import { computeBoxProps } from '../common/ui';
import type { BoxProps } from './Box';
import { type Direction, DmIcon } from './DmIcon';
import { Icon } from './Icon';
import { Image } from './Image';
import { Stack } from './Stack';
import { Tooltip } from './Tooltip';

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
}> &
  BoxProps;

/**
 * Stylized button, with the ability to easily and simply insert any picture into it.
 * - Without image, will be default question icon.
 * - If an image is specified but for some reason cannot be displayed, there will be a spinner fallback until it is loaded.
 */
export function ImageButton(props: Props) {
  const {
    asset,
    assetSize = 32,
    base64,
    buttons,
    buttonsAlt,
    children,
    className,
    color,
    disabled,
    dmFallback,
    dmIcon,
    dmIconState,
    fluid,
    imageSize = 64,
    imageSrc,
    onClick,
    onRightClick,
    selected,
    title,
    tooltip,
    tooltipPosition,
    ...rest
  } = props;

  let buttonContent = (
    <div
      className={'ImageButton__container'}
      tabIndex={!disabled ? 0 : undefined}
      onClick={(event) => {
        if (!disabled && onClick) {
          onClick(event);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === 'Enter' && !disabled && onClick) {
          onClick(event);
        }
      }}
      onContextMenu={(event) => {
        event.preventDefault();
        if (!disabled && onRightClick) {
          onRightClick(event);
        }
      }}
      style={{ width: !fluid ? `calc(${imageSize}px + 0.5em + 2px)` : 'auto' }}
    >
      {/** There is too many ternaty operators, why we can't just use unified image type? */}
      <div className="ImageButton__image">
        {base64 || imageSrc ? (
          <Image
            src={base64 ? `data:image/png;base64,${base64}` : imageSrc}
            height={`${imageSize}px`}
            width={`${imageSize}px`}
          />
        ) : dmIcon && dmIconState ? (
          <DmIcon
            icon={dmIcon}
            icon_state={dmIconState}
            fallback={
              dmFallback || <Fallback icon="spinner" spin size={imageSize} />
            }
            height={`${imageSize}px`}
            width={`${imageSize}px`}
          />
        ) : asset ? (
          <Image
            className={classes(asset || [])}
            height={`${imageSize}px`}
            width={`${imageSize}px`}
            style={{
              transform: `scale(${imageSize / assetSize})`,
              transformOrigin: 'top left',
            }}
          />
        ) : (
          <Fallback icon="question" size={imageSize} />
        )}
      </div>
      {/** End of image container */}
      {fluid ? (
        <div className="ImageButton__content">
          {title && (
            <span
              className={classes([
                'ImageButton__content--title',
                !!children && 'ImageButton__content--divider',
              ])}
            >
              {title}
            </span>
          )}
          {children && (
            <span className="ImageButton__content--text">{children}</span>
          )}
        </div>
      ) : (
        !!children && <span className="ImageButton__content">{children}</span>
      )}
    </div>
  );

  if (tooltip) {
    buttonContent = (
      <Tooltip content={tooltip} position={tooltipPosition}>
        {buttonContent}
      </Tooltip>
    );
  }

  return (
    <div
      className={classes([
        'ImageButton',
        fluid && 'ImageButton--fluid',
        selected && 'ImageButton--selected',
        disabled && 'ImageButton--disabled',
        color && typeof color === 'string'
          ? `ImageButton__color--${color}`
          : 'ImageButton__color--default',
        className,
      ])}
      {...computeBoxProps(rest)}
    >
      {buttonContent}
      {buttons && (
        <div
          className={classes([
            'ImageButton__buttons',
            !children && 'ImageButton__buttons--empty',
          ])}
          style={{
            width: 'auto',
          }}
        >
          {buttons}
        </div>
      )}
      {buttonsAlt && (
        <div
          className={classes([
            'ImageButton__buttons',
            'ImageButton__buttons--alt',
            !children && 'ImageButton__buttons--empty',
          ])}
          style={{
            width: `calc(${imageSize}px + ${fluid ? 0 : 0.5}em)`,
            maxWidth: !fluid ? `calc(${imageSize}px +  0.5em)` : 'auto',
          }}
        >
          {buttonsAlt}
        </div>
      )}
    </div>
  );
}

type FallbackProps = {
  icon: string;
} & Partial<{
  spin: true;
  size: number;
}>;

function Fallback(props: FallbackProps) {
  const { icon, spin = false, size = 64 } = props;

  return (
    <Stack height={`${size}px`} width={`${size}px`}>
      <Stack.Item grow textAlign="center" align="center">
        <Icon
          spin={spin}
          name={icon}
          color="gray"
          style={{ fontSize: `calc(${size}px * 0.75)` }}
        />
      </Stack.Item>
    </Stack>
  );
}
