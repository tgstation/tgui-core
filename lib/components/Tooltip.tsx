// TODO: Rewrite as an FC, remove this lint disable
import {
  type Placement,
  type VirtualElement,
  createPopper,
} from '@popperjs/core';
import { Component, type ReactNode } from 'react';
import { findDOMNode, render } from 'react-dom';

type Props = {
  /** The content to display in the tooltip */
  content: ReactNode;
} & Partial<{
  /** Hovering this element will show the tooltip */
  children: ReactNode;
  /** Where to place the tooltip relative to the reference element */
  position: Placement;
}>;

type State = {
  hovered: boolean;
};

const DEFAULT_OPTIONS = {
  modifiers: [
    {
      name: 'eventListeners',
      enabled: false,
    },
  ],
};

const NULL_RECT: DOMRect = {
  width: 0,
  height: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  x: 0,
  y: 0,
  toJSON: () => null,
};

/**
 * ## Tooltip
 * A boxy tooltip from tgui 1. It is very hacky in its current state, and
 * requires setting `position: relative` on the container.
 *
 * Please note that
 * [Button](https://github.com/tgstation/tgui-core/tree/main/lib/components/Button.tsx)
 * component has a `tooltip` prop and it is recommended to use that prop instead.
 *
 * Usage:
 * ```tsx
 * <Tooltip position="bottom" content="Box tooltip">
 *   <Box position="relative">Sample text.</Box>
 * </Tooltip>
 * ```
 */
export class Tooltip extends Component<Props, State> {
  // Mounting poppers is really laggy because popper.js is very slow.
  // Thus, instead of using the Popper component, Tooltip creates ONE popper
  // and stores every tooltip inside that.
  // This means you can never have two tooltips at once, for instance.
  static renderedTooltip: HTMLDivElement | undefined;
  static singletonPopper: ReturnType<typeof createPopper> | undefined;
  static currentHoveredElement: Element | undefined;
  static virtualElement: VirtualElement = {
    getBoundingClientRect: () =>
      Tooltip.currentHoveredElement?.getBoundingClientRect() ?? NULL_RECT,
  };

  getDOMNode() {
    // HACK: We don't want to create a wrapper, as it could break the layout
    // of consumers, so we use findDOMNode.
    // This is usually bad as refs are usually better, but refs did
    // not work in this case, as they weren't propagating correctly.
    // A previous attempt was made as a render prop that passed an ID,
    // but this made consuming use too unwieldly.
    // Because this component is written in TypeScript, we will know
    // immediately if this internal variable is removed.
    //

    return findDOMNode(this) as Element;
  }

  componentDidMount() {
    const domNode = this.getDOMNode();

    if (!domNode) {
      return;
    }

    domNode.addEventListener('mouseenter', () => {
      let renderedTooltip = Tooltip.renderedTooltip;
      if (renderedTooltip === undefined) {
        renderedTooltip = document.createElement('div');
        renderedTooltip.className = 'Tooltip';
        document.body.appendChild(renderedTooltip);
        Tooltip.renderedTooltip = renderedTooltip;
      }

      Tooltip.currentHoveredElement = domNode;

      renderedTooltip.style.opacity = '1';

      this.renderPopperContent();
    });

    domNode.addEventListener('mouseleave', () => {
      this.fadeOut();
    });
  }

  fadeOut() {
    if (Tooltip.currentHoveredElement !== this.getDOMNode()) {
      return;
    }

    Tooltip.currentHoveredElement = undefined;
    Tooltip.renderedTooltip!.style.opacity = '0';
  }

  renderPopperContent() {
    const renderedTooltip = Tooltip.renderedTooltip;
    if (!renderedTooltip) {
      return;
    }

    render(<span>{this.props.content}</span>, renderedTooltip, () => {
      let singletonPopper = Tooltip.singletonPopper;
      if (singletonPopper === undefined) {
        singletonPopper = createPopper(
          Tooltip.virtualElement,
          renderedTooltip!,
          {
            ...DEFAULT_OPTIONS,
            placement: this.props.position || 'auto',
          },
        );

        Tooltip.singletonPopper = singletonPopper;
      } else {
        singletonPopper.setOptions({
          ...DEFAULT_OPTIONS,
          placement: this.props.position || 'auto',
        });

        singletonPopper.update();
      }
    });
  }

  componentDidUpdate() {
    if (Tooltip.currentHoveredElement !== this.getDOMNode()) {
      return;
    }

    this.renderPopperContent();
  }

  componentWillUnmount() {
    this.fadeOut();
  }

  render() {
    return this.props.children;
  }
}
