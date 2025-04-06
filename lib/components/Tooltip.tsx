import type { Placement } from '@floating-ui/react';
import type { ReactNode } from 'react';
import { Floating } from './Floating';

type Props = {
  /** The content to display in the tooltip */
  content: ReactNode;
} & Partial<{
  /** Hovering this element will show the tooltip */
  children: ReactNode;
  /** Where to place the tooltip relative to the reference element */
  position: Placement;
}>;

export function Tooltip(props: Props) {
  const { content, children, position } = props;

  return (
    <Floating
      content={content}
      contentClasses="Tooltip"
      hoverOpen
      placement={position}
    >
      {children}
    </Floating>
  );
}
