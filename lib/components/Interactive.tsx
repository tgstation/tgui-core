/**
 * MIT License
 * https://github.com/omgovich/react-colorful/
 *
 * Copyright (c) 2020 Vlad Shilov <omgovich@ya.ru>
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { clamp } from '@common/math';
import type { CSSProperties, ReactNode, RefObject } from 'react';
import { isArrow, KEY } from '../common/keys';

export type Interaction = {
  left: number;
  top: number;
};

export type InteractiveProps = {
  /** Callback when interaction moves */
  onMove: (interaction: Interaction) => void;
  /** Callback when key is pressed */
  onKey: (offset: Interaction) => void;
  /** Child elements */
  children: ReactNode;
  /** Ref to the container element */
  containerRef: RefObject<HTMLDivElement | null>;
  /** Optional styles */
  style?: CSSProperties;
};

/** Finds the proper window object to fix iframe embedding issues */
function getParentWindow(node?: HTMLDivElement | null): Window {
  return node?.ownerDocument?.defaultView || self;
}

/** Returns a relative position of the pointer inside the node's bounding box */
function getRelativePosition(
  node: HTMLDivElement,
  event: MouseEvent | PointerEvent,
): Interaction {
  const rect = node.getBoundingClientRect();
  const pointer = event;

  return {
    left: clamp(
      (pointer.pageX - (rect.left + getParentWindow(node).pageXOffset)) /
        rect.width,
      0,
      1,
    ),
    top: clamp(
      (pointer.pageY - (rect.top + getParentWindow(node).pageYOffset)) /
        rect.height,
      0,
      1,
    ),
  };
}

/**
 * ## Interactive
 *
 * A low-level component that handles pointer and keyboard interactions.
 *
 * See an example of usage in the story:
 * - [View Colorpicker story](https://tgstation.github.io/tgui-core/?path=/story/interfaces-colorpickermodal--default)
 */
export function Interactive(props: InteractiveProps) {
  const { onMove, onKey, children, containerRef, style, ...rest } = props;

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>): void {
    // Prevent text selection
    event.preventDefault();

    // Only trigger if this element has captured the pointer (is dragging)
    if (containerRef.current?.hasPointerCapture(event.pointerId)) {
      onMove(getRelativePosition(containerRef.current, event.nativeEvent));
    }
  }

  function handlePointerDown(event: React.PointerEvent<HTMLDivElement>): void {
    const el = containerRef.current;
    if (!el) return;

    // Prevent text selection
    event.preventDefault();
    el.focus();
    // Capture the pointer so we receive events even if mouse leaves the div
    el.setPointerCapture(event.pointerId);
    onMove(getRelativePosition(el, event.nativeEvent));
  }

  function handlePointerUp(event: React.PointerEvent<HTMLDivElement>): void {
    const el = containerRef.current;
    if (el) {
      el.releasePointerCapture(event.pointerId);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLDivElement>): void {
    const key = event.key;
    if (!isArrow(key)) {
      return;
    }

    // Do not scroll page by arrow keys when document is focused on the element
    event.preventDefault();
    // Send relative offset to the parent component.
    onKey({
      left: key === KEY.Right ? 0.05 : key === KEY.Left ? -0.05 : 0,
      top: key === KEY.Down ? 0.05 : key === KEY.Up ? -0.05 : 0,
    });
  }

  return (
    <div
      {...rest}
      className="react-colorful__interactive"
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      ref={containerRef}
      role="slider"
      style={style}
      tabIndex={0}
    >
      {children}
    </div>
  );
}
