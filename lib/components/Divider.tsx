import { classes } from '../common/react';

type Props = Partial<{
  hidden: boolean;
  vertical: boolean;
}>;

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
