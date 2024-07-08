import { Component, PropsWithChildren } from 'react';

type Props = Partial<{
    /**
     * The interval between blinks, in milliseconds.
     */
    interval: number;
    /**
     * The time to wait before blinking again, in milliseconds.
     */
    time: number;
}> & PropsWithChildren;
type State = {
    hidden: boolean;
};
export declare class Blink extends Component<Props, State> {
    interval: NodeJS.Timeout;
    timer: NodeJS.Timeout;
    constructor(props: any);
    createTimer(): void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: any): void;
    componentWillUnmount(): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
