import { Component, HTMLAttributes, PropsWithChildren } from 'react';
type Props = {
    acceptableDifference?: number;
    maxFontSize: number;
    maxWidth: number;
    native?: HTMLAttributes<HTMLDivElement>;
} & PropsWithChildren;
type State = {
    fontSize: number;
};
export declare class FitText extends Component<Props, State> {
    ref: import('react').RefObject<HTMLDivElement | null>;
    state: State;
    constructor(props: Props);
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    resize(): void;
    componentDidMount(): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
