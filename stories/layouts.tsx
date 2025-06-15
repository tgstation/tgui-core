import { type ReactNode, useEffect, useState } from 'react';
import '../static/window.css';
import { classes } from '@common/react';
import { Dropdown, Icon } from '@components';
import { themes } from './themes';

type Props = Partial<{
  children: ReactNode;
  height: number;
  title: string;
  width: number;
}>;

/** A mock window purely for testing */
export function Window(props: Props) {
  const { width = 475, height = 650, children, title = 'Untitled' } = props;

  const [currentTheme, setCurrentTheme] = useState('default');

  useEffect(() => {
    document.documentElement.className = `theme-${currentTheme}`;
  }, [currentTheme]);

  return (
    <div
      className={classes([
        'Story__container',
        currentTheme !== 'default' && `theme-${currentTheme}`,
      ])}
    >
      <div className="Story__themeSelector">
        Select a theme
        <Dropdown
          options={themes}
          selected={currentTheme}
          onSelected={setCurrentTheme}
        />
      </div>
      <div style={{ width, height }} className="Window">
        <div className="Window__titlebar">
          <div className="Window__title">
            <Icon name="eye" className="Window__eye" size={1.5} />
            {title}
          </div>
          <div className="Window__close">X</div>
        </div>
        {children}
      </div>
    </div>
  );
}

type ContentProps = {
  children: ReactNode;
  scrollable?: boolean;
};

function WindowContent(props: ContentProps) {
  const { children, scrollable } = props;

  return (
    <div
      className={classes([
        'Layout__content',
        scrollable && 'Layout__content-Scrollable',
      ])}
    >
      {children}
    </div>
  );
}

Window.Content = WindowContent;
