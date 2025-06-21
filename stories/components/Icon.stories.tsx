import { Icon } from '@components';
import type { ComponentProps } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

type StoryProps = ComponentProps<typeof Icon>;

export default {
  component: Icon,
  title: 'Components/Icon',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    name: 'question',
  },
};

export const Stack: Story = {
  render() {
    return (
      <>
        <Icon name="lemon" />
        <Icon name="slash" color="red" />
        <br />
        <Icon.Stack>
          <Icon name="lemon" />
          <Icon name="slash" color="red" />
        </Icon.Stack>
      </>
    );
  },
};
