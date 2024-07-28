import { classes } from '../common/react';
import styles from '../styles/components/Modal.module.scss';
import { BoxProps, computeBoxClassName, computeBoxProps } from './Box';
import { Dimmer } from './Dimmer';

type ModalProps = {
  /** If true, the modal will take up the full screen. */
  full?: boolean;
} & BoxProps;

export function Modal(props: ModalProps) {
  const { className, children, full, ...rest } = props;

  return (
    <Dimmer full={full}>
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
