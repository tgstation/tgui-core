import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Button } from '../lib/components/Button';

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

type CheckboxStory = StoryObj<ComponentProps<typeof Button.Checkbox>>;

export const Checkbox: CheckboxStory = {
  args: {
    children: 'Click me',
    checked: false,
  },
  render: (args) => <Button.Checkbox {...args} />,
};

type ConfirmStory = StoryObj<ComponentProps<typeof Button.Confirm>>;

export const Confirm: ConfirmStory = {
  args: {
    children: 'Click me',
    confirmColor: 'bad',
    confirmContent: 'Confirm?',
    confirmIcon: 'question',
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
