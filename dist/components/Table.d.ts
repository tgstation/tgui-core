import { BoxProps } from './Box';

type Props = Partial<{
    /** Collapses table to the smallest possible size. */
    collapsing: boolean;
}> & BoxProps;
export declare function Table(props: Props): import("react/jsx-runtime").JSX.Element;
export declare namespace Table {
    var Row: typeof TableRow;
    var Cell: typeof TableCell;
}
type RowProps = Partial<{
    /** Whether this is a header cell. */
    header: boolean;
}> & BoxProps;
export declare function TableRow(props: RowProps): import("react/jsx-runtime").JSX.Element;
type CellProps = Partial<{
    /** Collapses table cell to the smallest possible size,
    and stops any text inside from wrapping. */
    collapsing: boolean;
    /** Additional columns for this cell to expand, assuming there is room. */
    colSpan: number;
    /** Whether this is a header cell. */
    header: boolean;
    /** Rows for this cell to expand, assuming there is room. */
    rowSpan: number;
}> & BoxProps;
export declare function TableCell(props: CellProps): import("react/jsx-runtime").JSX.Element;
export {};
