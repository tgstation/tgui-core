import type { Preview } from '@storybook/react';
import previewTheme from './previewTheme.ts';
import '../stories/assets/fonts.css';
import '../stories/assets/all.min.css';
import '../styles/main.scss';
import '../styles/atomic.scss';
import {
  Controls,
  Description,
  Primary,
  Subtitle,
} from '@storybook/addon-docs/blocks';

const preview: Preview = {
  tags: ['autodocs'],
  parameters: {
    backgrounds: {
      default: 'Section',
      values: [{ name: 'Section', value: 'rgba(0, 0, 0, 0.33)' }],
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: previewTheme,
      toc: true,
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
};

export default preview;
