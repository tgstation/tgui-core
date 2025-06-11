import { COMPONENT_COLORS } from '@common/constants';
import { Button, Stack } from '@components';
import { type ComponentProps, useState } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

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

  render: (args) => {
    return (
      <>
        <Button {...args} />
        <Button {...args} color="transparent" />
        <br />
        <Button {...args} disabled />
        <Button {...args} color="transparent" disabled />
      </>
    );
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
    children: 'Very long content. Very long content. Very long content.',
    ellipsis: true,
    icon: 'envelope',
  },

  render: (args) => {
    return (
      <>
        <Button {...args} icon={null} width={10} />
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
            <Button color={color} key={color}>
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
    checked: false,
    children: 'Click me',
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
        <Button.Checkbox
          {...args}
          color="default"
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
      <Stack g={5} vertical width={10}>
        <Stack.Item>
          <Button.Input onCommit={setStartValue} value={startValue} />
        </Stack.Item>
        <Stack.Item>
          {otherValue}{' '}
          <Button.Input
            buttonText="buttonText doesn't change"
            onCommit={setOtherValue}
            value={otherValue}
          />
        </Stack.Item>
      </Stack>
    );
  },
};

type FileStory = StoryObj<ComponentProps<typeof Button.File>>;

export const File: FileStory = {
  args: {
    accept: 'image/*',
    children: 'Click me',
  },
  render: (args) => <Button.File {...args} />,
};
