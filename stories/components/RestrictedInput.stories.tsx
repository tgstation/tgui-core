import { Button, RestrictedInput, Stack } from '@components';
import { type ComponentProps, useState } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof RestrictedInput>;

export default {
  component: RestrictedInput,
  title: 'Components/RestrictedInput',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState(1);

    return (
      <RestrictedInput onChange={(value) => setValue(value)} value={value} />
    );
  },
};

export const Fluid: Story = {
  render: () => {
    const [value, setValue] = useState(1);

    return (
      <RestrictedInput
        fluid
        onChange={(value) => setValue(value)}
        value={value}
      />
    );
  },
};

export const WithFloats: Story = {
  render: () => {
    const [value, setValue] = useState(0.5);

    return (
      <RestrictedInput
        allowFloats
        maxValue={3}
        onChange={(value) => setValue(value)}
        value={value}
      />
    );
  },
};

export const SendParentValue: Story = {
  render: () => {
    const [parentValue, setParentValue] = useState(5);

    return (
      <>
        <Button onClick={() => setParentValue(0)}>Min</Button>
        <RestrictedInput onChange={setParentValue} value={parentValue} />
        <Button onClick={() => setParentValue(103000)}>Max</Button>
      </>
    );
  },
};

export const AutoSelect: Story = {
  render: () => {
    const [value, setValue] = useState(1);

    return (
      <RestrictedInput
        autoSelect
        onChange={(value) => setValue(value)}
        value={value}
      />
    );
  },
};

export const Negative: Story = {
  render: () => {
    const [value, setValue] = useState(1);

    return (
      <RestrictedInput
        maxValue={5}
        minValue={-5}
        onChange={(value) => setValue(value)}
        value={value}
      />
    );
  },
};

export const Invalid: Story = {
  render: () => {
    const [value, setValue] = useState(1);

    return (
      <Stack vertical>
        <Stack.Item>
          <Button onClick={() => setValue(103000)}>Set Out of range</Button>
        </Stack.Item>
        <Stack.Item>
          <RestrictedInput
            maxValue={5}
            minValue={-5}
            onChange={(value) => setValue(value)}
            value={value}
          />
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
