import { classes } from '../common/react';
import styles from '../styles/components/Modal.module.scss';
import { type BoxProps, computeBoxClassName, computeBoxProps } from './Box';
import { Dimmer } from './Dimmer';

export function Modal(props: BoxProps) {
  const { className, children, ...rest } = props;

  return (
    <Dimmer>
      <div
        className={classes([
          styles.modal,
          className,
          computeBoxClassName(rest),
        ])}
        {...computeBoxProps(rest)}
      >
        {children}
      </div>
    </Dimmer>
  );
}
