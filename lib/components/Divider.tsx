import { classes } from '../common/react';
import styles from '../styles/components/Divider.module.scss';

type Props = Partial<{
  hidden: boolean;
  vertical: boolean;
}>;

export function Divider(props: Props) {
  const { hidden, vertical } = props;

  return (
    <div
      className={classes([
        hidden && styles.hidden,
        vertical ? styles.vertical : styles.horizontal,
      ])}
    />
  );
}
