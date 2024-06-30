type Fn = (...args: any[]) => void;
export declare class EventEmitter {
    private listeners;
    constructor();
    on(name: string, listener: Fn): void;
    off(name: string, listener: Fn): void;
    emit(name: string, ...params: any[]): void;
    clear(): void;
}
export declare const globalEvents: EventEmitter;
export declare const setupGlobalEvents: (options?: {
    ignoreWindowFocus?: boolean;
}) => void;
export declare function canStealFocus(node: HTMLElement): boolean;
export declare function addScrollableNode(node: HTMLElement): void;
export declare function removeScrollableNode(node: HTMLElement): void;
export declare class KeyEvent {
    event: KeyboardEvent;
    type: 'keydown' | 'keyup';
    code: number;
    ctrl: boolean;
    shift: boolean;
    alt: boolean;
    repeat: boolean;
    _str?: string;
    constructor(e: KeyboardEvent, type: 'keydown' | 'keyup', repeat?: boolean);
    hasModifierKeys(): boolean;
    isModifierKey(): boolean;
    isDown(): boolean;
    isUp(): boolean;
    toString(): string;
}
export {};
