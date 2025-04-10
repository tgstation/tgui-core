import { type ReactNode } from 'react';
type MenuBarItemProps = {
    children: ReactNode;
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
declare function MenuDropdown(props: MenuBarItemProps): import("react/jsx-runtime").JSX.Element;
declare namespace MenuDropdown {
    var MenuItemToggle: (props: any) => import("react/jsx-runtime").JSX.Element;
    var MenuItem: (props: MenuItemProps) => import("react/jsx-runtime").JSX.Element;
    var Separator: () => import("react/jsx-runtime").JSX.Element;
}
type MenuItemProps = Partial<{
    value: any;
    displayText: string;
    onClick: (value: any) => void;
}>;
type MenuBarProps = {
    children: ReactNode;
};
export declare function MenuBar(props: MenuBarProps): import("react/jsx-runtime").JSX.Element;
export declare namespace MenuBar {
    var Dropdown: typeof MenuDropdown;
}
export {};
