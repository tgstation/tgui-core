import { type ComponentProps, type PropsWithChildren, useState } from 'react';
import type { Meta } from 'storybook-react-rsbuild';
import { COMPONENT_COLORS } from '../../lib/common/constants';
import { Button, ProgressBar, Stack } from '../../lib/components';

type StoryProps = ComponentProps<typeof ProgressBar>;
export default {
  component: ProgressBar,
  title: 'Components/ProgressBar',
} satisfies Meta<StoryProps>;

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
            onClick={() => setValue(value - 10)}
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
            onClick={() => setValue(value + 10)}
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
      <Stack vertical>
        <ProgressBarPreview />
      </Stack>
    );
  },
};

export const Empty = {
  render: () => {
    return (
      <Stack vertical>
        <ProgressBarPreview empty />
      </Stack>
    );
  },
};

export const Colors = {
  render: () => {
    return (
      <Stack vertical>
        {[...COMPONENT_COLORS.states, ...COMPONENT_COLORS.spectrum].map(
          (color) => (
            <ProgressBarPreview color={color} key={color} />
          ),
        )}
      </Stack>
    );
  },
};
