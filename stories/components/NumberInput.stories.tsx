import { Button, NumberInput, Stack } from '@components';
import { type ComponentProps, useState } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof NumberInput>;

export default {
  component: NumberInput,
  title: 'Components/NumberInput',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

function getRandom() {
  return Math.round(Math.random() * 50 * 50) / 100;
}

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(0);

    return (
      <Stack vertical>
        <Stack.Item>
          <Button onClick={() => setValue(getRandom())}>Randomize</Button>
        </Stack.Item>
        <Stack.Item>
          <NumberInput
            minValue={0}
            maxValue={50}
            width={5}
            step={1}
            value={value}
            onChange={setValue}
          />
        </Stack.Item>{' '}
        <Stack.Item style={{ userSelect: 'none', color: 'var(--color-label)' }}>
          Try dragging the control
        </Stack.Item>
      </Stack>
    );
  },
};
