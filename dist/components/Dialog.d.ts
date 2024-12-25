import { ReactNode } from 'react';
type DialogProps = {
    children: ReactNode;
    height?: string;
    onClose: () => void;
    title: ReactNode;
    width?: string;
};
export declare function Dialog(props: DialogProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Dialog {
    var Button: typeof DialogButton;
}
type DialogButtonProps = {
    children: any;
    onClick: () => void;
};
declare function DialogButton(props: DialogButtonProps): import("react/jsx-runtime").JSX.Element;
export {};
