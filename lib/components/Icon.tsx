import { type BooleanLike, classes } from '../common/react';
import { computeBoxClassName, computeBoxProps } from '../common/ui';
import type { BoxProps } from './Box';

type Props = {
  /** Icon name. See [icon list](https://fontawesome.com/v5/search?o=r&m=free) */
  name: string;
} & Partial<{
  /** Icon rotation, in degrees. */
  rotation: number;
  /** Icon size. `1` is normal size, `2` is two times bigger. Fractional numbers are supported. */
  size: number;
  /** Whether an icon should be spinning. Good for load indicators. */
  spin: BooleanLike;
}> &
  Omit<BoxProps, 'children'>;

const FA_OUTLINE_REGEX = /-o$/;

/**
 * ## Icon
 * Renders one of the FontAwesome icons of your choice.
 *
 * @example
 * ```tsx
 * <Icon name="plus" />
 * ```
 * @url https://fontawesome.com/v5/search?o=r&m=free
 */
export function Icon(props: Props) {
  const { name = '', size, spin, className, rotation, ...rest } = props;

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

function IconStack(props: BoxProps) {
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

/**
 * ## Icon.Stack
 * Renders a set of icons in a row.
 */
Icon.Stack = IconStack;
