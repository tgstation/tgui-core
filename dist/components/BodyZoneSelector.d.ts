import { Component } from 'react';

export declare enum BodyZone {
    Chest = "chest",
    Eyes = "eyes",
    Groin = "groin",
    Head = "head",
    LeftArm = "l_arm",
    LeftLeg = "l_leg",
    Mouth = "mouth",
    RightArm = "r_arm",
    RightLeg = "r_leg"
}
type BodyZoneSelectorProps = {
    onClick?: (zone: BodyZone) => void;
    scale?: number;
    selectedZone: BodyZone | null;
    theme?: string;
};
type BodyZoneSelectorState = {
    hoverZone: BodyZone | null;
};
export declare class BodyZoneSelector extends Component<BodyZoneSelectorProps, BodyZoneSelectorState> {
    ref: import('react').RefObject<HTMLDivElement>;
    state: BodyZoneSelectorState;
    render(): import("react/jsx-runtime").JSX.Element;
}
export {};
