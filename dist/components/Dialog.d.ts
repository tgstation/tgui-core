type DialogProps = {
    title: any;
    onClose: () => void;
    children: any;
    width?: string;
    height?: string;
};
export declare const Dialog: {
    (props: DialogProps): import("react/jsx-runtime").JSX.Element;
    Button: (props: DialogButtonProps) => import("react/jsx-runtime").JSX.Element;
};
type DialogButtonProps = {
    onClick: () => void;
    children: any;
};
type UnsavedChangesDialogProps = {
    documentName: string;
    onSave: () => void;
    onDiscard: () => void;
    onClose: () => void;
};
export declare const UnsavedChangesDialog: (props: UnsavedChangesDialogProps) => import("react/jsx-runtime").JSX.Element;
export {};
