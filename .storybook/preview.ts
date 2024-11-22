import type { Preview } from '@storybook/react';
import 'tgui-styles';
import '../stories/assets/fonts.css';
import '../stories/assets/all.min.css';
import { withConsole } from '@storybook/addon-console';

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
  decorators: [(storyFn, context) => withConsole()(storyFn)(context)],
};

export default preview;
