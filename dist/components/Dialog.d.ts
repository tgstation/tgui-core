type DialogProps = {
    children: any;
    height?: string;
    onClose: () => void;
    title: any;
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
type UnsavedChangesDialogProps = {
    documentName: string;
    onClose: () => void;
    onDiscard: () => void;
    onSave: () => void;
};
export declare function UnsavedChangesDialog(props: UnsavedChangesDialogProps): import("react/jsx-runtime").JSX.Element;
export {};
