import { BoxProps } from './Box';

type Props = ExclusiveProps & BoxProps;
/** You MUST use only one or none */
type NoticeType = 'info' | 'success' | 'danger';
type None = {
    [K in NoticeType]?: undefined;
};
type ExclusiveProps = None | (Omit<None, 'info'> & {
    info: boolean;
}) | (Omit<None, 'success'> & {
    success: boolean;
}) | (Omit<None, 'danger'> & {
    danger: boolean;
});
export declare function NoticeBox(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
