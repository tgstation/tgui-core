import type { Preview } from '@storybook/react';
import 'tgui-styles';
import '../stories/assets/fonts.css';
import '../stories/assets/all.min.css';

const preview: Preview = {
  parameters: {
    backgrounds: {
      values: [{ name: 'dark', value: 'hsl(0, 0%, 14%)' }],
      default: 'dark',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
