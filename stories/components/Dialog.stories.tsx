import { Button, Dialog, Stack } from '@components';
import type { ComponentProps } from 'react';
import { useState } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof Dialog>;

export default {
  component: Dialog,
  title: 'Components/Dialog',
  argTypes: {
    title: { control: 'text' },
    width: { control: 'text' },
    height: { control: 'text' },
    onClose: { action: 'onClose' },
  },
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    title: 'Dialog title',
    children: 'Dialog content',
  },
  render: (args) => {
    const [open, setOpen] = useState(true);

    return (
      <Stack>
        {open ? (
          <Dialog
            {...args}
            onClose={() => {
              setOpen(false);
              args.onClose?.();
            }}
          />
        ) : (
          <Button onClick={() => setOpen(true)}>Open dialog</Button>
        )}
      </Stack>
    );
  },
};
