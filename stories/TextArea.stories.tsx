import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { TextArea } from '../lib/components/TextArea';

type StoryProps = ComponentProps<typeof TextArea>;

export default {
  component: TextArea,
  title: 'Components/TextArea',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your text here',
  },
};

export const AutoSelect: Story = {
  args: {
    value: 'Hello, world!',
    autoSelect: true,
  },
};

export const Fluid: Story = {
  args: {
    fluid: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const OnKeyDown: Story = {
  args: {
    ...Default.args,
    onKeyDown: (e) => console.log('onKeyDown', e.key, e),
  },
};
