import { RefObject } from 'react';
import { FlexItemProps, FlexProps } from './Flex';
type Props = Partial<{
    /** Fills available space. */
    fill: boolean;
    /** Reverses the stack. */
    reverse: boolean;
    /** Flex column */
    vertical: boolean;
    /** Adds zebra striping to the stack. */
    zebra: boolean;
}> & FlexProps;
/**
 * ## Stack
 * A higher-level component that is based on
 * [Flex](https://github.com/tgstation/tgui-core/tree/main/lib/components/Flex.tsx).
 *
 * The main difference from `Flex`, is that this component automatically adds
 * spacing between all stack items, reducing the boilerplate that you have to write!
 *
 * Consists of two elements: `<Stack>` and `<Stack.Item>`.
 *
 * Stacks can be vertical by adding a `vertical` property.
 *
 * @example
 * ```tsx
 * <Stack vertical>
 *   <Stack.Item grow>Button description</Stack.Item>
 *   <Stack.Item>
 *     <Button>Perform an action</Button>
 *   </Stack.Item>
 * </Stack>
 * ```
 *
 * ### High level window layout
 * Stacks can be used for high level window layout.
 * Make sure to use the `fill` property.
 *
 * @example
 * ```tsx
 * <Window>
 *   <Window.Content>
 *     <Stack fill>
 *       <Stack.Item>
 *         <Section fill>Sidebar</Section>
 *       </Stack.Item>
 *       <Stack.Item grow>
 *         <Stack fill vertical>
 *           <Stack.Item grow>
 *             <Section fill scrollable>
 *               Main content
 *             </Section>
 *           </Stack.Item>
 *           <Stack.Item>
 *             <Section>Bottom pane</Section>
 *           </Stack.Item>
 *         </Stack>
 *       </Stack.Item>
 *     </Stack>
 *   </Window.Content>
 * </Window>
 * ```
 */
export declare function Stack(props: Props): import("react/jsx-runtime").JSX.Element;
export declare namespace Stack {
    var Item: typeof StackItem;
    var Divider: typeof StackDivider;
}
type StackItemProps = FlexItemProps & Partial<{
    innerRef: RefObject<HTMLDivElement | null>;
}>;
declare function StackItem(props: StackItemProps): import("react/jsx-runtime").JSX.Element;
type StackDividerProps = FlexItemProps & Partial<{
    hidden: boolean;
}>;
declare function StackDivider(props: StackDividerProps): import("react/jsx-runtime").JSX.Element;
export {};
