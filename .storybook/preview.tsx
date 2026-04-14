import type { Preview } from '@storybook/react';
import { themes } from '../stories/themes';
import previewTheme from './previewTheme.ts';

import '../static/fonts.css';
import '../static/all.min.css';
import '../styles/main.scss';
import '../styles/all-atomic.scss';
import '../styles/all-themes.scss';

import {
  Controls,
  Description,
  Primary,
  Subtitle,
} from '@storybook/addon-docs/blocks';

const preview: Preview = {
  tags: ['autodocs'],

  decorators: [
    (Story, context) => {
      document.documentElement.className = `theme-${context.globals.theme}`;
      return <Story />;
    },
  ],

  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      options: {
        section: { name: 'Section', value: 'rgba(0, 0, 0, 0.33)' },
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: previewTheme,
      toc: false,
      codePanel: true,
      page: () => (
        <>
          <Subtitle />
          <Description />
          <Primary />
          <Controls />
        </>
      ),
    },
  },

  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'paintbrush',
        items: themes,
      },
    },
  },

  initialGlobals: {
    theme: 'default',
  },
};

export default preview;
