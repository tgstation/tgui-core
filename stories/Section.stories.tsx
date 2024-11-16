import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Section } from '../lib/components/Section';

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
