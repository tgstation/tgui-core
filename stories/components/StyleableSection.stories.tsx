import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { StyleableSection } from '../../lib/components/StyleableSection';

type StoryProps = ComponentProps<typeof StyleableSection>;

export default {
  component: StyleableSection,
  title: 'Components/StyleableSection',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'StyleableSection',
  },
};
