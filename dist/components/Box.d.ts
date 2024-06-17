import { BooleanLike } from '../common/react';
import { KeyboardEventHandler, MouseEventHandler, ReactNode, UIEventHandler } from 'react';

type BooleanProps = Partial<Record<keyof typeof booleanStyleMap, boolean>>;
type StringProps = Partial<Record<keyof typeof stringStyleMap, string | BooleanLike>>;
export type EventHandlers = Partial<{
    onClick: MouseEventHandler<HTMLDivElement>;
    onContextMenu: MouseEventHandler<HTMLDivElement>;
    onDoubleClick: MouseEventHandler<HTMLDivElement>;
    onKeyDown: KeyboardEventHandler<HTMLDivElement>;
    onKeyUp: KeyboardEventHandler<HTMLDivElement>;
    onMouseDown: MouseEventHandler<HTMLDivElement>;
    onMouseMove: MouseEventHandler<HTMLDivElement>;
    onMouseOver: MouseEventHandler<HTMLDivElement>;
    onMouseUp: MouseEventHandler<HTMLDivElement>;
    onScroll: UIEventHandler<HTMLDivElement>;
}>;
export type BoxProps = Partial<{
    as: string;
    children: ReactNode;
    className: string | BooleanLike;
    style: Partial<CSSStyleDeclaration>;
}> & BooleanProps & StringProps & EventHandlers;
type DangerDoNotUse = {
    dangerouslySetInnerHTML?: {
        __html: any;
    };
};
/**
 * Coverts our rem-like spacing unit into a CSS unit.
 */
export declare const unit: (value: unknown) => string | undefined;
/**
 * Same as `unit`, but half the size for integers numbers.
 */
export declare const halfUnit: (value: unknown) => string | undefined;
declare const stringStyleMap: {
    readonly align: (style: any, value: any) => void;
    readonly bottom: (style: any, value: any) => void;
    readonly fontFamily: (style: any, value: any) => void;
    readonly fontSize: (style: any, value: any) => void;
    readonly fontWeight: (style: any, value: any) => void;
    readonly height: (style: any, value: any) => void;
    readonly left: (style: any, value: any) => void;
    readonly maxHeight: (style: any, value: any) => void;
    readonly maxWidth: (style: any, value: any) => void;
    readonly minHeight: (style: any, value: any) => void;
    readonly minWidth: (style: any, value: any) => void;
    readonly opacity: (style: any, value: any) => void;
    readonly overflow: (style: any, value: any) => void;
    readonly overflowX: (style: any, value: any) => void;
    readonly overflowY: (style: any, value: any) => void;
    readonly position: (style: any, value: any) => void;
    readonly right: (style: any, value: any) => void;
    readonly textAlign: (style: any, value: any) => void;
    readonly top: (style: any, value: any) => void;
    readonly verticalAlign: (style: any, value: any) => void;
    readonly width: (style: any, value: any) => void;
    readonly lineHeight: (style: any, value: any) => void;
    readonly m: (style: any, value: any) => void;
    readonly mb: (style: any, value: any) => void;
    readonly ml: (style: any, value: any) => void;
    readonly mr: (style: any, value: any) => void;
    readonly mt: (style: any, value: any) => void;
    readonly mx: (style: any, value: any) => void;
    readonly my: (style: any, value: any) => void;
    readonly p: (style: any, value: any) => void;
    readonly pb: (style: any, value: any) => void;
    readonly pl: (style: any, value: any) => void;
    readonly pr: (style: any, value: any) => void;
    readonly pt: (style: any, value: any) => void;
    readonly px: (style: any, value: any) => void;
    readonly py: (style: any, value: any) => void;
    readonly color: (style: any, value: any) => void;
    readonly textColor: (style: any, value: any) => void;
    readonly backgroundColor: (style: any, value: any) => void;
};
declare const booleanStyleMap: {
    readonly bold: (style: any, value: any) => void;
    readonly fillPositionedParent: (style: any, value: any) => void;
    readonly inline: (style: any, value: any) => void;
    readonly italic: (style: any, value: any) => void;
    readonly nowrap: (style: any, value: any) => void;
    readonly preserveWhitespace: (style: any, value: any) => void;
};
export declare const computeBoxProps: (props: any) => Record<string, any>;
export declare const computeBoxClassName: (props: BoxProps) => string;
export declare const Box: (props: BoxProps & DangerDoNotUse) => import('react').ReactElement<{
    className: string;
}, string | import('react').JSXElementConstructor<any>>;
export {};
