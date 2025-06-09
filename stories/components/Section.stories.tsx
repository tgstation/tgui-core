import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import { Section } from '../../lib/components/Section';

type StoryProps = ComponentProps<typeof Section>;

export default {
  component: Section,
  title: 'Components/Section',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Section',
  },
};
