import { Flex, type FlexProps } from './Flex';

/**
 *  ## LabeledControls
 * LabeledControls is a horizontal grid that is designed to hold various
 * controls, like [Knobs](https://github.com/tgstation/tgui-core/tree/main/lib/components/Knob.tsx)
 * or small [Buttons](https://github.com/tgstation/tgui-core/tree/main/lib/components/Button.tsx).
 *
 * Every item in this grid is labeled at the bottom.
 *
 * @example
 * ```tsx
 * <LabeledControls>
 *   <LabeledControls.Item label="Temperature"><Knob /></LabeledControls.Item>
 *   <LabeledControls.Item label="Submit"><Button /></LabeledControls.Item>
 * </LabeledControls>
 * ```
 */
export function LabeledControls(props: FlexProps) {
  const { children, wrap, ...rest } = props;

  return (
    <Flex
      align="stretch"
      justify="space-between"
      mx={-0.5}
      wrap={wrap}
      {...rest}
    >
      {children}
    </Flex>
  );
}

type ItemProps = {
  label: string;
} & FlexProps;

function LabeledControlsItem(props: ItemProps) {
  const { label, children, mx = 1, ...rest } = props;

  return (
    <Flex.Item mx={mx}>
      <Flex
        align="center"
        direction="column"
        height="100%"
        justify="space-between"
        textAlign="center"
        {...rest}
      >
        <Flex.Item />
        <Flex.Item>{children}</Flex.Item>
        <Flex.Item color="label">{label}</Flex.Item>
      </Flex>
    </Flex.Item>
  );
}

LabeledControls.Item = LabeledControlsItem;
