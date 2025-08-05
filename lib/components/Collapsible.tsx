import { type CSSProperties, type ReactNode, useState } from 'react';
import { Box, type BoxProps } from './Box';
import { Button } from './Button';

type Props = Partial<{
  /** Buttons or other content to render inline with the button */
  buttons: ReactNode;
  /** Top margin of the child nodes, defaulted to 1 */
  child_mt: number;
  /** Icon to display with the collapsible */
  icon: string;
  /** Whether the collapsible is open */
  open: boolean;
  /** Text to display on the button for collapsing */
  title: ReactNode;
  /** Custom styles for the child nodes */
  childStyles: CSSProperties;
}> &
  BoxProps;

/**
 * ## Collapsible
 *
 * Displays contents when open, acts as a fluid button when closed.
 *
 * Click to toggle, closed by default.
 *
 * - [View documentation on tgui core](https://tgstation.github.io/tgui-core/?path=/docs/components-collapsible--docs)
 * - [View inherited Box props](https://tgstation.github.io/tgui-core/?path=/docs/components-box--docs)
 */
export function Collapsible({
  children,
  child_mt = 1,
  childStyles,
  color,
  title,
  buttons,
  icon,
  open,
  ...rest
}: Props) {
  const [isOpen, setIsOpen] = useState(open);

  return (
    <Box mb={1}>
      <div className="Table">
        <div className="Table__cell">
          <Button
            color={color}
            fluid
            icon={icon ? icon : isOpen ? 'chevron-down' : 'chevron-right'}
            onClick={() => setIsOpen(!isOpen)}
            {...rest}
          >
            {title}
          </Button>
        </div>
        {buttons && (
          <div className="Table__cell Table__cell--collapsing">{buttons}</div>
        )}
      </div>
      {isOpen && (
        <Box mt={child_mt} style={childStyles}>
          {children}
        </Box>
      )}
    </Box>
  );
}
