import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { Divider } from '../../lib/components/Divider';

type StoryProps = ComponentProps<typeof Divider>;

export default {
  component: Divider,
  title: 'Components/Divider',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {};
