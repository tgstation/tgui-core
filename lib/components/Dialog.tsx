/**
 * @file
 * @copyright 2022 raffclar
 * @license MIT
 */
import styles from '../styles/components/Dialog.module.scss';

import { Box } from './Box';
import { Button } from './Button';

type DialogProps = {
  title: any;
  onClose: () => void;
  children: any;
  width?: string;
  height?: string;
};

export const Dialog = (props: DialogProps) => {
  const { title, onClose, children, width, height } = props;
  return (
    <div className={styles.dialog}>
      <Box className={styles.content} width={width || '370px'} height={height}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>
          <Box mr={2}>
            <Button
              mr="-3px"
              width="26px"
              lineHeight="22px"
              textAlign="center"
              color="transparent"
              icon="window-close-o"
              tooltip="Close"
              tooltipPosition="bottom-start"
              onClick={onClose}
            />
          </Box>
        </div>
        {children}
      </Box>
    </div>
  );
};

type DialogButtonProps = {
  onClick: () => void;
  children: any;
};

const DialogButton = (props: DialogButtonProps) => {
  const { onClick, children } = props;
  return (
    <Button
      onClick={onClick}
      className={styles.button}
      verticalAlignContent="middle"
    >
      {children}
    </Button>
  );
};

Dialog.Button = DialogButton;

type UnsavedChangesDialogProps = {
  documentName: string;
  onSave: () => void;
  onDiscard: () => void;
  onClose: () => void;
};

export const UnsavedChangesDialog = (props: UnsavedChangesDialogProps) => {
  const { documentName, onSave, onDiscard, onClose } = props;
  return (
    <Dialog title="Notepad" onClose={onClose}>
      <div className={styles.body}>
        Do you want to save changes to {documentName}?
      </div>
      <div className={styles.footer}>
        <DialogButton onClick={onSave}>Save</DialogButton>
        <DialogButton onClick={onDiscard}>Don&apos;t Save</DialogButton>
        <DialogButton onClick={onClose}>Cancel</DialogButton>
      </div>
    </Dialog>
  );
};
