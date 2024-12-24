import type { Preview } from '@storybook/react';
import '../stories/assets/fonts.css';
import '../stories/assets/all.min.css';
import { withConsole } from '@storybook/addon-console';
import '../lib/styles/main.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [(storyFn, context) => withConsole()(storyFn)(context)],
  tags: ['autodocs'],
};

export default preview;
