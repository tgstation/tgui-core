import { PropsWithChildren, ReactNode } from 'react';
type Props = Partial<{
    style: Record<string, any>;
    textStyle: Record<string, any>;
    title: ReactNode;
    titleStyle: Record<string, any>;
    titleSubtext: string;
}> & PropsWithChildren;
export declare function StyleableSection(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
