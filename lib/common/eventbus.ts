/**
 * ## EventBus
 *
 * Handles different event messages from byond and TGUI.
 *
 * Don't fret! This is a simple class under the hood. Using some typescript-fu,
 * it's able to provide type safety for the event types and their payloads.
 *
 * The philosophy: This interacts directly with state managers in vanilla JS,
 * offering a way to handle browser events. UIs then subscribe to these states
 * and update accordingly.
 *
 * @usage
 *
 * ### First step
 *
 * Create an EventBus with the listeners you want to handle.
 *
 * ```ts
 * const bus = new EventBus(listeners);
 *```
 *
 * ### Second step
 *
 * Next, define the listeners object. These are the event types and their
 * corresponding callbacks.
 *
 * ```ts
 * const listeners = {
 *   'messageTypeA': handlerA,
 * } as const;
 *```
 *
 * ### Third step
 *
 * Write a handler for the specific message type.
 *
 * ```ts
 * type ExpectedPayloadA = {
 *   text: string;
 * };
 *
 * function handlerA(payload: ExpectedPayloadA) {
 *   logger.log(payload.text);
 * }
 *```

 * You can now dispatch the messageTypeA event! If you want to shorten the
 * syntax, you can name the handler function after the incoming event type.
 *
 * ````ts
 * function messageTypeA(payload: ExpectedPayloadA) {
 *   logger.log(payload.text);
 * }
 *
 * const listeners = {
 *  messageTypeA,
 * } as const;
 *
 */
export class EventBus<
  TListeners extends Readonly<Record<string, (payload: unknown) => void>>,
> {
  private listeners: Partial<{
    [TType in keyof TListeners]: TListeners[TType];
  }> = {};

  constructor(initialListeners: TListeners) {
    this.listeners = initialListeners;
  }

  /** Dispatch a message to the appropriate listener. */
  dispatch<TType extends keyof TListeners>(message: {
    type: TType;
    payload?: Parameters<TListeners[TType]>[0];
  }): void {
    this.listeners[message.type]?.(message.payload);
  }
}
