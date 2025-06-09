import { Stack, Tooltip } from '@components';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof Tooltip>;

export default {
  component: Tooltip,
  title: 'Components/Tooltip',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: () => {
    return (
      <div
        style={{
          display: 'flex',
          height: '100vh',
        }}
      >
        <Stack g={5} vertical>
          <Tooltip content="Tooltip content">
            <div style={{ border: 'thin solid red', padding: '5px' }}>
              Hover me
            </div>
          </Tooltip>
          <Tooltip content={false && 'Tooltip'}>
            <div style={{ border: 'thin solid blue', padding: '5px' }}>
              My content is falsy
            </div>
          </Tooltip>
        </Stack>
      </div>
    );
  },
};
