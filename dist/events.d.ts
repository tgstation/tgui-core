import { EventEmitter } from './common/events';

export declare const globalEvents: EventEmitter;
export declare const setupGlobalEvents: (options?: {
    ignoreWindowFocus?: boolean;
}) => void;
export declare const canStealFocus: (node: HTMLElement) => boolean;
export declare const addScrollableNode: (node: HTMLElement) => void;
export declare const removeScrollableNode: (node: HTMLElement) => void;
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
