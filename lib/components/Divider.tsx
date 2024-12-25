import { classes } from '../common/react';

type Props = Partial<{
  /** Divider can divide content without creating a dividing line. */
  hidden: boolean;
  /** Divide content vertically. */
  vertical: boolean;
}>;

/**
 *
 * ## Divider
 * Draws a horizontal or vertical line, dividing a section into groups.
 * Works like the good old `<hr>` element, but it's fancier.
 */
export function Divider(props: Props) {
  const { hidden, vertical } = props;

  return (
    <div
      className={classes([
        'Divider',
        hidden && 'Divider--hidden',
        vertical ? 'Divider--vertical' : 'Divider--horizontal',
      ])}
    />
  );
}
