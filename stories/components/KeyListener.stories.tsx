import { type ComponentProps, useEffect } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import type { KeyEvent } from '../../lib/common/events';
import { setupHotKeys } from '../../lib/common/hotkeys';
import { KeyListener } from '../../lib/components/KeyListener';

type StoryProps = ComponentProps<typeof KeyListener>;

export default {
  component: KeyListener,
  title: 'Components/KeyListener',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const onKeyDown: Story = {
  render: () => {
    useEffect(() => {
      setupHotKeys();
    }, []);

    return (
      <KeyListener
        onKeyDown={(e: KeyEvent) => {
          console.log('onKeyDown', e.toString(), e);
        }}
      />
    );
  },
};
