import type { ReactNode } from 'react';

import { classes } from '../common/react';
import { type BoxProps, computeBoxClassName, computeBoxProps } from './Box';

type Props = {
  content?: ReactNode;
} & BoxProps;

export function ColorBox(props: Props) {
  const { content, children, className, ...rest } = props;

  rest.color = content ? null : 'default';
  rest.backgroundColor = props.color || 'default';

  return (
    <div
      className={classes(['ColorBox', className, computeBoxClassName(rest)])}
      {...computeBoxProps(rest)}
    >
      {content || ''}
    </div>
  );
}
