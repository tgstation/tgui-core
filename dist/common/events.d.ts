/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
type Fn = (...args: any[]) => void;
export declare class EventEmitter {
    private listeners;
    constructor();
    on(name: string, listener: Fn): void;
    off(name: string, listener: Fn): void;
    emit(name: string, ...params: any[]): void;
    clear(): void;
}
export {};
