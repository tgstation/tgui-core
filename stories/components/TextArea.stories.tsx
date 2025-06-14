import { TextArea } from '@components';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof TextArea>;

export default {
  component: TextArea,
  title: 'Components/TextArea',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    placeholder: 'Enter your text here',
    height: '150px',
    width: '300px',
  },
};

export const AutoSelect: Story = {
  args: {
    ...Default.args,
    autoSelect: true,
    value: 'Hello, world!',
  },
};

export const Fluid: Story = {
  args: {
    ...Default.args,
    fluid: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const OnKeyDown: Story = {
  args: {
    ...Default.args,
    onKeyDown: (e) => console.log('onKeyDown', e.key, e),
  },
};
