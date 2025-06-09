import { COMPONENT_COLORS } from '@common/constants';
import { Button, Knob, LabeledControls, Section, Stack } from '@components';
import { type ComponentProps, type PropsWithChildren, useState } from 'react';
import type { Meta } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof Knob>;
export default {
  component: Knob,
  title: 'Components/Knob',
} satisfies Meta<StoryProps>;

type PreviewProps = {
  color?: string;
} & PropsWithChildren;

function KnobPreview(props: PreviewProps) {
  const [value, setValue] = useState(50);
  const { color } = props;

  return (
    <Stack.Item key={color}>
      <Section>
        <LabeledControls>
          <LabeledControls.Item label="Min">
            <Button
              color={'transparent'}
              fontSize={2.5}
              icon="angles-left"
              onClick={() => setValue(0)}
            />
          </LabeledControls.Item>
          <LabeledControls.Item label={color || 'Default'}>
            <Knob
              color={color}
              maxValue={100}
              minValue={0}
              onChange={(_, v) => setValue(v)}
              size={2.5}
              value={value}
            />
          </LabeledControls.Item>
          <LabeledControls.Item label="Max">
            <Button
              color={'transparent'}
              fontSize={2.5}
              icon="angles-right"
              onClick={() => setValue(100)}
            />
          </LabeledControls.Item>
        </LabeledControls>
      </Section>
    </Stack.Item>
  );
}

export const Default = {
  render: () => {
    return (
      <Stack fill justify="center">
        <KnobPreview />
      </Stack>
    );
  },
};

export const Colors = {
  render: () => {
    return (
      <Stack fill g={1} justify="center" wrap>
        {[...COMPONENT_COLORS.states, ...COMPONENT_COLORS.spectrum].map(
          (color) => (
            <KnobPreview color={color} key={color} />
          ),
        )}
      </Stack>
    );
  },
};
