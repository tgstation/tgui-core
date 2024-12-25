import { classes } from '../common/react';

type Props = Partial<{
  /** Removes the line, simply adding a gap. */
  hidden: boolean;
  /** Rotate the divider to vertical. */
  vertical: boolean;
}>;

/**
 *
 * ## Dimmer
 * Dims surrounding area to emphasize content placed inside.
 *
 * Content is automatically centered inside the dimmer.
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
