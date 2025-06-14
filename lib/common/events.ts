import { KEY_ALT, KEY_CTRL, KEY_F1, KEY_F12, KEY_SHIFT } from './keycodes';
import type { Fn } from './types';

export class EventEmitter {
  private listeners: Record<string, Fn[]>;

  constructor() {
    this.listeners = {};
  }

  on(name: string, listener: Fn): void {
    this.listeners[name] = this.listeners[name] || [];
    this.listeners[name].push(listener);
  }

  off(name: string, listener: Fn): void {
    const listeners = this.listeners[name];
    if (!listeners) {
      throw new Error(`There is no listeners for "${name}"`);
    }
    this.listeners[name] = listeners.filter((existingListener) => {
      return existingListener !== listener;
    });
  }

  emit(name: string, ...params: any[]): void {
    const listeners = this.listeners[name];
    if (!listeners) {
      return;
    }
    for (let i = 0, len = listeners.length; i < len; i += 1) {
      const listener = listeners[i];
      listener(...params);
    }
  }

  clear(): void {
    this.listeners = {};
  }
}

export const globalEvents = new EventEmitter();
let ignoreWindowFocus = false;

export const setupGlobalEvents = (
  options: { ignoreWindowFocus?: boolean } = {},
): void => {
  ignoreWindowFocus = !!options.ignoreWindowFocus;
};

// Window focus
// --------------------------------------------------------

let windowFocusTimeout: ReturnType<typeof setTimeout> | null;
let windowFocused = true;

// Pretend to always be in focus.
function setWindowFocus(value: boolean, delayed?: boolean) {
  if (ignoreWindowFocus) {
    windowFocused = true;
    return;
  }
  if (windowFocusTimeout) {
    clearTimeout(windowFocusTimeout);
    windowFocusTimeout = null;
  }
  if (delayed) {
    windowFocusTimeout = setTimeout(() => setWindowFocus(value));
    return;
  }
  if (windowFocused !== value) {
    windowFocused = value;
    globalEvents.emit(value ? 'window-focus' : 'window-blur');
    globalEvents.emit('window-focus-change', value);
  }
}

// Focus stealing
// --------------------------------------------------------

let focusStolenBy: HTMLElement | null = null;

export function canStealFocus(node: HTMLElement) {
  const tag = String(node.tagName).toLowerCase();
  return tag === 'input' || tag === 'textarea';
}

function stealFocus(node: HTMLElement) {
  releaseStolenFocus();
  focusStolenBy = node;
  focusStolenBy.addEventListener('blur', releaseStolenFocus);
  globalEvents.emit('input-focus');
}

function releaseStolenFocus() {
  if (focusStolenBy) {
    focusStolenBy.removeEventListener('blur', releaseStolenFocus);
    focusStolenBy = null;
    globalEvents.emit('input-blur');
  }
}

// Focus follows the mouse
// --------------------------------------------------------

let focusedNode: HTMLElement | null = null;
let lastVisitedNode: HTMLElement | null = null;
const trackedNodes: HTMLElement[] = [];

export function addScrollableNode(node: HTMLElement) {
  trackedNodes.push(node);
}

export function removeScrollableNode(node: HTMLElement) {
  const index = trackedNodes.indexOf(node);
  if (index >= 0) {
    trackedNodes.splice(index, 1);
  }
}

function focusNearestTrackedParent(node: HTMLElement | null) {
  if (focusStolenBy || !windowFocused) {
    return;
  }
  const body = document.body;
  while (node && node !== body) {
    if (trackedNodes.includes(node)) {
      // NOTE: Contains is a DOM4 method
      if (node.contains(focusedNode)) {
        return;
      }
      focusedNode = node;
      node.focus();
      return;
    }
    node = node.parentElement;
  }
}

window.addEventListener('mousemove', (e) => {
  const node = e.target as HTMLElement;
  if (node !== lastVisitedNode) {
    lastVisitedNode = node;
    focusNearestTrackedParent(node);
  }
});

// Focus event hooks
// --------------------------------------------------------

// Handle stealing focus for textbox elements
document.addEventListener(
  'focus',
  (e) => {
    // Window
    if (!(e.target instanceof Element)) {
      lastVisitedNode = null;
      focusedNode = null;
      return;
    }
    lastVisitedNode = null;
    focusedNode = e.target as HTMLElement;
    if (canStealFocus(e.target as HTMLElement)) {
      stealFocus(e.target as HTMLElement);
    }
  },
  true,
);

// When we click on any element on the page, untrack the last
// visited node.
document.addEventListener(
  'blur',
  () => {
    lastVisitedNode = null;
  },
  true,
);

window.addEventListener('focus', () => {
  setWindowFocus(true);
});

// If we blur any element, the window may have unfocused if we didn't
// click on the background
window.addEventListener('blur', () => {
  lastVisitedNode = null;
  setWindowFocus(false, true);
});

window.addEventListener('close', () => {
  setWindowFocus(false);
});

// Key events
// --------------------------------------------------------

const keyHeldByCode: Record<number, boolean> = {};

export class KeyEvent {
  event: KeyboardEvent;
  type: 'keydown' | 'keyup';
  code: number;
  ctrl: boolean;
  shift: boolean;
  alt: boolean;
  repeat: boolean;
  _str?: string;

  constructor(e: KeyboardEvent, type: 'keydown' | 'keyup', repeat?: boolean) {
    this.event = e;
    this.type = type;
    this.code = e.keyCode;
    this.ctrl = e.ctrlKey;
    this.shift = e.shiftKey;
    this.alt = e.altKey;
    this.repeat = !!repeat;
  }

  hasModifierKeys() {
    return this.ctrl || this.alt || this.shift;
  }

  isModifierKey() {
    return (
      this.code === KEY_CTRL || this.code === KEY_SHIFT || this.code === KEY_ALT
    );
  }

  isDown() {
    return this.type === 'keydown';
  }

  isUp() {
    return this.type === 'keyup';
  }

  toString() {
    if (this._str) {
      return this._str;
    }
    this._str = '';
    if (this.ctrl) {
      this._str += 'Ctrl+';
    }
    if (this.alt) {
      this._str += 'Alt+';
    }
    if (this.shift) {
      this._str += 'Shift+';
    }
    if (this.code >= 48 && this.code <= 90) {
      this._str += String.fromCharCode(this.code);
    } else if (this.code >= KEY_F1 && this.code <= KEY_F12) {
      this._str += `F${this.code - 111}`;
    } else {
      this._str += `[${this.code}]`;
    }
    return this._str;
  }
}

// IE8: Keydown event is only available on document.
document.addEventListener('keydown', (e) => {
  if (canStealFocus(e.target as HTMLElement)) {
    return;
  }
  const code = e.keyCode;
  const key = new KeyEvent(e, 'keydown', keyHeldByCode[code]);
  globalEvents.emit('keydown', key);
  globalEvents.emit('key', key);
  keyHeldByCode[code] = true;
});

document.addEventListener('keyup', (e) => {
  if (canStealFocus(e.target as HTMLElement)) {
    return;
  }
  const code = e.keyCode;
  const key = new KeyEvent(e, 'keyup');
  globalEvents.emit('keyup', key);
  globalEvents.emit('key', key);
  keyHeldByCode[code] = false;
});
