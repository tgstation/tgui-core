import { PropsWithChildren, ReactNode } from 'react';

type Props = Partial<{
    style: Record<string, any>;
    titleStyle: Record<string, any>;
    textStyle: Record<string, any>;
    title: ReactNode;
    titleSubtext: string;
}> & PropsWithChildren;
export declare function StyleableSection(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
