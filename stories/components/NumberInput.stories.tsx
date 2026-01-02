import { Button, NumberInput, Stack } from '@components';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof NumberInput>;

export default {
  component: NumberInput,
  title: 'Components/NumberInput',
  argTypes: {
    value: { control: 'number' },
    minValue: { control: 'number' },
    maxValue: { control: 'number' },
    step: { control: 'number' },
    width: { control: 'number' },
    disabled: { control: 'boolean' },
    onChange: { action: 'changed' },
  },
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

function getRandom() {
  return Math.round(Math.random() * 50 * 50) / 100;
}

export const Default: Story = {
  render: (args) => (
    <Stack vertical>
      <Stack.Item>
        <Button onClick={() => args.onChange?.(getRandom())}>Randomize</Button>
      </Stack.Item>
      <Stack.Item>
        <NumberInput {...args} />
      </Stack.Item>
      <Stack.Item style={{ userSelect: 'none', color: 'var(--color-label)' }}>
        Try dragging the control
      </Stack.Item>
    </Stack>
  ),
  args: {
    value: 0,
    minValue: 0,
    maxValue: 50,
    step: 1,
    width: 5,
  },
};
