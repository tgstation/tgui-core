import { ReactNode } from 'react';
interface PointerProps {
    className?: string;
    top?: number;
    left: number;
    color: string;
}
export declare const Pointer: ({ className, color, left, top, }: PointerProps) => ReactNode;
export {};
