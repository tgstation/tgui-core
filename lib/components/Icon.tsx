/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @author Original Aleksej Komarov
 * @author Changes ThePotato97
 * @license MIT
 */
import { CSSProperties, ReactNode } from 'react';

import { BooleanLike, classes } from '../common/react';
import style from '../styles/components/Icon.module.scss';
import { BoxProps, computeBoxClassName, computeBoxProps } from './Box';

type IconPropsUnique = { name: string } & Partial<{
  className: string;
  rotation: number;
  size: number;
  spin: BooleanLike;
  style: CSSProperties;
}>;

export type IconProps = IconPropsUnique & BoxProps;

const FA_OUTLINE_REGEX = /-o$/;

export function Icon(props: IconProps) {
  const { name, size, spin, className, rotation, ...rest } = props;

  const customStyle = rest.style || {};
  if (size) {
    customStyle.fontSize = size * 100 + '%';
  }
  if (rotation) {
    customStyle.transform = `rotate(${rotation}deg)`;
  }
  rest.style = customStyle;

  const boxProps = computeBoxProps(rest);

  let iconClass = '';
  if (name.startsWith('tg-')) {
    // tgfont icon
    iconClass = name;
  } else {
    // font awesome icon
    const faRegular = FA_OUTLINE_REGEX.test(name);
    const faName = name.replace(FA_OUTLINE_REGEX, '');
    const preprendFa = !faName.startsWith('fa-');

    iconClass = faRegular ? 'far ' : 'fas ';
    if (preprendFa) {
      iconClass += 'fa-';
    }
    iconClass += faName;
    if (spin) {
      iconClass += ' fa-spin';
    }
  }
  return (
    <i
      className={classes([
        style.icon,
        iconClass,
        className,
        computeBoxClassName(rest),
      ])}
      {...boxProps}
    />
  );
}

type IconStackUnique = {
  children: ReactNode;
  className?: string;
};

export type IconStackProps = IconStackUnique & BoxProps;

export function IconStack(props: IconStackProps) {
  const { className, children, ...rest } = props;
  return (
    <span
      className={classes([
        style.iconStack,
        className,
        computeBoxClassName(rest),
      ])}
      {...computeBoxProps(rest)}
    >
      {children}
    </span>
  );
}

Icon.Stack = IconStack;
