import type { ComponentProps } from 'react';
import type { Meta } from 'storybook-react-rsbuild';
import { Radio } from './ui';

type StoryProps = ComponentProps<typeof Radio>;

export default {
  component: Radio,
  title: 'Interfaces/Radio',
} satisfies Meta<StoryProps>;

export const Default = {};
