import { Component, PropsWithChildren } from 'react';

type Props = {
    onOutsideClick: () => void;
} & PropsWithChildren;
export declare class TrackOutsideClicks extends Component<Props> {
    ref: import('react').RefObject<HTMLDivElement>;
    constructor(props: any);
    componentWillUnmount(): void;
    handleOutsideClick(event: MouseEvent): void;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
