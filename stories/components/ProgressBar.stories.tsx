import { COMPONENT_COLORS } from '@common/constants';
import { Button, ProgressBar, Stack } from '@components';
import { type ComponentProps, type PropsWithChildren, useState } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof ProgressBar>;

export default {
  component: ProgressBar,
  title: 'Components/ProgressBar',
  argTypes: {
    value: { control: 'number' },
    color: { control: 'text' },
    minValue: { control: 'number' },
    maxValue: { control: 'number' },
    empty: { control: 'boolean' },
    fractionDigits: { control: 'number' },
    children: { control: 'text' },
  },
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

type PreviewProps = {
  color?: string;
  empty?: boolean;
} & PropsWithChildren;

function ProgressBarPreview(props: PreviewProps) {
  const [value, setValue] = useState(50);
  const { color, empty } = props;

  return (
    <Stack.Item grow key={color}>
      <Stack fill g={0.33}>
        <Stack.Item>
          <Button
            color={color}
            icon="angles-left"
            onClick={() => setValue(0)}
          />
        </Stack.Item>
        <Stack.Item>
          <Button
            color={color}
            icon="angle-left"
            onClick={() => setValue(Math.max(0, value - 10))}
          />
        </Stack.Item>
        <Stack.Item grow>
          <ProgressBar
            color={color}
            empty={empty}
            maxValue={100}
            value={value}
          />
        </Stack.Item>
        <Stack.Item>
          <Button
            color={color}
            icon="angle-right"
            onClick={() => setValue(Math.min(100, value + 10))}
          />
        </Stack.Item>
        <Stack.Item>
          <Button
            color={color}
            icon="angles-right"
            onClick={() => setValue(100)}
          />
        </Stack.Item>
      </Stack>
    </Stack.Item>
  );
}

export const Default: Story = {
  render: () => (
    <Stack vertical>
      <ProgressBarPreview />
    </Stack>
  ),
};

export const Empty: Story = {
  render: () => (
    <Stack vertical>
      <ProgressBarPreview empty />
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack vertical>
      States
      {[...COMPONENT_COLORS.states].map((color) => (
        <ProgressBarPreview color={color} key={color} />
      ))}
      Spectrum
      {[...COMPONENT_COLORS.spectrum].map((color) => (
        <ProgressBarPreview color={color} key={color} />
      ))}
    </Stack>
  ),
};
