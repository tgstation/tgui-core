import { PropsWithChildren, ReactNode } from 'react';

import { BooleanLike, classes } from '../common/react';
import styles from '../styles/components/LabeledList.module.scss';
import { Box, unit } from './Box';
import { Divider } from './Divider';
import { Tooltip } from './Tooltip';

export function LabeledList(props: PropsWithChildren) {
  const { children } = props;
  return <table className="LabeledList">{children}</table>;
}

type LabeledListItemProps = Partial<{
  buttons: ReactNode;
  children: ReactNode;
  className: string | BooleanLike;
  color: string;
  /** @deprecated */
  content: any;
  key: string | number;
  label: string | ReactNode | BooleanLike;
  labelColor: string;
  labelWrap: boolean;
  textAlign: string;
  tooltip: string;
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

type LabeledListDividerProps = {
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

LabeledList.Item = LabeledListItem;
LabeledList.Divider = LabeledListDivider;
