import type { ReactNode } from 'react';
import { Box } from './Box';
import { Button } from './Button';

type DialogProps = {
  /** The content of the dialog. */
  children: ReactNode;
  /** The height of the dialog. */
  height?: string;
  /** The function to call when close is clicked */
  onClose: () => void;
  /** The title of the dialog. */
  title: ReactNode;
  /** The width of the dialog. */
  width?: string;
};

/**
 * ## Dialog
 *
 * A themed dialog for user interaction.
 *
 * Example:
 *
 * ```tsx
 * <Dialog title="Dialog Title" onClose={() => {}}>
 *   <div>Dialog Content</div>
 * </Dialog>
 * ```
 *
 * - [View documentation on tgui core](https://tgstation.github.io/tgui-core/?path=/docs/components-dialog--docs)
 */
export function Dialog(props: DialogProps) {
  const { title, onClose, children, width, height } = props;

  return (
    <div className="Dialog">
      <Box className="Dialog__content" height={height} width={width || '370px'}>
        <div className="Dialog__header">
          <div className="Dialog__title">{title}</div>
          <Box mr={2}>
            <Button
              color="transparent"
              icon="window-close-o"
              lineHeight="22px"
              mr="-3px"
              onClick={onClose}
              textAlign="center"
              tooltip="Close"
              tooltipPosition="bottom-start"
              width="26px"
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
      className="Dialog__button"
      onClick={onClick}
      verticalAlignContent="middle"
    >
      {children}
    </Button>
  );
}

Dialog.Button = DialogButton;
