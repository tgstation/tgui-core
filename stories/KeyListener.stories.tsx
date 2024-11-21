import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps, useEffect } from 'react';
import { setupHotKeys } from '../lib/common/hotkeys';
import { KeyListener } from '../lib/components/KeyListener';

type StoryProps = ComponentProps<typeof KeyListener>;

export default {
  component: KeyListener,
  title: 'Components/KeyListener',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    onKey: () => {console.log('onKey')},
  },
};

export const InputWithKeyListener: Story = {
  render: () => {
    useEffect(() => {
      setupHotKeys();
    }, []);

    return (
      <>
      <h1>Example Input with KeyListener</h1>
      <input />
      <KeyListener onKeyDown={() => {console.log('onKey')}} />
    </>
    )
  },
  args: {
    onKey: () => { console.log('onKey'); },
  },
};
