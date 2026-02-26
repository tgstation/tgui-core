import type { ComponentProps, PropsWithChildren } from 'react';
import '../static/window.scss';
import { type BooleanLike, classes } from '@common/react';
import { type Box, Icon } from '@components';
import { toTitleCase } from 'tgui-core/common/string';
import { computeBoxClassName, computeBoxProps } from 'tgui-core/common/ui';

type Props = Partial<{
  canClose: BooleanLike;
  height: number;
  title: string;
  width: number;
}> &
  PropsWithChildren;

/** A mock window purely for testing */
export function Window(props: Props) {
  const {
    canClose = true,
    width = 475,
    height = 650,
    children,
    title = 'Untitled',
  } = props;

  // TitleBar component.
  const finalTitle =
    (typeof title === 'string' &&
      title === title.toLowerCase() &&
      toTitleCase(title)) ||
    title;

  return (
    <div style={{ width, height }} className="Window">
      <div className="TitleBar">
        <div className="TitleBar__title">
          <Icon color="good" name="eye" className="TitleBar__statusIcon" />
          <div className="TitleBar__title">{finalTitle}</div>
        </div>
        {!!canClose && (
          <div className="TitleBar__close">
            <Icon className="TitleBar__close--icon" name="times" />
          </div>
        )}
      </div>
      {/* rest is placed 32px under top bar */}
      <div style={{ height: height - 32 }}>{children}</div>
    </div>
  );
}

type ContentProps = Partial<{
  className: string;
  fitted: boolean;
  scrollable: boolean;
  vertical: boolean;
}> &
  ComponentProps<typeof Box> &
  PropsWithChildren;

function WindowContent(props: ContentProps) {
  const { children, className, fitted, scrollable, ...rest } = props;

  return (
    <div
      className={classes([
        'Layout__content',
        scrollable && 'Layout__content-Scrollable',
        'Window__content',
        className,
        computeBoxClassName(rest),
      ])}
      {...computeBoxProps(rest)}
    >
      {fitted ? (
        children
      ) : (
        <div className="Window__contentPadding">{children}</div>
      )}
    </div>
  );
}

Window.Content = WindowContent;
