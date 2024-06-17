import { ReactNode } from 'react';

/**
 * ## Section
 * Section is a surface that displays content and actions on a single topic.
 *
 * They should be easy to scan for relevant and actionable information.
 * Elements, like text and images, should be placed in them in a way that
 * clearly indicates hierarchy.
 *
 * Sections can now be nested, and will automatically font size of the
 * header according to their nesting level. Previously this was done via `level`
 * prop, but now it is automatically calculated.
 *
 * Section can also be titled to clearly define its purpose.
 *
 * ```tsx
 * <Section title="Cargo">Here you can order supply crates.</Section>
 * ```
 *
 * If you want to have a button on the right side of an section title
 * (for example, to perform some sort of action), there is a way to do that:
 *
 * ```tsx
 * <Section title="Cargo" buttons={<Button>Send shuttle</Button>}>
 *   Here you can order supply crates.
 * </Section>
 * ```
 */
export declare const Section: import('react').ForwardRefExoticComponent<Partial<{
    /** Buttons to render aside the section title. */
    buttons: ReactNode;
    /** If true, fills all available vertical space. */
    fill: boolean;
    /** If true, removes all section padding. */
    fitted: boolean;
    /** Shows or hides the scrollbar. */
    scrollable: boolean;
    /** Shows or hides the horizontal scrollbar. */
    scrollableHorizontal: boolean;
    /** Title of the section. */
    title: ReactNode;
    /** id to assosiate with the parent div element used by this section, for uses with procs like getElementByID */
    container_id: string;
    /** @member Callback function for the `scroll` event */
    onScroll: ((this: GlobalEventHandlers, ev: Event) => any) | null;
}> & Partial<{
    as: string;
    children: ReactNode;
    className: string | import('../common/react').BooleanLike;
    style: Partial<CSSStyleDeclaration>;
}> & Partial<Record<"bold" | "italic" | "nowrap" | "fillPositionedParent" | "inline" | "preserveWhitespace", boolean>> & Partial<Record<"fontWeight" | "textAlign" | "bottom" | "fontFamily" | "fontSize" | "height" | "left" | "maxHeight" | "maxWidth" | "minHeight" | "minWidth" | "opacity" | "overflow" | "overflowX" | "overflowY" | "position" | "right" | "top" | "verticalAlign" | "width" | "color" | "backgroundColor" | "align" | "lineHeight" | "m" | "mb" | "ml" | "mr" | "mt" | "mx" | "my" | "p" | "pb" | "pl" | "pr" | "pt" | "px" | "py" | "textColor", string | import('../common/react').BooleanLike>> & Partial<{
    onClick: import('react').MouseEventHandler<HTMLDivElement>;
    onContextMenu: import('react').MouseEventHandler<HTMLDivElement>;
    onDoubleClick: import('react').MouseEventHandler<HTMLDivElement>;
    onKeyDown: import('react').KeyboardEventHandler<HTMLDivElement>;
    onKeyUp: import('react').KeyboardEventHandler<HTMLDivElement>;
    onMouseDown: import('react').MouseEventHandler<HTMLDivElement>;
    onMouseMove: import('react').MouseEventHandler<HTMLDivElement>;
    onMouseOver: import('react').MouseEventHandler<HTMLDivElement>;
    onMouseUp: import('react').MouseEventHandler<HTMLDivElement>;
    onScroll: import('react').UIEventHandler<HTMLDivElement>;
}> & import('react').RefAttributes<HTMLDivElement>>;
