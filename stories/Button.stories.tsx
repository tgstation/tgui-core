import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps, useState } from 'react';
import { Button, Stack } from '../lib/components';

type StoryProps = ComponentProps<typeof Button>;

export default {
  component: Button,
  title: 'Components/Button',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'Click me',
  },
};

export const WithIcon: Story = {
  args: {
    icon: 'envelope',
  },

  render: (args) => {
    return (
      <>
        <Button {...args}>Default</Button>
        <br />
        <Button {...args} iconPosition="right">
          Icon Right
        </Button>
        <br />
        <Button {...args} /> Only Icon
      </>
    );
  },
};

export const Ellipsis: Story = {
  args: {
    ellipsis: true,
    icon: 'envelope',
    children: 'Very long content. Very long content. Very long content.',
  },

  render: (args) => {
    return (
      <>
        <Button {...args} width={10} icon={null} />
        <Button {...args} width={10} />
        <Button {...args} ellipsis={false} width={10} />
        <Stack fill>
          {Array.from({ length: 10 }, () => (
            <Stack.Item grow key={'doesntMatter'}>
              <Button {...args} fluid>
                Inside Stack
              </Button>
            </Stack.Item>
          ))}
        </Stack>
      </>
    );
  },
};

type CheckboxStory = StoryObj<ComponentProps<typeof Button.Checkbox>>;

export const Checkbox: CheckboxStory = {
  args: {
    children: 'Click me',
    checked: false,
    color: 'default',
  },
  render: (args) => {
    const [checked, setChecked] = useState(false);

    return (
      <>
        ** Note that checkbox is transparent by default, so this is set to blue
        via params **
        <br />
        <br />
        <Button.Checkbox
          {...args}
          checked={checked}
          onClick={() => setChecked(!checked)}
        />
      </>
    );
  },
};

type ConfirmStory = StoryObj<ComponentProps<typeof Button.Confirm>>;

export const Confirm: ConfirmStory = {
  args: {
    children: 'Click me',
    confirmColor: 'bad',
    confirmContent: 'Confirm?',
    confirmIcon: '',
  },
  render: (args) => <Button.Confirm {...args} />,
};

type InputStory = StoryObj<ComponentProps<typeof Button.Input>>;

export const Input: InputStory = {
  args: {
    children: 'Click me',
  },
  render: (args) => <Button.Input {...args} />,
};

type FileStory = StoryObj<ComponentProps<typeof Button.File>>;

export const File: FileStory = {
  args: {
    children: 'Click me',
    accept: 'image/*',
  },
  render: (args) => <Button.File {...args} />,
};

export const WithTooltip: Story = {
  render: () => {
    return <Button tooltip="Tooltip">Hover!</Button>;
  },
};
