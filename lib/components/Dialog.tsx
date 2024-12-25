import type { ReactNode } from 'react';
import { Box } from './Box';
import { Button } from './Button';

type DialogProps = {
  children: ReactNode;
  height?: string;
  onClose: () => void;
  title: ReactNode;
  width?: string;
};

export function Dialog(props: DialogProps) {
  const { title, onClose, children, width, height } = props;
  return (
    <div className="Dialog">
      <Box className="Dialog__content" width={width || '370px'} height={height}>
        <div className="Dialog__header">
          <div className="Dialog__title">{title}</div>
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
}

type DialogButtonProps = {
  children: any;
  onClick: () => void;
};

function DialogButton(props: DialogButtonProps) {
  const { onClick, children } = props;
  return (
    <Button
      onClick={onClick}
      className="Dialog__button"
      verticalAlignContent="middle"
    >
      {children}
    </Button>
  );
}

Dialog.Button = DialogButton;
