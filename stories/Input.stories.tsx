import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { useState } from 'react';
import { Button } from '../lib/components/Button';
import { Input } from '../lib/components/Input';
import { Stack } from '../lib/components/Stack';

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
    expensive: true,
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
      <Stack vertical g={2}>
        <Stack.Item>
          <Button onClick={() => setValue('Set to this')}>Set to this</Button>
        </Stack.Item>
        <Stack.Item>
          <Input value={value} onChange={setValue} />
        </Stack.Item>
      </Stack>
    );
  },
};
