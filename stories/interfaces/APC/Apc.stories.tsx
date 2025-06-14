import { Button, Stack } from '@components';
import { type ComponentProps, useState } from 'react';
import type { Meta } from 'storybook-react-rsbuild';
import { Apc } from './ui';

type StoryProps = ComponentProps<typeof Apc>;

export default {
  component: Apc,
  title: 'Interfaces/APC',
  tags: ['!autodocs'],
} satisfies Meta<StoryProps>;

export const Default = {
  render: () => {
    const [locked, setLocked] = useState(true);

    return (
      <Stack fill align="center" g={5}>
        <Stack.Item>
          <Apc locked={locked} />
        </Stack.Item>
        <Stack.Item>
          <Stack vertical>
            <Stack.Item>
              <Button
                onClick={() => setLocked(!locked)}
                icon="id-card"
                selected={!locked}
              >
                Swipe ID
              </Button>
            </Stack.Item>
            <Stack.Item>
              {!locked ? 'Authenticated' : 'Unauthenticated'}
            </Stack.Item>
          </Stack>
        </Stack.Item>
      </Stack>
    );
  },
};
