import type { ReactNode } from 'react';
import './assets/window.css';
import { classes } from '@common/react';
import { Icon } from '@components';

type Props = Partial<{
  children: ReactNode;
  height: number;
  title: string;
  width: number;
}>;

/** A mock window purely for testing */
export function Window(props: Props) {
  const { width = 475, height = 650, children, title = 'Untitled' } = props;

  return (
    <div style={{ width, height }} className="Window">
      <div className="Window-Titlebar">
        <div className="Window-Title">
          <Icon name="eye" className="Window-Eye" size={1.5} />
          {title}
        </div>
        <div className="Window-Close">X</div>
      </div>
      {children}
    </div>
  );
}

type ContentProps = {
  children: ReactNode;
  scrollable: boolean;
};

function WindowContent(props: ContentProps) {
  const { children, scrollable } = props;

  return (
    <div
      className={classes([
        'Window-Content',
        scrollable && 'Window-Content__Scrollable',
      ])}
    >
      {children}
    </div>
  );
}

Window.Content = WindowContent;
