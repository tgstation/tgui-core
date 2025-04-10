import type { BoxProps } from './Box';
type Props = Partial<{
    /** Collapses table to the smallest possible size. */
    collapsing: boolean;
}> & BoxProps;
export declare function Table(props: Props): import("react/jsx-runtime").JSX.Element;
type RowProps = Partial<{
    /** Whether this is a header cell. */
    header: boolean;
}> & BoxProps;
declare function TableRow(props: RowProps): import("react/jsx-runtime").JSX.Element;
type CellProps = Partial<{
    /** Additional columns for this cell to expand, assuming there is room. */
    colSpan: number;
    /** Collapses table cell to the smallest possible size,
    and stops any text inside from wrapping. */
    collapsing: boolean;
    /** Whether this is a header cell. */
    header: boolean;
    /** Rows for this cell to expand, assuming there is room. */
    rowSpan: number;
}> & BoxProps;
declare function TableCell(props: CellProps): import("react/jsx-runtime").JSX.Element;
/**
 * ## Table
 * A straight forward mapping to a standard html table, which is slightly
 * simplified (does not need a `<tbody>` tag) and with sane default styles
 * (e.g. table width is 100% by default).
 *
 * @example
 * ```tsx
 * <Table>
 *   <Table.Row>
 *     <Table.Cell bold>Hello world!</Table.Cell>
 *     <Table.Cell collapsing color="label">
 *       Label
 *     </Table.Cell>
 *   </Table.Row>
 * </Table>
 * ```
 */
export declare namespace Table {
    /**
     * ## Table.Cell
     * A straight forward mapping to `<td>` element.
     */
    const Cell: typeof TableCell;
    /**
     * ## Table.Row
     * A straight forward mapping to `<tr>` element.
     */
    const Row: typeof TableRow;
}
export {};
