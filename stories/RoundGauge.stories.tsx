import type { Meta } from '@storybook/react';
import { type ComponentProps, type PropsWithChildren, useState } from 'react';
import {
  Button,
  LabeledControls,
  RoundGauge,
  Section,
  Stack,
} from '../lib/components';

type StoryProps = ComponentProps<typeof RoundGauge>;
export default {
  component: RoundGauge,
  title: 'Components/RoundGauge',
} satisfies Meta<StoryProps>;

type PreviewProps = {
  ranges?: Record<string, [number, number]>;
} & PropsWithChildren;

function RoundGaugePreview(props: PreviewProps) {
  const [value, setValue] = useState(50);
  const { ranges } = props;

  return (
    <Stack.Item>
      <Section>
        <LabeledControls>
          <LabeledControls.Item label="Min">
            <Button
              color={'transparent'}
              fontSize={1.5}
              icon="angles-left"
              onClick={() => setValue(0)}
            />
          </LabeledControls.Item>
          <LabeledControls.Item label="-10">
            <Button
              color={'transparent'}
              fontSize={1.5}
              icon="angle-left"
              onClick={() => setValue(value - 10)}
            />
          </LabeledControls.Item>
          <RoundGauge
            alertAfter={75}
            maxValue={100}
            minValue={0}
            ranges={ranges || { primary: [0, 100] }}
            size={2.5}
            value={value}
          />
          <LabeledControls.Item label="+10">
            <Button
              color={'transparent'}
              fontSize={1.5}
              icon="angle-right"
              onClick={() => setValue(value + 10)}
            />
          </LabeledControls.Item>
          <LabeledControls.Item label="Max">
            <Button
              color={'transparent'}
              fontSize={1.5}
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
        <RoundGaugePreview />
      </Stack>
    );
  },
};

export const WithRanges = {
  render: () => {
    return (
      <Stack fill justify="center">
        <RoundGaugePreview
          ranges={{ average: [50, 75], bad: [75, 100], good: [0, 50] }}
        />
      </Stack>
    );
  },
};
