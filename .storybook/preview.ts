import type { Preview } from '@storybook/react';
import previewTheme from './previewTheme.ts';
import '../stories/assets/fonts.css';
import '../stories/assets/all.min.css';
import { withConsole } from '@storybook/addon-console';
import '../styles/main.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'Section',
      values: [{ name: 'Section', value: 'rgba(0, 0, 0, 0.33)' }],
    },
    docs: {
      theme: previewTheme,
    },
  },
  decorators: [(storyFn, context) => withConsole()(storyFn)(context)],
  tags: ['autodocs'],
};

export default preview;
