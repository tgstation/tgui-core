/**
 * ## EventBus
 *
 * Handles different event messages from byond and TGUI.
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
export class EventBus<TListeners extends ListenerMap> {
  private listeners: TListeners;

  constructor(initialListeners: TListeners) {
    this.listeners = initialListeners;
  }

  /** Dispatch a message to the appropriate listener. */
  dispatch(message: Message): void {
    const listener = this.listeners[message.type];

    if ('payload' in message) {
      listener(message.payload);
    } else {
      listener();
    }
  }
}

export type ListenerMap = Record<string, (payload?: unknown) => void>;

export type Message = {
  type: string;
  payload?: unknown;
};
