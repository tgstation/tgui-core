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
 * ```ts
 * const bus = new EventBus(listeners);
 *
 * // These are the event types and their corresponding callbacks.
 * const listeners = {
 *   'messageTypeA': (message) => { logger.log(message.payload); },
 * } as const;
 *
 * // You can further shorten this by linking a function to the event type:
 * function messageTypeA(payload: { text: string }) {
 *  logger.log(payload.text);
 * }
 *
 * const listeners = {
 *   messageTypeA,
 * } as const;
 *
 *
 * // Later, dispatch a message:
 * const message: ByondMessage = {
 *   type: 'messageTypeA',
 *   payload: { text: 'Hello, world!' },
 * };
 *
 * bus.dispatch(message);
 * ```
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
