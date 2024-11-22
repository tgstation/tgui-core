import { withConsole } from '@storybook/addon-console';
import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Input } from '../lib/components/Input';

type StoryProps = ComponentProps<typeof Input>;

export default {
  component: Input,
  title: 'Components/Input',
  decorators: [(storyFn, context) => withConsole()(storyFn)(context)],
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    autoFocus: true,
    autoSelect: false,
    disabled: false,
    fluid: false,
    maxLength: 100,
    placeholder: 'Type something here...',
    value: 'Hello, world!',
  },
};

export const AutoSelect: Story = {
  args: {
    ...Default.args,
    autoSelect: true,
  },
};

export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};

export const Expensive: Story = {
  args: {
    ...Default.args,
    expensive: true,
    onInput: (_e, v) => console.log('New value: ', v),
    value: "I'm debounced!",
  },
};

export const Fluid: Story = {
  args: {
    ...Default.args,
    fluid: true,
  },
};

export const UpdateOnExternalChange: Story = {
  args: {
    ...Default.args,
    updateOnPropsChange: true,
    value: 'Change my value',
  },
};
