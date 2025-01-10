import type { Meta, StoryObj } from '@storybook/react';
import { type ComponentProps, useState } from 'react';
import { Button, Icon, ImageButton } from '../lib/components';

const soulFish = (
  <span style={{ color: 'rgba(255, 255, 255, 0.5' }}>SoulFish</span>
);
const soulFishImage =
  'iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAIVBMVEXAwMAAAP8AAMwAZv9mMwCZZjMAAAD/mTP/zGb/ADMHBwd3bPqIAAAAAXRSTlMAQObYZgAAAI5JREFUKJFjYBhkQAiNz2iEJiAMEmBxQBIAaXENQOgwBgqwhEJVsKWlJRkbCsAF2NLKy9OSjQ0FVWEC5Rlt5cnGxsKmIVADKjo62oWBAoYwMyo6Z6AKlHd0lAMFlK1cYXrKywuNgQIL4AIMDEpAFauA9iIcthjkMgYXuACTlLKhAornFFctQvUtkyLDgAIAaJcdwdTNoTsAAAAASUVORK5CYII=';

type StoryProps = ComponentProps<typeof ImageButton>;
export default {
  component: ImageButton,
  title: 'Components/ImageButton',
} satisfies Meta<StoryProps>;

type Story = StoryObj<StoryProps>;

export const Default: Story = {
  args: {
    children: 'ImageButton',
  },
};

export const DefaultFluid: Story = {
  args: {
    fluid: true,
    title: 'ImageButton',
    children: 'It will take up the entire available width',
  },
};

export const FilledDefault: Story = {
  render: (args) => {
    const [disabled, setDisabled] = useState(false);
    const [selected, setSelected] = useState(false);

    return (
      <ImageButton
        {...args}
        base64={soulFishImage}
        disabled={disabled}
        selected={selected}
        buttons={
          <Button
            icon={'power-off'}
            color={disabled ? 'bad' : 'transparent'}
            onClick={() => setDisabled(!disabled)}
          />
        }
        buttonsAlt={soulFish}
        tooltip={'Also, you can Right Click on it'}
        tooltipPosition={'bottom'}
        onClick={() => setSelected(!selected)}
        onRightClick={() => setDisabled(!disabled)}
      >
        Hover me
      </ImageButton>
    );
  },
};

export const FilledFluid: Story = {
  args: {
    fluid: true,
    title: 'ImageButton',
    base64: soulFishImage,
    tooltip: 'Also, you can Right Click on it',
    tooltipPosition: 'bottom',
  },

  render: (args) => {
    const [disabled, setDisabled] = useState(false);
    const [selected, setSelected] = useState(false);
    const buttons = (
      <Button
        color={disabled ? 'bad' : 'transparent'}
        onClick={() => setDisabled(!disabled)}
      >
        <Icon name={'power-off'} size={1.66} mb={1} />
        <br />
        {disabled ? 'Enable' : 'Disable'}
      </Button>
    );

    return (
      <>
        <ImageButton
          {...args}
          disabled={disabled}
          selected={selected}
          buttonsAlt={buttons}
          onClick={() => setSelected(!selected)}
          onRightClick={() => setDisabled(!disabled)}
        >
          Fluid with buttonsAlt prop. buttonsAlt container has a fixed width
          that depends on the size of the image
        </ImageButton>
        <ImageButton
          {...args}
          disabled={disabled}
          selected={selected}
          buttons={buttons}
          onClick={() => setSelected(!selected)}
          onRightClick={() => setDisabled(!disabled)}
        >
          Fluid with buttons prop. buttons container can have custom width. Here
          is auto width
        </ImageButton>
      </>
    );
  },
};

export const Mixed: Story = {
  render: (args) => {
    const [disabled, setDisabled] = useState(false);
    const [selected, setSelected] = useState(false);
    const [compact, setCompact] = useState(false);

    const info = (
      <>
        You can mix layouts without making new constants for each one.
        <br />
        If you are MAD enough.
      </>
    );

    const controls = (
      <>
        <Button
          icon={'power-off'}
          color={disabled ? 'bad' : 'transparent'}
          onClick={() => setDisabled(!disabled)}
        />
        <Button
          icon={compact ? 'expand' : 'minimize'}
          color={'transparent'}
          onClick={() => setCompact(!compact)}
        />
      </>
    );

    return (
      <ImageButton
        {...args}
        fluid={!compact}
        title={'ImageButton'}
        base64={soulFishImage}
        imageSize={compact ? 96 : 64}
        disabled={disabled}
        selected={selected}
        buttons={compact && controls}
        buttonsAlt={compact ? soulFish : controls}
        tooltip={compact && info}
        tooltipPosition={'bottom'}
        onClick={() => setSelected(!selected)}
        onRightClick={() => setDisabled(!disabled)}
      >
        {!compact ? info : 'ImageButton'}
      </ImageButton>
    );
  },
};

export const Colors: Story = {
  render: (args) => {
    const [disabled, setDisabled] = useState(false);
    const [selected, setSelected] = useState(false);
    const [compact, setCompact] = useState(false);

    const COLORS = [
      'red',
      'orange',
      'yellow',
      'olive',
      'green',
      'teal',
      'blue',
      'violet',
      'purple',
      'pink',
      'brown',
      'grey',
      'light-grey',
      'label',
      'good',
      'average',
      'bad',
      'black',
      'white',
    ];

    const controls = (
      <>
        <Button
          icon={'power-off'}
          color={disabled ? 'bad' : 'transparent'}
          onClick={() => setDisabled(!disabled)}
        />
        <Button
          icon={compact ? 'expand' : 'minimize'}
          color={'transparent'}
          onClick={() => setCompact(!compact)}
        />
      </>
    );

    return (
      <>
        {COLORS.map((color) => (
          <ImageButton
            {...args}
            key={color}
            color={color}
            fluid={!compact}
            title={!compact ? color : ''}
            base64={soulFishImage}
            imageSize={compact ? 96 : 48}
            disabled={disabled}
            selected={selected}
            buttons={compact && controls}
            buttonsAlt={compact ? soulFish : controls}
            onClick={() => setSelected(!selected)}
            onRightClick={() => setDisabled(!disabled)}
          >
            {compact && color}
          </ImageButton>
        ))}
      </>
    );
  },
};
