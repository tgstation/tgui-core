import { Placement } from '@popperjs/core';
import { BooleanLike } from '../common/react';
import { ReactNode } from 'react';
import { BoxProps } from './Box';

type Props = Partial<{
    asset: string;
    base64: string;
    buttons: ReactNode;
    buttonsAlt: boolean;
    children: ReactNode;
    className: string;
    color: string;
    disabled: BooleanLike;
    dmFallback: ReactNode;
    dmIcon: string | null;
    dmIconState: string | null;
    fluid: boolean;
    imageSize: number;
    imageSrc: string;
    onClick: (e: any) => void;
    onRightClick: (e: any) => void;
    selected: BooleanLike;
    title: string;
    tooltip: ReactNode;
    tooltipPosition: Placement;
}> & BoxProps;
export declare function ImageButton(props: Props): import("react/jsx-runtime").JSX.Element;
export {};
