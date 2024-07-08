/**
 * Browser-agnostic abstraction of key-value web storage.
 *
 * @file
 * @copyright 2020 Aleksej Komarov
 * @license MIT
 */
export declare const IMPL_MEMORY = 0;
export declare const IMPL_LOCAL_STORAGE = 1;
export declare const IMPL_INDEXED_DB = 2;
/**
 * Web Storage Proxy object, which selects the best backend available
 * depending on the environment.
 */
declare class StorageProxy {
    backendPromise: Promise<any>;
    constructor();
    get(key: any): Promise<any>;
    set(key: any, value: any): Promise<any>;
    remove(key: any): Promise<any>;
    clear(): Promise<any>;
}
export declare const storage: StorageProxy;
export {};
