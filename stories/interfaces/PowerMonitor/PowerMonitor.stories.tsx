import type { ComponentProps } from 'react';
import type { Meta } from 'storybook-react-rsbuild';
import { PowerMonitor } from './ui';

type StoryProps = ComponentProps<typeof PowerMonitor>;

export default {
  component: PowerMonitor,
  title: 'Interfaces/PowerMonitor',
  tags: ['!autodocs'],
} satisfies Meta<StoryProps>;

export const Default = {};
