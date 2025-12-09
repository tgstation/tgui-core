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
 * First, create an EventBus with the listeners you want to handle.
 * ```ts
 * const bus = new EventBus(listeners);
 *```
 *
 *  Next, define the listeners object. These are the event types and their
 * corresponding callbacks.
 * ```ts
 * const listeners = {
 *   'messageTypeA': [handlerA, handlerB, handlerC],
 * } as const;
 *```
 *
 * Write a handler for the specific message type. They're handled serially.
 * Anything you return will be passed to the next listener as the payload.
 * ```ts
 * function handlerA(payload: { text: string }) {
 *  logger.log(payload.text);
 *  // The payload is discarded!
 * }
 *
 * function handlerB(payload: { count: number }) {
 *  // The next handler will receive this object as its payload.
 *  return { count: payload.count + 1, otherData: 'foo' };
 * }
 *
 * function handlerC(payload: { count: number; otherData: string }) {
 *  logger.log(`Count is ${payload.count} and otherData is ${payload.otherData}`);
 * }
 *```
 */
export class EventBus<
  TListeners extends Readonly<
    Record<string, Array<(payload: unknown) => void>>
  >,
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
    /**
     * This should match the first listener's payload type. It can be passed
     * along and mutated by each listener in the chain by returning a new value.
     */
    payload?: Parameters<TListeners[TType][0]>[0];
  }): void {
    const total = this.listeners[message.type]?.length || 0;
    if (total === 0) {
      console.warn(
        `EventBus: No listeners for message type "${String(message.type)}"`,
      );
      return;
    }

    let payload = message.payload; // We can mutate this with each listener.
    for (let i = 0; i < total; i++) {
      payload = this.listeners[message.type]?.[i](payload);
    }
  }
}
