import { Component } from 'react';

export declare enum BodyZone {
    Head = "head",
    Chest = "chest",
    LeftArm = "l_arm",
    RightArm = "r_arm",
    LeftLeg = "l_leg",
    RightLeg = "r_leg",
    Eyes = "eyes",
    Mouth = "mouth",
    Groin = "groin"
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
