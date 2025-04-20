import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps, useState } from 'react';
import { COMPONENT_COLORS } from '../lib/common/constants';
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
        <br />
        <Button compact {...args} /> Compact
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

export const Colors: Story = {
  render: () => {
    return (
      <>
        {[...COMPONENT_COLORS.states, ...COMPONENT_COLORS.spectrum].map(
          (color) => (
            <Button key={color} color={color}>
              {color}
            </Button>
          ),
        )}
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
  render: () => {
    const [startValue, setStartValue] = useState('Click me');
    const [otherValue, setOtherValue] = useState('External value');

    return (
      <Stack vertical width={10} g={5}>
        <Stack.Item>
          <Button.Input onCommit={setStartValue} value={startValue} />
        </Stack.Item>
        <Stack.Item>
          {otherValue}{' '}
          <Button.Input
            onCommit={setOtherValue}
            value={otherValue}
            buttonText="buttonText doesn't change"
          />
        </Stack.Item>
      </Stack>
    );
  },
};

type FileStory = StoryObj<ComponentProps<typeof Button.File>>;

export const File: FileStory = {
  args: {
    children: 'Click me',
    accept: 'image/*',
  },
  render: (args) => <Button.File {...args} />,
};
