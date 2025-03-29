import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import { Icon } from '../lib/components/Icon';
import { InfinitePlane } from '../lib/components/InfinitePlane';
import gridBackground from './assets/grid_background.png';

type StoryProps = ComponentProps<typeof InfinitePlane>;

export default {
  component: InfinitePlane,
  title: 'Components/InfinitePlane',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

const fontAwesomeEmoticons = [
  'smile',
  'frown',
  'meh',
  'laugh',
  'sad-cry',
  'angry',
  'shocked',
];

function InfinitePlaneWrapper() {
  return (
    <div
      style={{
        height: 600,
        width: 600,
        border: '1px solid silver',
      }}
    >
      <InfinitePlane
        imageWidth={300}
        backgroundImage={gridBackground}
        onBackgroundMoved={(newX, newY) => console.log(newX, newY)}
        initialLeft={165}
        initialTop={250}
      >
        {fontAwesomeEmoticons.map((icon) => (
          <Icon key={icon} name={icon} ml={5} style={{ color: 'orange' }} />
        ))}
      </InfinitePlane>
    </div>
  );
}

export const Default: Story = {
  render: () => <InfinitePlaneWrapper />,
};
