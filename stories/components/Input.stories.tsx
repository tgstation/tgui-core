import { Button, Input, Stack } from '@components';
import type { ComponentProps } from 'react';
import { useState } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof Input>;

export default {
  component: Input,
  title: 'Components/Input',
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
    tickWhileTyping: true,
    onChange: (v) => console.log('New value: ', v),
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
  render: () => {
    const [value, setValue] = useState('Change my value');

    return (
      <Stack g={2} vertical>
        <Stack.Item>
          <Button onClick={() => setValue('Set to this')}>Set to this</Button>
        </Stack.Item>
        <Stack.Item>
          <Input onChange={setValue} value={value} />
        </Stack.Item>
      </Stack>
    );
  },
};

export const OnKeyDown: Story = {
  args: {
    ...Default.args,
    onKeyDown: (e) => console.log('onKeyDown', e.key, e),
  },
};
