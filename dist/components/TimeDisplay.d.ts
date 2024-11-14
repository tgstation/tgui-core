type TimeDisplayProps = {
    /** The value that the TimeDisplay needs to render - if you pass a wrong type it will be rendered directly */
    value: number;
} & Partial<{
    /** Whether the TimeDisplay should automatically increment or decrement (plain prop to dec.) */
    auto: 'up' | 'down' | true;
    /** An optional function to format the value */
    format: (value: number) => string;
}>;
export declare function TimeDisplay(props: TimeDisplayProps): string | number | null;
export {};
