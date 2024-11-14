import type { CSSProperties, ReactNode } from 'react';
import { type BooleanLike, classes } from '../common/react';
import { type BoxProps, computeBoxClassName, computeBoxProps } from './Box';

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
}> &
  BoxProps;

const FA_OUTLINE_REGEX = /-o$/;

export function Icon(props: Props) {
  const { name, size, spin, className, rotation, ...rest } = props;

  const customStyle = rest.style || {};
  if (size) {
    customStyle.fontSize = `${size * 100}%`;
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
        'Icon',
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
      className={classes(['IconStack', className, computeBoxClassName(rest)])}
      {...computeBoxProps(rest)}
    >
      {children}
    </span>
  );
}

Icon.Stack = IconStack;
