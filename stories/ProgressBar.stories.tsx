import type { Meta } from '@storybook/react';
import type { ComponentProps } from 'react';
import { useState } from 'react';
import { COMPONENT_COLORS } from '../lib/common/constants';
import { Button, ProgressBar, Stack } from '../lib/components';

type StoryProps = ComponentProps<typeof ProgressBar>;
export default {
  component: ProgressBar,
  title: 'Components/ProgressBar',
} satisfies Meta<StoryProps>;

export const Default = {
  args: {
    children: 'ProgressBar',
    minValue: 0,
    maxValue: 100,
  },

  render: (args) => {
    const [value, setValue] = useState(0);
    return (
      <Stack vertical>
        {[...COMPONENT_COLORS.states, ...COMPONENT_COLORS.spectrum].map(
          (color) => (
            <Stack.Item key={color} grow>
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
                  <ProgressBar color={color} value={value} {...args} />
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
          ),
        )}
      </Stack>
    );
  },
};
