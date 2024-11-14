import { ReactNode } from 'react';
type MenuBarItemProps = {
    children: any;
    className?: string;
    disabled?: boolean;
    display: ReactNode;
    entry: string;
    openMenuBar: string | null;
    openOnHover: boolean;
    openWidth: string;
    setOpenMenuBar: (entry: string | null) => void;
    setOpenOnHover: (flag: boolean) => void;
};
export declare function Dropdown(props: MenuBarItemProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Dropdown {
    var MenuItemToggle: (props: any) => import("react/jsx-runtime").JSX.Element;
    var MenuItem: (props: any) => import("react/jsx-runtime").JSX.Element;
    var Separator: () => import("react/jsx-runtime").JSX.Element;
}
type MenuBarProps = {
    children: any;
};
export declare function MenuBar(props: MenuBarProps): import("react/jsx-runtime").JSX.Element;
export declare namespace MenuBar {
    var Dropdown: typeof import("./MenuBar").Dropdown;
}
export {};
