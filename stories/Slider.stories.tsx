import type { Meta } from '@storybook/react';
import { type ComponentProps, type PropsWithChildren, useState } from 'react';
import { COMPONENT_COLORS } from '../lib/common/constants';
import { Button, Slider, Stack } from '../lib/components';

type StoryProps = ComponentProps<typeof Slider>;
export default {
  component: Slider,
  title: 'Components/Slider',
} satisfies Meta<StoryProps>;

type PreviewProps = {
  color?: string;
  ranges?: Record<string, [number, number]>;
} & PropsWithChildren;

function SliderPreview(props: PreviewProps) {
  const [value, setValue] = useState(50);
  const { color, ranges } = props;

  return (
    <Stack.Item key={color}>
      <Stack fill g={0.33}>
        <Stack.Item>
          <Button
            color={color}
            icon="angles-left"
            onClick={() => setValue(0)}
          />
        </Stack.Item>
        <Stack.Item width={20}>
          <Slider
            animated
            color={color}
            value={value}
            fillValue={value}
            minValue={0}
            maxValue={100}
            ranges={ranges || { default: [0, 100] }}
            onDrag={(_, v) => setValue(v)}
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

export const Default = {
  render: () => {
    return (
      <Stack justify="center">
        <SliderPreview />
      </Stack>
    );
  },
};

export const Colors = {
  render: () => {
    return (
      <Stack wrap justify="center">
        {[...COMPONENT_COLORS.states, ...COMPONENT_COLORS.spectrum].map(
          (color) => (
            <SliderPreview key={color} color={color} />
          ),
        )}
      </Stack>
    );
  },
};

export const Ranges = {
  render: () => {
    return (
      <Stack justify="center">
        <SliderPreview
          ranges={{ good: [0, 50], average: [50, 75], bad: [75, 100] }}
        />
      </Stack>
    );
  },
};
