/**
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
type Gas = {
    id: string;
    path: string;
    name: string;
    label: string;
    color: string;
};
export declare const UI_INTERACTIVE = 2;
export declare const UI_UPDATE = 1;
export declare const UI_DISABLED = 0;
export declare const UI_CLOSE = -1;
export declare const COLORS: {
    readonly department: {
        readonly captain: "#c06616";
        readonly security: "#e74c3c";
        readonly medbay: "#3498db";
        readonly science: "#9b59b6";
        readonly engineering: "#f1c40f";
        readonly cargo: "#f39c12";
        readonly service: "#7cc46a";
        readonly centcom: "#00c100";
        readonly other: "#c38312";
    };
    readonly damageType: {
        readonly oxy: "#3498db";
        readonly toxin: "#2ecc71";
        readonly burn: "#e67e22";
        readonly brute: "#e74c3c";
    };
    readonly reagent: {
        readonly acidicbuffer: "#fbc314";
        readonly basicbuffer: "#3853a4";
    };
};
export declare const CSS_COLORS: readonly ["average", "bad", "black", "blue", "brown", "good", "green", "grey", "label", "olive", "orange", "pink", "purple", "red", "teal", "transparent", "violet", "white", "yellow"];
export type CssColor = (typeof CSS_COLORS)[number];
export declare const RADIO_CHANNELS: readonly [{
    readonly name: "Syndicate";
    readonly freq: 1213;
    readonly color: "#8f4a4b";
}, {
    readonly name: "Red Team";
    readonly freq: 1215;
    readonly color: "#ff4444";
}, {
    readonly name: "Blue Team";
    readonly freq: 1217;
    readonly color: "#3434fd";
}, {
    readonly name: "Green Team";
    readonly freq: 1219;
    readonly color: "#34fd34";
}, {
    readonly name: "Yellow Team";
    readonly freq: 1221;
    readonly color: "#fdfd34";
}, {
    readonly name: "CentCom";
    readonly freq: 1337;
    readonly color: "#2681a5";
}, {
    readonly name: "Supply";
    readonly freq: 1347;
    readonly color: "#b88646";
}, {
    readonly name: "Service";
    readonly freq: 1349;
    readonly color: "#6ca729";
}, {
    readonly name: "Science";
    readonly freq: 1351;
    readonly color: "#c68cfa";
}, {
    readonly name: "Command";
    readonly freq: 1353;
    readonly color: "#fcdf03";
}, {
    readonly name: "Medical";
    readonly freq: 1355;
    readonly color: "#57b8f0";
}, {
    readonly name: "Engineering";
    readonly freq: 1357;
    readonly color: "#f37746";
}, {
    readonly name: "Security";
    readonly freq: 1359;
    readonly color: "#dd3535";
}, {
    readonly name: "AI Private";
    readonly freq: 1447;
    readonly color: "#d65d95";
}, {
    readonly name: "Common";
    readonly freq: 1459;
    readonly color: "#1ecc43";
}];
export declare const getGasLabel: (gasId: string, fallbackValue?: string) => string;
export declare const getGasColor: (gasId: string) => "black" | "blue" | "brown" | "grey" | "olive" | "pink" | "purple" | "teal" | "white" | "yellow" | "lightsteelblue" | "bisque" | "limegreen" | "mediumpurple" | "mediumslateblue" | "paleturquoise" | "salmon" | "greenyellow" | "darkgreen" | "aliceblue" | "maroon";
export declare const getGasFromId: (gasId: string) => Gas | undefined;
export declare const getGasFromPath: (gasPath: string) => Gas | undefined;
export {};
