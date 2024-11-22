/**
 * @file
 * @copyright 2024 Aylong (https://github.com/AyIong)
 * @license MIT
 */

import type { Placement } from '@popperjs/core';
import type { ReactNode } from 'react';
import { type BooleanLike, classes } from '../common/react';

import { type BoxProps, computeBoxProps } from './Box';
import { DmIcon } from './DmIcon';
import { Icon } from './Icon';
import { Image } from './Image';
import { Stack } from './Stack';
import { Tooltip } from './Tooltip';

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
  /** Color of the button. See [Button](#button) but without `transparent`. */
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
}> &
  BoxProps;

export function ImageButton(props: Props) {
  const {
    asset,
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

  function getFallback(iconName: string, iconSpin: boolean) {
    return (
      <Stack height={`${imageSize}px`} width={`${imageSize}px`}>
        <Stack.Item grow textAlign="center" align="center">
          <Icon
            spin={iconSpin}
            name={iconName}
            color="gray"
            style={{ fontSize: `calc(${imageSize}px * 0.75)` }}
          />
        </Stack.Item>
      </Stack>
    );
  }

  let buttonContent = (
    <div
      className={classes([
        'container',
        buttons && 'hasButtons',
        !onClick && !onRightClick && 'noAction',
        selected && 'ImageButton--selected',
        disabled && 'ImageButton--disabled',
        color && typeof color === 'string'
          ? `ImageButton--color__${color}`
          : 'ImageButton--color__default',
      ])}
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
      <div className="image">
        {base64 || asset || imageSrc ? (
          <Image
            className={classes((!base64 && !imageSrc && asset) || [])}
            src={base64 ? `data:image/png;base64,${base64}` : imageSrc}
            height={`${imageSize}px`}
            width={`${imageSize}px`}
          />
        ) : dmIcon && dmIconState ? (
          <DmIcon
            icon={dmIcon}
            icon_state={dmIconState}
            fallback={dmFallback ? dmFallback : getFallback('spinner', true)}
            height={`${imageSize}px`}
            width={`${imageSize}px`}
          />
        ) : (
          getFallback('question', false)
        )}
      </div>
      {fluid ? (
        <div className="info">
          {title && (
            <span className={classes(['title', children && 'divider'])}>
              {title}
            </span>
          )}
          {children && <span className="contentFluid">{children}</span>}
        </div>
      ) : (
        children && (
          <span
            className={classes([
              'content',
              selected && 'ImageButton--contentSelected',
              disabled && 'ImageButton--contentDisabled',
              color && typeof color === 'string'
                ? `ImageButton--contentColor__${color}`
                : 'ImageButton--contentColor__default',
            ])}
          >
            {children}
          </span>
        )
      )}
    </div>
  );

  if (tooltip) {
    buttonContent = (
      <Tooltip content={tooltip} position={tooltipPosition as Placement}>
        {buttonContent}
      </Tooltip>
    );
  }

  return (
    <div
      className={classes([
        'ImageButton',
        fluid && 'ImageButton--fluid',
        className,
      ])}
      {...computeBoxProps(rest)}
    >
      {buttonContent}
      {buttons && (
        <div
          className={classes([
            'buttonsContainer',
            buttonsAlt && 'buttonsAltContainer',
            !children && 'buttonsEmpty',
            fluid && color && typeof color === 'string'
              ? `ImageButton--buttonsContainerColor__${color}`
              : fluid && 'ImageButton--buttonsContainerColor__default',
          ])}
          style={{
            width: buttonsAlt ? `calc(${imageSize}px + 0.5em)` : 'auto',
          }}
        >
          {buttons}
        </div>
      )}
    </div>
  );
}
