import { Component, HTMLAttributes, PropsWithChildren, RefObject } from 'react';

type Props = {
    acceptableDifference?: number;
    maxWidth: number;
    maxFontSize: number;
    native?: HTMLAttributes<HTMLDivElement>;
} & PropsWithChildren;
type State = {
    fontSize: number;
};
export declare class FitText extends Component<Props, State> {
    ref: RefObject<HTMLDivElement>;
    state: State;
    constructor(props: Props);
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    resize(): void;
    componentDidMount(): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
