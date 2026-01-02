import { Button, RestrictedInput, Stack } from '@components';
import { type ComponentProps, useEffect, useState } from 'react';
import { fn } from 'storybook/test';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof RestrictedInput>;

export default {
  component: RestrictedInput,
  title: 'Components/RestrictedInput',
  argTypes: {
    value: { control: 'number' },
    minValue: { control: 'number' },
    maxValue: { control: 'number' },
    allowFloats: { control: 'boolean' },
    fluid: { control: 'boolean' },
    autoSelect: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

function ControlledInputStory(args: Partial<StoryProps>) {
  const [value, setValue] = useState(args.value ?? 0);

  // sync external control changes
  useEffect(() => {
    if (args.value !== undefined && args.value !== value) {
      setValue(args.value);
    }
  }, [args.value]);

  return <RestrictedInput {...args} value={value} onChange={setValue} />;
}

export const Default: Story = {
  render: (args) => <ControlledInputStory {...args} />,
  args: { value: 1 },
};

export const Fluid: Story = {
  render: (args) => <ControlledInputStory {...args} />,
  args: { value: 1, fluid: true },
};

export const WithFloats: Story = {
  render: (args) => <ControlledInputStory {...args} />,
  args: { value: 0.5, allowFloats: true, maxValue: 3 },
};

export const SendParentValue: Story = {
  render: () => {
    const [parentValue, setParentValue] = useState(5);

    return (
      <Stack g={1} vertical>
        <Stack.Item>
          <Button onClick={() => setParentValue(0)}>Min</Button>
        </Stack.Item>
        <Stack.Item>
          <RestrictedInput value={parentValue} onChange={setParentValue} />
        </Stack.Item>
        <Stack.Item>
          <Button onClick={() => setParentValue(103000)}>Max</Button>
        </Stack.Item>
      </Stack>
    );
  },
};

export const AutoSelect: Story = {
  render: (args) => <ControlledInputStory {...args} autoSelect />,
  args: { value: 1 },
};

export const Negative: Story = {
  render: (args) => (
    <ControlledInputStory {...args} minValue={-5} maxValue={5} />
  ),
  args: { value: 1 },
};

export const Invalid: Story = {
  render: () => {
    const [value, setValue] = useState(1);

    return (
      <Stack vertical g={1}>
        <Stack.Item>
          <Button onClick={() => setValue(103000)}>Set Out of range</Button>
        </Stack.Item>
        <Stack.Item>
          <RestrictedInput
            value={value}
            minValue={-5}
            maxValue={5}
            onChange={setValue}
          />
        </Stack.Item>
      </Stack>
    );
  },
};

export const OnKeyDown: Story = {
  args: {
    ...Default.args,
    onKeyDown: fn(),
    value: 1,
  },
};
