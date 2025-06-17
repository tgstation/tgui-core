import { Button, Icon, InfinitePlane } from '@components';
import { type ComponentProps, useState } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';
import gridBackground from '../../static/grid_background.png';

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

export const Default: Story = {
  render: () => {
    const [coords, setCoords] = useState([165, 250]);

    return (
      <div>
        <Button onClick={() => setCoords([0, 0])}>Jump to (0, 0)</Button>
        <Button onClick={() => setCoords([300, 300])}>
          Jump to (300, 300)
        </Button>
        <div
          style={{
            border: '1px solid silver',
            height: 600,
            width: 600,
          }}
        >
          <InfinitePlane
            backgroundImage={gridBackground}
            imageWidth={300}
            initialLeft={165}
            initialTop={250}
            zoomToX={coords[0]}
            zoomToY={coords[1]}
            onBackgroundMoved={(newX, newY) => console.log(newX, newY)}
          >
            {fontAwesomeEmoticons.map((icon, index) => (
              <Icon
                key={icon}
                name={icon}
                style={{
                  color: 'orange',
                  left: index * 50,
                  position: 'absolute',
                }}
              />
            ))}
          </InfinitePlane>
        </div>
      </div>
    );
  },
};
