import { Floating } from '@components';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof Floating>;

export default {
  component: Floating,
  title: 'Components/Floating',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  render: () => {
    return (
      <Floating
        content={
          <div
            style={{
              border: 'thin solid white',
              background: 'black',
              color: 'white',
              padding: '0.5rem',
            }}
          >
            Floating Content
          </div>
        }
        hoverOpen
      >
        <div style={{ border: 'thin solid white', width: '10rem' }}>
          Hover me
        </div>
      </Floating>
    );
  },
};
