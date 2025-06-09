import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { ColorBox } from '../../lib/components/ColorBox';

type StoryProps = ComponentProps<typeof ColorBox>;

export default {
  component: ColorBox,
  title: 'Components/ColorBox',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    content: 'ColorBox',
  },
};
