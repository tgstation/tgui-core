import type { ReactNode } from 'react';
import { canRender, classes } from '../common/react';
import { computeBoxClassName, computeBoxProps } from '../common/ui';
import type { BoxProps } from './Box';
import { Icon } from './Icon';

type Props = Partial<{
  /**
   * Similarly to `fill` on
   * [Section](https://github.com/tgstation/tgui-core/tree/main/lib/components/Section.tsx),
   * tabs will fill all available vertical space. Only makes sense in a vertical
   * configuration.
   */
  fill: boolean;
  /** If true, tabs will take all available horizontal space. */
  fluid: boolean;
  /** Use a vertical configuration, where tabs will be stacked vertically. */
  vertical: boolean;
}> &
  BoxProps;

export function Tabs(props: Props) {
  const { className, vertical, fill, fluid, children, ...rest } = props;

  return (
    <div
      className={classes([
        'Tabs',
        vertical ? 'Tabs--vertical' : 'Tabs--horizontal',
        fill && 'Tabs--fill',
        fluid && 'Tabs--fluid',
        className,
        computeBoxClassName(rest),
      ])}
      {...computeBoxProps(rest)}
    >
      {children}
    </div>
  );
}

type TabProps = Partial<{
  /** Font awesome icon. @see https://fontawesome.com/v6/search?o=r&m=free */
  icon: string;
  /** Causes the icon to spin */
  iconSpin: boolean;
  /** Left slot content */
  leftSlot: ReactNode;
  /** Called when element is clicked */
  onClick: (e?) => void;
  /** Right slot content */
  rightSlot: ReactNode;
  /** Whether the tab is selected */
  selected: boolean;
}> &
  BoxProps;

function TabItem(props: TabProps) {
  const {
    className,
    selected,
    color,
    icon,
    iconSpin,
    leftSlot,
    rightSlot,
    children,
    onClick,
    ...rest
  } = props;

  function handleClick(evt) {
    if (onClick) {
      onClick(evt);
      evt.target.blur();
    }
  }

  return (
    <div
      className={classes([
        'Tab',
        'Tabs__Tab',
        `Tab--color--${color}`,
        selected && 'Tab--selected',
        className,
        computeBoxClassName(rest),
      ])}
      onClick={handleClick}
      {...computeBoxProps(rest)}
    >
      {(canRender(leftSlot) && <div className="Tab__left">{leftSlot}</div>) ||
        (!!icon && (
          <div className="Tab__left">
            <Icon name={icon} spin={iconSpin} />
          </div>
        ))}
      <div className="Tab__text">{children}</div>
      {canRender(rightSlot) && <div className="Tab__right">{rightSlot}</div>}
    </div>
  );
}

/**
 * ## Tabs
 *
 * Tabs make it easy to explore and switch between different views.
 *
 * Here is an example of how you would construct a simple tabbed view:
 *
 * Example:
 *
 * ```tsx
 * <Tabs>
 *   <Tabs.Tab
 *     selected={tabIndex === 1}
 *     onClick={() => setTabIndex(1)}>
 *     Tab one
 *   </Tabs.Tab>
 *   <Tabs.Tab
 *     selected={tabIndex === 2}
 *     onClick={() => setTabIndex(2)}>
 *     Tab two
 *   </Tabs.Tab>
 * </Tabs>
 * <Box>
 *   Tab selected: {tabIndex}
 * </Box>
 * ```
 *
 * Notice that tabs do not contain state. It is your job to track the selected
 * tab, handle clicks and place tab content where you need it. In return, you get
 * a lot of flexibility in regards to how you can layout your tabs.
 *
 * Tabs also support a vertical configuration. This is usually paired with
 * - [View documentation on tgui core]([Stack](https://tgstation.github.io/tgui-core/?path=/docs/components-stack--docs))
 * to render tab content to the right.
 *
 * Example:
 *
 * ```tsx
 * <Stack>
 *   <Stack.Item>
 *     <Tabs vertical>...</Tabs>
 *   </Stack.Item>
 *   <Stack.Item grow basis={0}>
 *     Tab content.
 *   </Stack.Item>
 * </Stack>
 * ```
 *
 * If you need to combine a tab section with other elements, or if you want to
 * add scrollable functionality to tabs, pair them with the
 * - [View documentation on tgui core]([Section](https://tgstation.github.io/tgui-core/?path=/docs/components-section--docs))
 * component:
 *
 * Example:
 *
 * ```tsx
 * <Section fill fitted scrollable width="128px">
 *   <Tabs vertical>...</Tabs>
 *   ... other things ...
 * </Section>
 * ```
 *
 * - [View documentation on tgui core](https://tgstation.github.io/tgui-core/?path=/docs/components-tabs--docs)
 */
export namespace Tabs {
  /**
   * ## Tabs.Tab
   * An individual tab element. Tabs function like buttons, so they inherit
   * a lot of `Button` props.
   */
  export const Tab = TabItem;
}
