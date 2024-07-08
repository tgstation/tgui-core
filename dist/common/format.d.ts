export declare const formatSiUnit: (value: number, minBase1000?: number, unit?: string) => string;
export declare function formatPower(value: number, minBase1000?: number): string;
export declare function formatEnergy(value: number, minBase1000?: number): string;
export declare function formatMoney(value: number, precision?: number): string;
export declare function formatDb(value: number): string;
export declare const formatSiBaseTenUnit: (value: number, minBase1000?: number, unit?: string) => string;
/**
 * Formats decisecond count into HH:MM:SS display by default
 * "short" format does not pad and adds hms suffixes
 */
export declare const formatTime: (val: number, formatType?: "short" | "default") => string;
