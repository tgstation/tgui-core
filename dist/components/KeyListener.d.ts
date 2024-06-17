import { Component } from 'react';
import { KeyEvent } from '../events';

type KeyListenerProps = Partial<{
    onKey: (key: KeyEvent) => void;
    onKeyDown: (key: KeyEvent) => void;
    onKeyUp: (key: KeyEvent) => void;
}>;
export declare class KeyListener extends Component<KeyListenerProps> {
    dispose: () => void;
    constructor(props: any);
    componentWillUnmount(): void;
    render(): null;
}
export {};
