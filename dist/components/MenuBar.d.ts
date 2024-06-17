import { ReactNode } from 'react';

type MenuBarItemProps = {
    entry: string;
    children: any;
    openWidth: string;
    display: ReactNode;
    setOpenMenuBar: (entry: string | null) => void;
    openMenuBar: string | null;
    setOpenOnHover: (flag: boolean) => void;
    openOnHover: boolean;
    disabled?: boolean;
    className?: string;
};
export declare const Dropdown: {
    (props: MenuBarItemProps): import("react/jsx-runtime").JSX.Element;
    MenuItemToggle: (props: any) => import("react/jsx-runtime").JSX.Element;
    MenuItem: (props: any) => import("react/jsx-runtime").JSX.Element;
    Separator: () => import("react/jsx-runtime").JSX.Element;
};
type MenuBarProps = {
    children: any;
};
export declare const MenuBar: {
    (props: MenuBarProps): import("react/jsx-runtime").JSX.Element;
    Dropdown: {
        (props: MenuBarItemProps): import("react/jsx-runtime").JSX.Element;
        MenuItemToggle: (props: any) => import("react/jsx-runtime").JSX.Element;
        MenuItem: (props: any) => import("react/jsx-runtime").JSX.Element;
        Separator: () => import("react/jsx-runtime").JSX.Element;
    };
};
export {};
