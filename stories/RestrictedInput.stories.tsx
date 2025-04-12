import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from 'lib/components/Stack';
import type { ComponentProps } from 'react';
import { useState } from 'react';
import { Button } from '../lib/components/Button';
import { RestrictedInput } from '../lib/components/RestrictedInput';

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
      <RestrictedInput value={value} onChange={(value) => setValue(value)} />
    );
  },
};

export const Fluid: Story = {
  render: () => {
    const [value, setValue] = useState(1);

    return (
      <RestrictedInput
        fluid
        value={value}
        onChange={(value) => setValue(value)}
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
        value={value}
        onChange={(value) => setValue(value)}
        maxValue={3}
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
        <RestrictedInput value={parentValue} onChange={setParentValue} />
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
        value={value}
        onChange={(value) => setValue(value)}
      />
    );
  },
};

export const Negative: Story = {
  render: () => {
    const [value, setValue] = useState(1);

    return (
      <RestrictedInput
        minValue={-5}
        maxValue={5}
        value={value}
        onChange={(value) => setValue(value)}
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
            value={value}
            onChange={(value) => setValue(value)}
            maxValue={5}
            minValue={-5}
          />
        </Stack.Item>
      </Stack>
    );
  },
};
