import { COMPONENT_COLORS } from '@common/constants';
import { Button, Icon, ImageButton } from '@components';
import { type ComponentProps, useState } from 'react';
import type { Meta, StoryObj } from 'storybook-react-rsbuild';

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
    children: 'It will take up the entire available width',
    fluid: true,
    title: 'ImageButton',
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
        buttons={
          <Button
            color={disabled ? 'bad' : 'transparent'}
            icon={'power-off'}
            onClick={() => setDisabled(!disabled)}
          />
        }
        buttonsAlt={soulFish}
        disabled={disabled}
        onClick={() => setSelected(!selected)}
        onRightClick={() => setDisabled(!disabled)}
        selected={selected}
        tooltip={'Also, you can Right Click on it'}
        tooltipPosition={'bottom'}
      >
        Hover me
      </ImageButton>
    );
  },
};

export const FilledFluid: Story = {
  args: {
    base64: soulFishImage,
    fluid: true,
    title: 'ImageButton',
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
        <Icon mb={1} name={'power-off'} size={1.66} />
        <br />
        {disabled ? 'Enable' : 'Disable'}
      </Button>
    );

    return (
      <>
        <ImageButton
          {...args}
          buttonsAlt={buttons}
          disabled={disabled}
          onClick={() => setSelected(!selected)}
          onRightClick={() => setDisabled(!disabled)}
          selected={selected}
        >
          Fluid with buttonsAlt prop. buttonsAlt container has a fixed width
          that depends on the size of the image
        </ImageButton>
        <ImageButton
          {...args}
          buttons={buttons}
          disabled={disabled}
          onClick={() => setSelected(!selected)}
          onRightClick={() => setDisabled(!disabled)}
          selected={selected}
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
          color={disabled ? 'bad' : 'transparent'}
          icon={'power-off'}
          onClick={() => setDisabled(!disabled)}
        />
        <Button
          color={'transparent'}
          icon={compact ? 'expand' : 'minimize'}
          onClick={() => setCompact(!compact)}
        />
      </>
    );

    return (
      <ImageButton
        {...args}
        base64={soulFishImage}
        buttons={compact && controls}
        buttonsAlt={compact ? soulFish : controls}
        disabled={disabled}
        fluid={!compact}
        imageSize={compact ? 96 : 64}
        onClick={() => setSelected(!selected)}
        onRightClick={() => setDisabled(!disabled)}
        selected={selected}
        title={'ImageButton'}
        tooltip={compact && info}
        tooltipPosition={'bottom'}
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
    const [compact, setCompact] = useState(true);

    const controls = (
      <>
        <Button
          color={disabled ? 'bad' : 'transparent'}
          icon={'power-off'}
          onClick={() => setDisabled(!disabled)}
        />
        <Button
          color={'transparent'}
          icon={compact ? 'expand' : 'minimize'}
          onClick={() => setCompact(!compact)}
        />
      </>
    );

    return (
      <>
        {[...COMPONENT_COLORS.states, ...COMPONENT_COLORS.spectrum].map(
          (color) => (
            <ImageButton
              {...args}
              base64={soulFishImage}
              buttons={compact && controls}
              buttonsAlt={compact ? soulFish : controls}
              color={color}
              disabled={disabled}
              fluid={!compact}
              imageSize={compact ? 96 : 48}
              key={color}
              onClick={() => setSelected(!selected)}
              onRightClick={() => setDisabled(!disabled)}
              selected={selected}
              title={!compact ? color : ''}
            >
              {compact && color}
            </ImageButton>
          ),
        )}
      </>
    );
  },
};
