import { type BoxProps } from './Box';
type Props = ExclusiveProps & BoxProps;
/** You MUST use only one or none */
type NoticeType = 'info' | 'success' | 'warning' | 'danger';
type None = {
    [K in NoticeType]?: undefined;
};
type ExclusiveProps = None | (Omit<None, 'info'> & {
    /** Blue notice */
    info: boolean;
}) | (Omit<None, 'success'> & {
    /** Green notice */
    success: boolean;
}) | (Omit<None, 'warning'> & {
    /** Orange notice */
    warning: boolean;
}) | (Omit<None, 'danger'> & {
    /** Red notice */
    danger: boolean;
});
/**
 * ## NoticeBox
 * A notice box which warns you about something very important.
 */
export declare function NoticeBox(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
