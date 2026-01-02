import { ColorBox } from '@components';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

export default {
  title: 'Components/ColorBox',
  component: ColorBox,
  argTypes: {
    color: {
      control: 'color',
      description: 'The background color of the box.',
    },
    content: {
      control: 'text',
      description: 'Optional 1-character content (e.g., a letter or symbol).',
    },
    textColor: {
      control: 'color',
      description: 'Color of the content inside the box.',
    },
  },
} satisfies Meta<typeof ColorBox>;

type Story = StoryObj<typeof ColorBox>;

export const Default: Story = {
  args: {
    color: 'red',
    content: 'R',
  },
};

export const Status: Story = {
  render: () => (
    <>
      <ColorBox color="green" content="✔" />
      <ColorBox color="red" content="✘" />
      <ColorBox color="yellow" content="!" />
    </>
  ),
};

export const Swatch: Story = {
  args: {
    color: 'blue',
  },
};
