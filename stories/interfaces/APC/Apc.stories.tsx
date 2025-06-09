import type { ComponentProps } from 'react';
import type { Meta } from 'storybook-react-rsbuild';
import { Apc } from './ui';

type StoryProps = ComponentProps<typeof Apc>;

export default {
  component: Apc,
  title: 'Interfaces/APC',
} satisfies Meta<StoryProps>;

export const Default = {};
