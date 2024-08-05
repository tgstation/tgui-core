/**
 * @file
 * @copyright 2024 Aylong (https://github.com/AyIong)
 * @license MIT
 */

import { Placement } from '@popperjs/core';
import { ReactNode } from 'react';

import { BooleanLike, classes } from '../common/react';
import styles from '../styles/components/ImageButton.module.scss';
import { BoxProps, computeBoxProps } from './Box';
import { DmIcon } from './DmIcon';
import { Icon } from './Icon';
import { Image } from './Image';
import { Stack } from './Stack';
import { Tooltip } from './Tooltip';

type Props = Partial<{
  asset: string;
  base64: string;
  buttons: ReactNode;
  buttonsAlt: boolean;
  children: ReactNode;
  className: string;
  color: string;
  disabled: BooleanLike;
  dmFallback: ReactNode;
  dmIcon: string | null;
  dmIconState: string | null;
  fluid: boolean;
  imageSize: number;
  imageSrc: string;
  onClick: (e: any) => void;
  onRightClick: (e: any) => void;
  selected: BooleanLike;
  title: string;
  tooltip: ReactNode;
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
        styles.container,
        buttons && styles.hasButtons,
        !onClick && !onRightClick && styles.noAction,
        selected && styles.selected,
        disabled && styles.disabled,
        color && typeof color === 'string'
          ? styles['color__' + color]
          : styles['color__default'],
      ])}
      tabIndex={!disabled ? 0 : undefined}
      onClick={(event) => {
        if (!disabled && onClick) {
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
      <div className={classes([styles.image])}>
        {base64 || asset || imageSrc ? (
          <Image
            className={classes([!base64 && !imageSrc && asset])}
            src={base64 ? `data:image/jpeg;base64,${base64}` : imageSrc}
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
        <div className={classes([styles.info])}>
          {title && (
            <span
              className={classes([styles.title, children && styles.divider])}
            >
              {title}
            </span>
          )}
          {children && (
            <span className={classes([styles.contentFluid])}>{children}</span>
          )}
        </div>
      ) : (
        children && (
          <span
            className={classes([
              styles.content,
              selected && styles.contentSelected,
              disabled && styles.contentDisabled,
              color && typeof color === 'string'
                ? styles['contentColor__' + color]
                : styles['contentColor__default'],
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
        styles.ImageButton,
        fluid && styles.fluid,
        className,
      ])}
      {...computeBoxProps(rest)}
    >
      {buttonContent}
      {buttons && (
        <div
          className={classes([
            styles.buttonsContainer,
            buttonsAlt && styles.buttonsAltContainer,
            !children && styles.buttonsEmpty,
            fluid && color && typeof color === 'string'
              ? styles['buttonsContainerColor__' + color]
              : fluid && styles['buttonsContainerColor__default'],
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
