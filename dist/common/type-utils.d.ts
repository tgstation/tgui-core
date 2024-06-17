/**
 * Helps visualize highly complex ui data on the fly.
 * @example
 * ```tsx
 * const { data } = useBackend<CargoData>();
 * logger.log(getShallowTypes(data));
 * ```
 */
export declare function getShallowTypes(data: Record<string, any>): Record<string, any>;
