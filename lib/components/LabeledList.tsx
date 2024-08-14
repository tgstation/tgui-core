import { PropsWithChildren, ReactNode } from 'react';

import { BooleanLike, classes } from '../common/react';
import styles from '../styles/components/LabeledList.module.scss';
import { Box, unit } from './Box';
import { Divider } from './Divider';
import { Tooltip } from './Tooltip';

export function LabeledList(props: PropsWithChildren) {
  const { children } = props;
  return (
    <table className="LabeledList">
      <tbody>{children}</tbody>
    </table>
  );
}

type LabeledListItemProps = Partial<{
  /** Buttons to render aside the content. */
  buttons: ReactNode;
  /** Content of this labeled item. */
  children: ReactNode;
  /** Applies a CSS class to the element. */
  className: string | BooleanLike;
  /** Sets the color of the content text. */
  color: string;
  /** @deprecated */
  content: any;
  /**
   * Sometimes this does not properly register in TS.
   * See [react key docs](https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key) for more info.
   */
  key: string | number;
  /** Item label. Appends a colon at the end. */
  label: ReactNode;
  /** Sets the color of the label. */
  labelColor: string;
  /** Lets the label wrap and makes it not take the minimum width. */
  labelWrap: boolean;
  /**
   * Align the content text.
   *
   * - `left` (default)
   * - `center`
   * - `right`
   */
  textAlign: string;
  /** Tooltip text. */
  tooltip: string;
  /**
   * Align both the label and the content vertically.
   *
   * - `baseline` (default)
   * - `top`
   * - `middle`
   * - `bottom`
   */
  verticalAlign: string;
}>;

function LabeledListItem(props: LabeledListItemProps) {
  const {
    className,
    label,
    labelColor = 'label',
    labelWrap,
    color,
    textAlign,
    buttons,
    content,
    children,
    verticalAlign = 'baseline',
    tooltip,
  } = props;

  let innerLabel;
  if (label) {
    innerLabel = label;
    if (typeof label === 'string') innerLabel += ':';
  }

  if (tooltip !== undefined) {
    innerLabel = (
      <Tooltip content={tooltip}>
        <Box
          as="span"
          style={{
            borderBottom: '2px dotted rgba(255, 255, 255, 0.8)',
          }}
        >
          {innerLabel}
        </Box>
      </Tooltip>
    );
  }

  const labelChild = (
    <Box
      as="td"
      color={labelColor}
      className={classes([
        styles.cell,
        // Kinda flipped because we want nowrap as default. Cleaner CSS this way though.
        !labelWrap && styles.label__nowrap,
      ])}
      verticalAlign={verticalAlign}
    >
      {innerLabel}
    </Box>
  );

  return (
    <tr className={classes([styles.row, className])}>
      {labelChild}
      <Box
        as="td"
        color={color}
        textAlign={textAlign}
        className={styles.cell}
        // @ts-ignore
        colSpan={buttons ? undefined : 2}
        verticalAlign={verticalAlign}
      >
        {content}
        {children}
      </Box>
      {buttons && (
        <td className={classes([styles.cell, styles.buttons])}>{buttons}</td>
      )}
    </tr>
  );
}

LabeledList.Item = LabeledListItem;

type LabeledListDividerProps = {
  /** Size of the divider. */
  size?: number;
};

function LabeledListDivider(props: LabeledListDividerProps) {
  const padding = props.size ? unit(Math.max(0, props.size - 1)) : 0;
  return (
    <tr className="LabeledList__row">
      <td
        colSpan={3}
        style={{
          paddingTop: padding,
          paddingBottom: padding,
        }}
      >
        <Divider />
      </td>
    </tr>
  );
}

LabeledList.Divider = LabeledListDivider;
